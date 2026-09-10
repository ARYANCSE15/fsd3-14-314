let teams=[
    { id:1 , tname:'Rusty', tl:'Aryan Sharma',email: 'aryan.sharma@gmail.com',members: 6,},

{
    id:2,
    tname:"Code Crafters",
    tl:"ManshihaSingh",
    email:"mani.singh@gmail.com",
    memeber:5,
},
];
let nextID=3;
export const getALLTeams = () =>teams;
export const getTeamById =(id) =>teams.find((team)=> team.id===id);
export const addTeam=(newTeam)=>{
    const team ={id:nextId++,newTeam};
    teams.push(team);
    return team;
};
export const updateTeamId=(id,updateTeam) => {
const team=getTeamById(id);
if(!team){
    return null;
}
Object.assign(team,uodateTeam);
return team;
};
export const deleteTeam = (id) => {
    const index=teams.findIndex((team)=>team.id===id);
if(index==-1)return false;
teams.splice(index,1);
return true;
};