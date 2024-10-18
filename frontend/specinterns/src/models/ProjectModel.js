
export default class Project{
    constructor(title, description, status, startDate, duration, members, preview, project_link){
        this.title = title;
        this.status = status;
        this.startDate = startDate;
        this.duration = duration;
        this.members = members;
        this.preview = preview;
        this.project_link = project_link
        this.description = description
    }
}