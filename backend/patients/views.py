
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import PatientRegistrationSerializer, PatientSerializer
from .models import Patient

class RegisterPatientView(generics.CreateAPIView):
    queryset = Patient.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = PatientRegistrationSerializer

class PatientProfileView(generics.RetrieveUpdateAPIView):
    queryset = Patient.objects.all()
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = PatientSerializer

    def get_object(self):
        return self.request.user

class LoginView(TokenObtainPairView):
    permission_classes = (permissions.AllowAny,)