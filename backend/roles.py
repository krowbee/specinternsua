from rest_framework_roles.roles import is_anon, is_user
from crm.models import Project


def is_team_lead(request, view):
    project_id = view.kwargs.get(['pk'])
    try:
        project = Project.objects.get(id=project_id)
        return request.user == project.task_asignee
    except Project.DoesNotExist:
        return False


def is_admin(request, view):
    return request.user.profile.role == 'admin'


ROLES = {
    'team_lead': is_team_lead,
    'admin': is_admin,
    'anon': is_anon,
    'user': is_user,
}