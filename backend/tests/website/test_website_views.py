from django.urls import reverse
import pytest


@pytest.mark.django_db
class TestWebsiteViews():

    def test_get_all_projects(self, client, project):
        url = reverse('all-projects')
        response = client.get(url)

        assert response.status_code == 200
        assert len(response.data) != 0

        required_fields = {"title", "description", "start_date", "members", "duration_in_weeks", "status"}

        for field in required_fields:
            assert response.data[0][field]