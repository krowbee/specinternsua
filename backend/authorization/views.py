from datetime import timedelta
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from crm.serializers import UserSerializer


class RegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')

        if User.objects.filter(username=username).exists():
            return Response({"error": "User already exists"}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(username=username, email=email, password=password)
        user.save()

        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        refresh_token = str(refresh)

        response = Response({"message": "User created successfully",
                            'accessToken': access_token},
                            status=status.HTTP_201_CREATED)

        response.set_cookie(
                key='refreshToken',
                value=refresh_token,
                httponly=True,
                secure=False,
                samesite='Lax',
                max_age=timedelta(days=30)
            )

        return response


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(username=username, password=password)

        if user is not None:
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            refresh_token = str(refresh)
            user_serializer = UserSerializer(user)
            response = Response({'accessToken': access_token, 'user': user_serializer.data})
            response.set_cookie(
                key='refreshToken',
                value=refresh_token,
                httponly=True,
                secure=False,
                samesite='Lax',
                max_age=timedelta(days=30)
            )
            return response
        else:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        response = Response({"message": "Logged out successfully"}, status=status.HTTP_205_RESET_CONTENT)
        response.delete_cookie('refreshToken', path='/')
        return response


class TokenRefreshView(APIView):

    permission_classes = [AllowAny]

    def post(self, request):
        refresh_token = request.COOKIES.get('refreshToken')
        if not refresh_token:
            return Response({"error": "Refresh token is missing"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            refresh = RefreshToken(refresh_token)
            access_token = str(refresh.access_token)

            return Response({'accessToken': access_token})
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_401_UNAUTHORIZED)
