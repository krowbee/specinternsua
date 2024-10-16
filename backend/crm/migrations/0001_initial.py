# Generated by Django 4.2 on 2024-09-07 00:16

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Project",
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
                    "title",
                    models.CharField(max_length=256, verbose_name="Назва проєкту"),
                ),
                ("description", models.TextField(verbose_name="Опис")),
                ("start_date", models.DateField(verbose_name="Дата старту")),
                (
                    "duration_in_weeks",
                    models.IntegerField(null=True, verbose_name="Тривалість"),
                ),
                (
                    "project_link",
                    models.URLField(
                        max_length=256, null=True, verbose_name="Посилання на проєкт"
                    ),
                ),
                (
                    "preview",
                    models.URLField(
                        max_length=256,
                        null=True,
                        verbose_name="Посилання на зображення для прев'ю",
                    ),
                ),
                (
                    "status",
                    models.CharField(
                        choices=[
                            ("ACTIVE", "Active"),
                            ("NOT STARTED", "Not started"),
                            ("FINISHED", "Finished"),
                        ],
                        max_length=13,
                        null=True,
                    ),
                ),
                (
                    "members",
                    models.ManyToManyField(
                        related_name="team_members",
                        to=settings.AUTH_USER_MODEL,
                        verbose_name="Команда проєкту",
                    ),
                ),
                (
                    "task_asignee",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="team_lead",
                        to=settings.AUTH_USER_MODEL,
                        verbose_name="TeamLead",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Task",
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
                    "title",
                    models.CharField(max_length=126, verbose_name="Тема завдання"),
                ),
                ("description", models.TextField(verbose_name="Завдання")),
                (
                    "due_date",
                    models.DateField(null=True, verbose_name="Термін виконання"),
                ),
                (
                    "status",
                    models.CharField(
                        choices=[
                            ("IN PROGRESS", "In progress"),
                            ("COMPLETED", "Completed"),
                        ],
                        max_length=12,
                        verbose_name="Статус",
                    ),
                ),
                (
                    "priority",
                    models.CharField(
                        choices=[
                            ("LOW", "Low"),
                            ("MEDIUM", "Medium"),
                            ("HIGH", "High"),
                        ],
                        max_length=6,
                        verbose_name="Приорітет задачі",
                    ),
                ),
                (
                    "assigned_to",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="assigned_tasks",
                        to=settings.AUTH_USER_MODEL,
                        verbose_name="Отримувач",
                    ),
                ),
                (
                    "project",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="project_tasks",
                        to="crm.project",
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Event",
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
                    "event_type",
                    models.CharField(
                        choices=[
                            ("MEETING", "Зустріч"),
                            ("CODE REVIEW", "Код рев'ю"),
                            ("PROGRESS UPDATE", "Оновлення прогресу"),
                        ],
                        max_length=16,
                        null=True,
                        verbose_name="Тип події",
                    ),
                ),
                ("description", models.TextField(verbose_name="Опис події")),
                (
                    "date_time",
                    models.DateTimeField(null=True, verbose_name="Дата та час події"),
                ),
                (
                    "project",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="crm.project"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Assignment",
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
                    "assignment_date",
                    models.DateTimeField(
                        auto_now_add=True, verbose_name="Дата призначення"
                    ),
                ),
                (
                    "status",
                    models.CharField(
                        choices=[
                            ("IN PROGRESS", "In progress"),
                            ("COMPLETED", "Completed"),
                        ],
                        max_length=12,
                        verbose_name="Статус",
                    ),
                ),
                (
                    "executor",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                        verbose_name="Виконавець",
                    ),
                ),
                (
                    "task",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="crm.task",
                        verbose_name="Задача",
                    ),
                ),
            ],
        ),
    ]
