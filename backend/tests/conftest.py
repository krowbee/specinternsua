import pytest
from rest_framework.test import APIClient
from django.contrib.auth.models import User
from crm.models import Profile, Project
from rest_framework_simplejwt.tokens import RefreshToken
import datetime


@pytest.fixture
def client():
    return APIClient()


@pytest.fixture
def user(db):
    return User.objects.create_user(username='test_user', password='testpassword')


@pytest.fixture
def super_user(db):
    super_user = User.objects.create_superuser(username='test_super_user', password='testpassword', email='test_user@gmail.com')
    profile = Profile.objects.filter(user=super_user).first()
    profile.role = 'admin'
    profile.save()
    return super_user


@pytest.fixture
def access_token(user):
    refresh = RefreshToken.for_user(user)
    return str(refresh.access_token)


@pytest.fixture
def access_token_super_user(super_user):
    refresh = RefreshToken.for_user(super_user)
    return str(refresh.access_token)


@pytest.fixture
def project(user, db):
    project = Project.objects.create(title='Test Project', description='Test Project Desc',
                                     start_date=datetime.date(2023, 5, 17), duration_in_weeks=3,
                                     status='In progress', task_asignee=user)
    project.members.set([user])
    return project