import { useEffect, useState } from "react";
import ProjectsService from "../../services/ProjectsService";

const ProjectsBlock = () => {
    
    const [projects, setProjects] = useState([])
    useEffect(()=>{
            ProjectsService.getUserProjects().then(
                (fetchedProjects)=> {
                    setProjects(fetchedProjects)
                }
            )
        
    },[])


    return (
        <div className="h-full border w-[40rem] flex flex-col items-start">
            <div className="flex flex-row justify-center items-center w-full mb-[5px] border ">
                <h2 className="font-medium text-[26px]">Проєкти</h2>
            </div>
            <div className="h-full max-h-[400px] w-full overflow-y-scroll flex flex-col items-start scrollbar scrollbar-thin text-blue-400">
             <button onClick={()=>console.error(projects)}>consolelog</button>   
            {projects.map(project=>(
                <div className="project-container h-[60px] mb-[5px] flex flex-row justify-start items-center border w-full p-[3px]">
                    <h2 className="font-medium text-[26px]">{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ProjectsBlock;