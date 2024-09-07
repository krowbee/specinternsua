from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from crm.models import Project
# Create your models here.


# Модель юзер менеджера
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, password, **extra_fields)


# Модель користувача
class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField("Електронна адреса", unique=True)
    first_name = models.CharField("Ім'я", max_length=30)
    last_name = models.CharField("Фамілія", max_length=30)
    password = models.CharField(max_length=128)
    linkedin = models.URLField("LinkedIn", blank=True, null=True)
    specialization = models.CharField("Спеціалізація", max_length=25, null=True, choices=(
                                                              ("FRONT-END", "Front-End"),
                                                              ("BACK-END", "Back-End"),
                                                              ('QA-TESTER', 'QA-tester'),
                                                              ('DESIGNER', 'Designer'),
                                                              ('DATA SCRAPER', 'Data Scraper')))
    discord_id = models.CharField(blank=True, null=True, max_length=100)
    projects = models.ManyToManyField(Project, verbose_name=("Участь в проектах"))
    certificate = models.CharField("Номер сертифіката", max_length=128, unique=True, null=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'specialization']

    objects = CustomUserManager()

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
