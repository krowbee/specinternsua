from django.contrib import admin
from .models import Project, Task, Assignment, Event
# Register your models here.

admin.site.register(Project)
admin.site.register(Task)
admin.site.register(Assignment)
admin.site.register(Event)
