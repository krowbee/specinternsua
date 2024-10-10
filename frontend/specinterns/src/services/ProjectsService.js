import $api from "../http";
import Project from "../models/ProjectModel";
import User from "../models/UserModel";
export default class ProjectsService{
    static async getAllProjects(){
        const response = await $api.get('/crm/projects/')
        const projects = response.data
        console.log(response.data)

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
                project.title,
                project.status,
                project.start_date,
                project.duration_in_weeks,
                membersInfo,
                project.preview
            )
        });

        return projectsList

    } 
}