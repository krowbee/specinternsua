from django.urls import include, path
from .views import LoginView, TokenRefreshView, LogoutView

urlpatterns = [
    path('', include('djoser.urls')),
    path('login/', LoginView.as_view()),
    path('token_refresh/', TokenRefreshView.as_view()),
    path('logout/', LogoutView.as_view()),
]
