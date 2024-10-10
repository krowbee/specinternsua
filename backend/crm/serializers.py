from rest_framework import serializers
from crm.models import Event, Project, Profile, Task
from django.contrib.auth.models import User


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ['full_name', 'linkedin', 'specialization', 'discord_id',]


class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'profile']


class ProjectSerializer(serializers.ModelSerializer):
    members = UserSerializer(many=True)
    task_asignee = UserSerializer()

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'members', 'start_date',
                  'duration_in_weeks', 'project_link', 'preview', 'status', 'task_asignee']


class TaskSerializer(serializers.ModelSerializer):
    assigned_to = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    project = serializers.PrimaryKeyRelatedField(queryset=Project.objects.all())

    class Meta:
        model = Task
        fields = ['title', 'description', 'assigned_to', 'project', 'due_date', 'status', 'priority']


class EventSerializer(serializers.ModelSerializer):
    project = serializers.PrimaryKeyRelatedField(queryset=Project.objects.all())

    class Meta:
        model = Event
        fields = ['event_type', 'description', 'date_time', 'project']
