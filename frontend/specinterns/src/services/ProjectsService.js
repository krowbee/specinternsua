import $api from "../http/index.js";
import Project from "../models/ProjectModel";
import User from "../models/UserModel";
export default class ProjectsService {

    static sortProjects(projects){
        const projectsList = projects.map(project => {
            const membersInfo = project.members.map(member => {
                return new User(
                    member.id,
                    member.username,
                    member.email,
                    member.profile
                )
            })
            return new Project(
                project.id,
                project.title,
                project.description,
                project.status,
                project.start_date,
                project.duration_in_weeks,
                membersInfo,
                project.preview,
                project.project_link,
            )
        });

        return projectsList
    }

    static async getAllProjects() {
        try{
        const response = await $api.get('/public/projects')
        const projects = response.data
        return this.sortProjects(projects)
        }catch(e){
            console.log(e)
        }

    }

    static async getUserProjects() {
        try {
            const response = await $api.get('/crm/user-projects')
            const projects = response.data
            return this.sortProjects(projects)
        } catch (e) {
            console.log(e)
        }
    }

    static async getTasksAndEvents(id){
        try{
            const response = await $api.get(`/crm/events_and_tasks/${id}`)
            const data = response.data
            return data
        } catch(e){console.log(e)}
    }

    static async editMembers(members, project_id){
        const data = {'members': members}
        try{
            const response = await $api.patch(`/crm/user-projects/${project_id}/`, data )
            return response;
        }catch(e){
            console.log(e)
        }
    }

    static async getAllUsers(){
        try{
            const response = await $api.get('crm/all_users/')
            return response.data;
        }catch(e){
            console.log(e)
        }
    }
}