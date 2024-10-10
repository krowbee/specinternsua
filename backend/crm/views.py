from rest_framework import viewsets
from .models import Project, Event, Task
from .serializers import ProjectSerializer, EventSerializer, TaskSerializer


# Create your views here.


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.prefetch_related('members__profile')
    serializer_class = ProjectSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
