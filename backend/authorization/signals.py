from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from crm.models import Profile

User = get_user_model()


# Створення профілю користувача при його реєстрації
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
