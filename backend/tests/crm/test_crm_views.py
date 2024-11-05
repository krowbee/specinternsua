from django.utils import timezone
from dateutil.relativedelta import relativedelta
import pytest
from crm.models import Event, Task
from django.urls import reverse


@pytest.mark.django_db
class TestCRMViews():

    def test_get_user_project_view(self, client, access_token, project):
        client.credentials(HTTP_AUTHORIZATION=f'Bearer {access_token}')

        url = reverse('user-projects-list', args=[])

        response = client.get(url)

        assert response.status_code == 200
        assert len(response.data) == 1

        required_fields = {"title", "description", "start_date", "duration_in_weeks", "status"}
        for field in required_fields:
            assert field in response.data[0], f'Missing this field {field} in data'
            assert str(response.data[0][field]) == str(getattr(project, field)), f'''Field {field} value doesn't match.
                                                                         Expected {getattr(project, field)}.
                                                                         Received {response.data[0][field]}'''

    def test_get_events_and_tasks_view(self, client, access_token, project, user):
        Event.objects.create(description='TEST EVENT DESCRIPTION',
                             date_time=(timezone.now() + relativedelta(months=1)), project=project)

        Task.objects.create(title='TEST TASK', description='TEST DESCRIPTION', assigned_to=user,
                            project=project, status="In progress", priority='Low',
                            due_date=(timezone.now() + relativedelta(months=1)))

        url = reverse('event-and-tasks', args=[project.id])

        client.credentials(HTTP_AUTHORIZATION=f'Bearer {access_token}')
        response = client.get(url)

        assert response.status_code == 200
        assert response.data['events'] and response.data['tasks']

    def test_get_users_view(self, client, access_token_super_user,):
        url = reverse('all-users')

        client.credentials(HTTP_AUTHORIZATION=f'Bearer {access_token_super_user}')
        response = client.get(url)

        required_fields = {'id', 'username', 'email', 'profile'}

        assert response.status_code == 200

        for field in required_fields:
            assert response.data['users'][0][field], f'Expected this field {field}'
