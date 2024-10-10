import './Projects.css'
import ProjectsService from '../../services/ProjectsService';
import { useEffect, useState } from 'react';
import Projects from './Projects';

const ProjectsList = () => {

    const [fetchedProjects, setFetchedProjects] = useState([])
    useEffect(()=>{ProjectsService.getAllProjects()
    .then(fetchedProjects =>{
        setFetchedProjects(fetchedProjects);

    })}
    ,[])

    return (
        <>
        <div className='w-full bg-[#e6e7e9] h-[100px] flex flex-col justify-center flex-wrap' id='project-list'>
            <h2 className='uppercase text-[#53535f]'>проєкти які чекають на тебе</h2>
        </div>
        <div className="projects-container flex w-full justify-center flex-row flex-wrap ">
            {fetchedProjects.map(project=>(
            <Projects key={project.id} project={project}></Projects>
            ))}
        </div>
        </>
        
    )
}

export default ProjectsList;