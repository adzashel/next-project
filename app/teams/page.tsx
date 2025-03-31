type teamData = {
    name: string,
    avatar: string,
    stack: string,
    id: number,
}

const apiEndpoint = "https://67e5832118194932a5865cf4.mockapi.io/teams";

const teams = async () => {
    await new Promise(resolve => setTimeout(resolve , 1500))
    const team = await fetch(apiEndpoint);
    const datas = await team.json();

    return (
        <div className="card-container mt-5 ml-5">
            {datas.map((data: teamData) => (
                <div className="card">
                    <img src={data.avatar} className="card-image" alt="" />
                    <div className="category"> {data.name} </div>
                    <div className="heading">{data.stack}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default teams;