from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class Patient(AbstractUser):
    phone = models.CharField(max_length=15)
    email = models.EmailField(unique=True)
    
    groups = models.ManyToManyField(
        Group,
        verbose_name='groups',
        blank=True,
        help_text='The groups this user belongs to.',
        related_name='patient_set',
        related_query_name='patient',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name='user permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        related_name='patient_set',
        related_query_name='patient',
    )
    
    # Add required fields to REQUIRED_FIELDS
    REQUIRED_FIELDS = ['email', 'phone']

    def __str__(self):
        return self.email

