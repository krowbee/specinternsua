# Generated by Django 4.2 on 2024-09-07 00:16

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("auth", "0012_alter_user_first_name_max_length"),
    ]

    operations = [
        migrations.CreateModel(
            name="CustomUser",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "last_login",
                    models.DateTimeField(
                        blank=True, null=True, verbose_name="last login"
                    ),
                ),
                (
                    "is_superuser",
                    models.BooleanField(
                        default=False,
                        help_text="Designates that this user has all permissions without explicitly assigning them.",
                        verbose_name="superuser status",
                    ),
                ),
                (
                    "email",
                    models.EmailField(
                        max_length=254, unique=True, verbose_name="Електронна адреса"
                    ),
                ),
                ("first_name", models.CharField(max_length=30, verbose_name="Ім'я")),
                ("last_name", models.CharField(max_length=30, verbose_name="Фамілія")),
                ("password", models.CharField(max_length=128)),
                (
                    "linkedin",
                    models.URLField(blank=True, null=True, verbose_name="LinkedIn"),
                ),
                (
                    "specialization",
                    models.CharField(
                        choices=[
                            ("FRONT-END", "Front-End"),
                            ("BACK-END", "Back-End"),
                            ("QA-TESTER", "QA-tester"),
                            ("DESIGNER", "Designer"),
                            ("DATA SCRAPER", "Data Scraper"),
                        ],
                        max_length=25,
                        null=True,
                        verbose_name="Спеціалізація",
                    ),
                ),
                ("discord_id", models.CharField(blank=True, max_length=100, null=True)),
                (
                    "certificate",
                    models.CharField(
                        max_length=128,
                        null=True,
                        unique=True,
                        verbose_name="Номер сертифіката",
                    ),
                ),
                (
                    "groups",
                    models.ManyToManyField(
                        blank=True,
                        help_text="The groups this user belongs to. A user will get all permissions granted to each of their groups.",
                        related_name="user_set",
                        related_query_name="user",
                        to="auth.group",
                        verbose_name="groups",
                    ),
                ),
            ],
            options={
                "abstract": False,
            },
        ),
    ]