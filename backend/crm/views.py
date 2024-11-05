from rest_framework import viewsets, views, permissions, response
from .models import Project, Event, Task
from .serializers import ProjectSerializer, EventSerializer, TaskSerializer, UserSerializer
from django.db.models import Q
from django.utils import timezone
from django.contrib.auth.models import User


class UserProjectViewSet(viewsets.ModelViewSet):
    view_permissions = {
        'list': {'user': True, 'admin': True},
        'update,partial_update': {'admin': True, 'admin': True} 
    }

    serializer_class = ProjectSerializer

    def get_queryset(self):
        queryset = Project.objects.filter(Q(members=self.request.user) | Q(task_asignee=self.request.user)
                                          ).prefetch_related('members__profile').distinct()
        return queryset


class EventsAndTasksView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request, project_id):
        user = request.user
        project = Project.objects.filter(Q(members=user) & Q(id=project_id)).first()

        if not project:
            return response.Response({"error": "Project not found or access denied"}, status=404)
        
        today = timezone.now()

        events = Event.objects.filter(Q(project=project) & Q(date_time__gte=today))
        tasks = Task.objects.filter(Q(assigned_to=user) & Q(project=project) & Q(due_date__gte=today.date()))
        event_serializer = EventSerializer(events, many=True)
        task_serializer = TaskSerializer(tasks, many=True)

        return response.Response(
            {'events': event_serializer.data,
             'tasks': task_serializer.data}
        )


class UserView(views.APIView):
    view_permissions = {
        'get': {'admin': True}
    }

    def get(self, request):
        users = User.objects.filter(profile__isnull=False)
        user_serializer = UserSerializer(users, many=True)

        return response.Response({'users': user_serializer.data})