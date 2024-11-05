from django.urls import path
from .views import AllProjectsView


urlpatterns = [
    path('projects/', AllProjectsView.as_view(), name='all-projects')
]
