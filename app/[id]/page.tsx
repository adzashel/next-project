type teamData =  {
    name: string;
    avatar: string;
    stack: string;
    id: number;
}


const getMemberDetail = async(id : number) : Promise<teamData | null> => {
    try {
        const response = await fetch(`https://67e5832118194932a5865cf4.mockapi.io/teams/${id}`);
        if(!response.ok ) {
            return null;
        }

        const teamDetail = await response.json();
        return teamDetail;
    }catch(e) {
        console.error("error while fetching", e);
        return null;
    }
}


const  detailPage = async ({ params } : { params : { id : number }} ) => {
    const  team = await getMemberDetail(params.id);
    
    if(!team) {
       return <div>No member found</div>
    }
  return (
    <div>
    <h1>{team.name} Details</h1>
    <img src={team.avatar} alt={team.name} />
    <p>Stack: {team.stack}</p> 
 
  </div>

  )
}

export default detailPage;
