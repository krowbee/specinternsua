import { useState } from "react";
import { useContext } from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import ProjectsService from "../../services/ProjectsService";
import UserAddBlock from "./UserAddBlock";

const MembersBlock = ({ membersAndSpecialization, project_id }) => {
    const { store } = useContext(Context)
    const [edit, setEdit] = useState(false)
    const [membersForRemove, setMembersForRemove] = useState([])
    const [addUser, setAddUser] = useState(false)
    const [membersForAdd, setMembersForAdd] = useState([])
    const HandleEdit = () => {
        setEdit(!edit)
        setAddUser(false)
        setMembersForAdd([])
        setMembersForRemove([])
    }
    const HandleDeleting = (memberForRemove) => {
        setMembersForRemove(prevMembers => [...prevMembers, memberForRemove])
    }

    const EditUsers = async () => {
        const currentMembers = Object.entries(membersAndSpecialization)
            .flatMap(([_, members]) =>
                members
                    .filter(member => !membersForRemove.includes(member.id))
                    .map(member => ({ id: member.id }))
            );
        
        const saveMembers = [
            ...currentMembers,
            ...membersForAdd.map(id => ({ id })) 
        ];
        const response = await ProjectsService.editMembers(saveMembers, project_id)
        setEdit(!edit)
    }

    return (
        <>
            <div className="flex flex-row justify-between items-center w-full p-[5px]">
            <p onClick={() => HandleEdit()} className="cursor-pointer rounded-md bg-yellow-400 w-6 h-6">✏️</p>
            {edit  ? <p onClick={() => EditUsers() } className=" cursor-pointer rounded-md bg-green-400 text-white w-6 h-6">✔</p> : ''}
            {edit ? <p onClick={() => setAddUser(!addUser)} className=" cursor-pointer rounded-md bg-blue-300 text-white text-[16px] w-6 h-6 text-center">✚</p> : ''}
            </div>
            {!addUser ? (
                <>
                    <p className="text-blue-500 font-semibold mb-[10px] text-center">Учасники</p>
                    {Object.entries(membersAndSpecialization).map(([specialization, members], index) => (
                        <div key={index} className="team-specialization mb-[5px]">
                            <p className="text-blue-400 font-medium">{specialization}</p>
                            {members.filter(member => !membersForRemove.includes(member.id)).map((member, memberIndex) => (
                                <div key={memberIndex} className="team-member flex flex-between border items-center justify-center">
                                    <a href={member.profile.linkedin}>
                                        <p className="font-medium text-[15px] text-blue-300 w-full flex flex-row no-wrap">{member.profile.full_name}</p>
                                    </a>
                                    {edit ? <p className="flex flex-col text-white bg-red-600 cursor-pointer border rounded-md w-3 h-3 text-[10px] border-red-600 text-center items-center justify-center" onClick={() => HandleDeleting(member.id)}>X</p> : ''}
                                </div>
                            ))}
                        </div>
                    ))}
                </>
            ) : addUser && (<UserAddBlock setMembersForAdd={setMembersForAdd} membersForAdd={membersForAdd} project_id={project_id} />)}

        </>
    )
}

export default observer(MembersBlock);