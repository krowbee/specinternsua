import { useEffect, useState } from "react";

const ProjectsBlock = ({handleProjectBlock, projects}) => {
    


    return (
        <div className="h-full border w-[40rem] flex flex-col items-start">
            <div className="flex flex-row justify-center items-center w-full mb-[5px] border ">
                <h2 className="font-medium text-[26px]">Проєкти</h2>
            </div>
            <div className="h-full max-h-[400px] w-full overflow-auto overflow-x-hidden thin-scrollbar flex flex-col items-start"> 
            {projects.map(project=>(
                <div className="project-container h-[60px] mb-[5px] flex flex-row justify-start items-center border w-full p-[3px] items-center mr-[20px]">
                    <h2 onClick={()=>handleProjectBlock(project.id)} className="font-medium text-[26px] cursor-pointer text-blue-400 hover:text-blue-500 ">{project.title}</h2>
                </div>
            ))}
            </div>
        </div>
    )
}

export default ProjectsBlock;