import ProjectsBlock from "../components/Workshop/ProjectsBlock";
import WorkHeader from "../components/Workshop/WorkHeader";
import ProfileBlock from '../components/Workshop/ProfileBlock';
import { useState } from "react";
import { useEffect } from "react";
import ProjectsService from "../services/ProjectsService";
import ProjectDesc from "../components/Workshop/ProjectDesc";
const WorkshopPage = () =>{

    const [projects, setProjects] = useState([])
    useEffect(()=>{
            ProjectsService.getUserProjects().then(
                (fetchedProjects)=> {
                    setProjects(fetchedProjects)
                }
            )
        
    },[])

    const [selectedProject, setSelectedProject] = useState()

    const [projectId, setProjectId] = useState(false)

    const handleProjectBlock = (id = false) =>{
            const project = projects.find((project)=> project.id === id) || null
            setSelectedProject(project)
        setProjectId(id)
    }

    return(
        <>
        <WorkHeader></WorkHeader>
        <div className="h-full w-full flex flex-row">
        <ProjectsBlock handleProjectBlock={handleProjectBlock} projects={projects}></ProjectsBlock>
        {projectId ? (<ProjectDesc project={selectedProject}></ProjectDesc>) : <ProfileBlock></ProfileBlock>}

        </div>
        </>
    )
}

export default WorkshopPage;