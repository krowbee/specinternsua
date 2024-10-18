from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserProjectViewSet

router = DefaultRouter()
router.register('user-projects', UserProjectViewSet, basename='user-projects')


urlpatterns = [
    path('', include(router.urls))
]
