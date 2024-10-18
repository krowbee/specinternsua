from rest_framework import viewsets
from .models import Project, Event, Task
from .serializers import ProjectSerializer, EventSerializer, TaskSerializer
from django.db.models import Q


class UserProjectViewSet(viewsets.ModelViewSet):
    view_permissions = {
        'list': {'user': True, 'admin': True},
        'update,partial_update': {'admin': True, 'admin': True} 
    }

    serializer_class = ProjectSerializer

    def get_queryset(self):
        queryset = Project.objects.filter(Q(members=self.request.user) | Q(task_asignee=self.request.user)
                                          ).prefetch_related('members__profile')
        return queryset


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
