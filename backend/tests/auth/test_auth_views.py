import pytest
from rest_framework_simplejwt.tokens import RefreshToken
from datetime import timedelta
from django.utils import timezone
from freezegun import freeze_time


@pytest.fixture
def refresh_token(user):
    return RefreshToken.for_user(user)


@pytest.mark.django_db
class TestAuth():

    def test_login_view(self, client, user):
        data = {
            'username': user.username,
            'password': 'testpassword'
                }

        response = client.post('/auth/login/', data, format='json')

        assert response.status_code == 200
        assert response.data['accessToken']
        assert response.data['user']['profile']

    def test_refresh_view(self, client, refresh_token):
        client.cookies['refreshToken'] = str(refresh_token)
        response = client.post('/auth/token_refresh/', format='json')

        assert response.status_code == 200
        assert response.data['accessToken']

    def test_refresh_with_expired_token(self, client, refresh_token):
        current_time = timezone.now()
        refresh_token.set_exp(lifetime=timedelta(seconds=1))

        with freeze_time((current_time + timedelta(seconds=2)).isoformat()):
            client.cookies['refreshToken'] = str(refresh_token)
            response = client.post('/auth/token_refresh/', format='json')

        assert response.status_code == 401
        assert response.data['error']

    def test_logout_view(self, client, refresh_token):
        access_token = refresh_token.access_token

        client.cookies['refreshToken'] = str(refresh_token)
        client.credentials(HTTP_AUTHORIZATION=f'Bearer {access_token}')

        response = client.post('/auth/logout/',)
        refresh_token_cookie = client.cookies.get('refreshToken')

        assert response.status_code == 205
        assert not refresh_token_cookie or refresh_token_cookie.value == ""
