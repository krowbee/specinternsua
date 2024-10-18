from rest_framework import serializers
from crm.models import Event, Project, Profile, Task
from django.contrib.auth.models import User


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = ['full_name', 'linkedin', 'specialization', 'discord_id',]


class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer()
    id = serializers.IntegerField(read_only=False)

    def update(self, instance, validated_data):
        if 'id' in validated_data:
            raise serializers.ValidationError({'id': 'Changing ID is not allowed.'})

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'profile']


class ProjectSerializer(serializers.ModelSerializer):
    members = UserSerializer(many=True, read_only=False)
    task_asignee = UserSerializer()

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'members', 'start_date',
                  'duration_in_weeks', 'project_link', 'preview', 'status', 'task_asignee']
        
    def update(self, instance, validated_data):
        fields = ['title', 'description', 'start_date',
                  'duration_in_weeks', 'project_link', 'preview', 'status',]
        
        for field in fields:
            if field in validated_data:
                setattr(instance, field, validated_data[field])
        
        if 'task_asignee' in validated_data:
            new_task_asignee = validated_data.get('task_asignee')
            try:
                new_task_asignee = User.objects.get(id=new_task_asignee['id'])
            except User.DoesNotExist:
                raise serializers.ValidationError({'task_asignee': 'User not found'})
            
            instance.task_asignee = new_task_asignee
        
        if 'members' in validated_data:
            members = validated_data.pop("members")
            members_ids = [member.get("id") for member in members]
            new_members = User.objects.filter(id__in=members_ids)

            if new_members.count() != len(members_ids):
                raise serializers.ValidationError({'members': members_ids})
            
            instance.members.set(new_members)
        
        instance.save()
        return instance


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
