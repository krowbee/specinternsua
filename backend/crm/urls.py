from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserProjectViewSet, EventsAndTasksView, UserView
router = DefaultRouter()
router.register('user-projects', UserProjectViewSet, basename='user-projects')


urlpatterns = [
    path('events_and_tasks/<int:project_id>', EventsAndTasksView.as_view(), name='event-and-tasks'),
    path('all_users/', UserView.as_view(), name='all-users'),
    path('', include(router.urls)),
]
