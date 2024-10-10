export default class TeamViewService{
    static getTeamSpecialization = (members) =>{
        const membersBySpecialization = members.reduce((acc, member)=>{
            const specialization = member.profile.specialization
            if(!acc[specialization]){
                acc[specialization] = [];
            }
            acc[specialization].push(member)
            return acc;
        },{})
        return membersBySpecialization
    }
}