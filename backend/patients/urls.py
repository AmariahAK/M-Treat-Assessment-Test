
from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import RegisterPatientView, PatientProfileView, LoginView

urlpatterns = [
    path('register/', RegisterPatientView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('profile/', PatientProfileView.as_view(), name='profile'),
]

