import { useEffect, useState } from "react";
import ProjectsService from "../../services/ProjectsService";
import TeamViewService from "../../services/TeamViewService";

const UserAddBlock = ({ setMembersForAdd, membersForAdd, project_id }) => {
    const [usersList, setUsersList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const HandleAddUser = (newMemberId) =>{
        setMembersForAdd(prevMembers => [...prevMembers, newMemberId])
    }

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await ProjectsService.getAllUsers();
                if (response.users) {
                    const usersBySpecialization = TeamViewService.getTeamSpecialization(response.users);
                    setUsersList(usersBySpecialization);
                } else {
                    console.error("Users not found in response");
                }
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <>
        { project_id}
            {!isLoading ? (
                Object.entries(usersList).map(([specialization, users]) => (
                    <div className="team-specialization" key={specialization}>
                        <p className="text-blue-400 font-medium">{specialization}</p>
                        {users.filter((user) => !membersForAdd.includes(user.id)).map((user) => (
                                <div
                                    className="user flex flex-row w-full text-center items-center justify-center"
                                    key={user.id}
                                >
                                    <p onClick={()=>HandleAddUser(user.id)} className="font-medium text-blue-300 hover:bg-green-500 hover:text-white p-[2px] hover:rounded-md cursor-pointer">
                                        {user.profile.full_name}
                                    </p>
                                </div>
                            ))}
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default UserAddBlock;
