
export default class Project{
    constructor(id, title, description, status, startDate, duration, members, preview, project_link){
        this.id = id;
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