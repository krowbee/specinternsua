import { useState } from 'react';
import './Projects.css';
import ProjectsTeam from './ProjectsTeam';

const Projects = ({ project }) => {
    const [teamView, setTeamView] = useState(false);

    const statusClasses = {
        "Not started": "bg-white",
        "Active": "bg-yellow-500",
        "Finished": "bg-green-500"
    };

    const durationWord = (project.duration <= 4) ? 'тижні' : 'тижнів';
    const statusWords = {
        "Not started": "Не розпочатий",
        "Active": "В розробці",
        "Finished": 'Завершено'
    };

    const bgURL = project.preview;
    const statusWord = statusWords[project.status];
    const bgColor = statusClasses[project.status];

    return (
        <div
            className="project border-[#f77031] inline-block bg-center bg-cover rounded-xl relative h-full text-white flex flex-col"
            style={{ backgroundImage: `url(${bgURL})` }}
        >
            <div className={`project-card relative h-[46.4rem] max-w-[37.8rem] flex flex-1 flex-col justify-between rounded-lg ${!teamView ? 'bg-gradient-to-tr from-black hover:from-black/50 hover:to-black/20 hover:bg-transparent' : '!bg-black/80'}`}>
                {(() => {
                    if (!teamView) {
                        return (
                            <>
                                <div className='status-block relative flex min-w-[15.7rem] max-w-fit items-center gap-3 rounded-md border border-neutral-100 px-6 py-3'>
                                    <div className={`h-8 w-8 rounded-full ${bgColor}`}></div>
                                    <span className='status'>{statusWord}</span>
                                </div>
                                <div className='title-block items-center justify-self-center flex mx-auto break-words justify-items-start p-1'>
                                    <h4 className="project-name">{project.title}</h4>
                                </div>
                                <div className="flex flex-col">
                                    <div className='w-full flex justify-between p-3'>
                                        <span>Старт проєкту</span>
                                        <span>{project.startDate}</span>
                                    </div>
                                    <div className='w-full flex justify-between p-3'>
                                        <span>Тривалість</span>
                                        <span>{project.duration} {durationWord}</span>
                                    </div>
                                    <span
                                        className='text-white text-2xl underline underline-offset-8 mb-2 cursor-pointer'
                                        onClick={() => setTeamView(true)}
                                    >
                                        Команда проєкту
                                    </span>
                                </div>
                            </>
                        );
                    } else {
                        return(
                        <ProjectsTeam members={project.members} setTeamView={setTeamView}/>
                        )
                }
                })()}
            </div>
        </div>
    );
}

export default Projects;
