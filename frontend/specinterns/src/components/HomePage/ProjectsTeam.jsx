import TeamViewService from "../../services/TeamViewService";

const ProjectsTeam = ({ members, setTeamView }) => {

    const membersBySpecialization = TeamViewService.getTeamSpecialization(members)

    return (
        <div className="flex flex-col p-5">
            <div className="flex flex-row-reverse justify-between mb-5">
                <svg onClick={() => setTeamView(false)}
                    className='cursor-pointer'
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                <h2 className="!text-[25px] ">Команда проєкту</h2>
            </div>
            {Object.entries(membersBySpecialization).map(([specialization, members], index) => (
                <div key={index} className='specialization flex flex-col justify-start items-start mb-2'>
                    <h3 className="font-medium text-[18px]">{specialization}</h3>
                    <ul>
                        {members.map((member) => (
                            <li><a href={member.profile.linkedin} className='text-[#f77031] text-[16px] underline'>{member.profile.full_name}</a></li>
                        ))}
                    </ul>

                </div>
            ))}
        </div>
    );

}

export default ProjectsTeam;