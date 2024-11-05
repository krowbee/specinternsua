from django.db import models
from django.contrib.auth.models import User

PROJECT_STATUS = (("Active", "В розробці"),
                  ("Not started", "Не розпочато"),
                  ("Finished", "Завершено"))

STATUSES = (("In progress", "In progress"),
            ("Completed", "Completed"))

TASK_PRIORITY = (("Low", "Low"),
                 ("Medium", "Medium"),
                 ("High", "High"))

EVENT_TYPES = (("Meeting", "Зустріч"),
               ("Code Review", "Код рев'ю"),
               ("Progress Update", "Оновлення прогресу"))

ROLES = (('admin', 'Адміністратор'),
         ('user', 'Користувач'))


class Project(models.Model):
    title = models.CharField("Назва проєкту", max_length=256)
    description = models.TextField("Опис")
    members = models.ManyToManyField(User, verbose_name="Команда проєкту", related_name='team_members')
    start_date = models.DateField("Дата старту")
    duration_in_weeks = models.IntegerField("Тривалість", null=True)
    project_link = models.URLField("Посилання на проєкт", null=True, blank=True, max_length=256)
    preview = models.URLField("Посилання на зображення для прев'ю", null=True, blank=True, max_length=256)
    status = models.CharField(max_length=13, null=True, choices=PROJECT_STATUS)
    task_asignee = models.ForeignKey(User, verbose_name=("TeamLead"),
                                     on_delete=models.SET_NULL, null=True, related_name="team_lead")

    def __str__(self):
        return self.title


class Profile(models.Model):
    full_name = models.CharField(max_length=128, null=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    linkedin = models.URLField("LinkedIn", blank=True, null=True)
    specialization = models.CharField("Спеціалізація", max_length=25, null=True, choices=(
                                                              ("FRONT-END", "Front-End"),
                                                              ("BACK-END", "Back-End"),
                                                              ('QA-TESTER', 'QA-tester'),
                                                              ('DESIGNER', 'Designer'),
                                                              ('DATA SCRAPER', 'Data Scraper')))
    discord_id = models.CharField(blank=True, null=True, max_length=100)
    role = models.CharField(default='user', choices=ROLES, max_length=10)

    def __str__(self):
        return f'{self.user.username} profile'


class Certificate(models.Model):
    number = models.CharField(unique=True, null=True, max_length=128)
    user = models.ForeignKey(User, verbose_name="Власник сертифікату", on_delete=models.CASCADE,
                             related_name="certificate_owner")


class Task(models.Model):
    title = models.CharField("Тема завдання", max_length=126)
    description = models.TextField("Завдання")
    assigned_to = models.ForeignKey(User, verbose_name="Отримувач", on_delete=models.CASCADE,
                                    related_name='assigned_tasks')
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='project_tasks')
    due_date = models.DateField("Термін виконання", null=True)
    status = models.CharField("Статус", max_length=12, choices=STATUSES)
    priority = models.CharField("Приорітет задачі", max_length=6, choices=TASK_PRIORITY)


class Event(models.Model):
    event_type = models.CharField("Тип події", null=True, max_length=16, choices=EVENT_TYPES)
    description = models.TextField("Опис події")
    date_time = models.DateTimeField("Дата та час події", null=True)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='events')


class Assignment(models.Model):
    task = models.ForeignKey(Task, verbose_name="Задача", on_delete=models.CASCADE)
    executor = models.ForeignKey(User, verbose_name="Виконавець", on_delete=models.CASCADE)
    assignment_date = models.DateTimeField("Дата призначення", auto_now_add=True)
    status = models.CharField("Статус", max_length=12, choices=STATUSES)
