import { useEffect, useState } from "react";
import ProjectsService from "../../services/ProjectsService";
import TeamViewService from '../../services/TeamViewService'
import MembersBlock from "./MembersBlock";
const ProjectDesc = ({ project, }) => {
    
    const [eventsAndTasks, setEventsAndTasks] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const membersAndSpecialization = TeamViewService.getTeamSpecialization(project.members)

    useEffect(() => {
        const fetchEventsAndTasks = async () => {
            const eventAndTask = await ProjectsService.getTasksAndEvents(Number(project.id))
            setEventsAndTasks(eventAndTask)
            setIsLoading(false)
        }
        fetchEventsAndTasks()
    }, [project.id])



    const priorityClasses = {
        Low: 'bg-green-400 border-green-500',
        Medium: 'bg-yellow-400 border-yellow-500',
        High: 'bg-red-500 border-red-600'
    }

    return (
        <div className="flex flex-col items-center w-full h-[calc(100vh-50px)] bg-[#f6f6f6] p-[20px] gap-[15px] overflow-auto thin-scrollbar">
            <h2 className="bg-white text-[#5F9EA0] font-medium w-[75%] rounded-md shadow-md text-center p-[15px]">
                {project.title}
            </h2>
            <p className="bg-white text-[#5F9EA0] font-medium w-[75%] rounded-md shadow-sm p-[15px]">
                {project.description}
            </p>
            <div className="flex flex-row justify-around w-[75%] bg-white rounded-md p-[10px] shadow-sm">
                <p className="text-[#5F9EA0] font-medium">Дата старту: {project.startDate}</p>
                <p className="text-[#5F9EA0] font-medium">Тривалість: {project.duration} тижні</p>
                <p className="text-[#5F9EA0] font-medium">Статус проєкта: {project.status}</p>
            </div>
    
            <div className="flex flex-row justify-between w-[75%] gap-[15px]">
                <div className="team-members flex flex-col bg-white w-[250px] rounded-md shadow-md p-[10px] max-h-[300px] overflow-auto thin-scrollbar">
                    <MembersBlock membersAndSpecialization={membersAndSpecialization} project_id={project.id}></MembersBlock>
                </div>
    
                <div className="task-container flex flex-col w-full bg-white rounded-md shadow-md p-[15px] max-h-[300px] overflow-auto thin-scrollbar">
                        <h2 className="text-center font-medium text-[#5F9EA0] mb-[10px]">Завдання</h2>
                    {!isLoading && eventsAndTasks.tasks ? (
                        eventsAndTasks.tasks.map((task, taskIndex) => (
                            <div key={taskIndex} className={`task-block mb-[10px] w-full p-[10px] rounded-md border-[2px] shadow-md ${priorityClasses[task.priority]}`}>
                                <h3 className="text-[22px] mb-[5px]">{task.title}</h3>
                                <p className="text-start font-medium mb-[5px]">{task.description}</p>
                                <div className="flex justify-between">
                                    <p className="font-medium">Виконати до: {task.due_date}</p>
                                    <p className="font-medium">Пріоритет: {task.priority}</p>
                                </div>
                            </div>
                        ))
                    ) : null}
                </div>
            </div>
    
            <div className="event-container w-[75%] bg-white rounded-md shadow-md p-[15px] mt-[15px] min-h-[290px] max-h-[300px] overflow-auto thin-scrollbar">
                    <h4 className="text-center font-medium text-[#5F9EA0] mb-[10px]">Найближчі заходи</h4>
                {!isLoading && eventsAndTasks.events ? (
                    eventsAndTasks.events.map((event, eventIndex) => (
                        <div key={eventIndex} className="event-block mb-[10px] bg-red-300 rounded-md border-[2px] border-red-400 w-full p-[10px] shadow-md">
                            <h3 className="text-[22px] font-medium mb-[5px]">{event.event_type}</h3>
                            <p className="font-medium mb-[5px]">{event.description}</p>
                            <p className="font-medium">{event.date_time}</p>
                        </div>
                    ))
                ) : null}
            </div>
        </div>
    )
}

export default ProjectDesc;