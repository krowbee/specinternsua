from rest_framework import views, permissions
from rest_framework.response import Response
from crm.models import Project
from crm.serializers import ProjectSerializer


class AllProjectsView(views.APIView):
    permission_classes = [permissions.AllowAny]
    
    def get(self, request):
        queryset = Project.objects.prefetch_related('members__profile')
        serializer = ProjectSerializer(queryset, many=True)
        return Response(serializer.data)
