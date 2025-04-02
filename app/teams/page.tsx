import Link from "next/link";

type teamData = {
  name: string;
  avatar: string;
  stack: string;
  id: number;
};

const apiEndpoint = "https://67e5832118194932a5865cf4.mockapi.io/teams";

const teams = async () => {
  try {
    // Remove setTimeout in production
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const team = await fetch(apiEndpoint);

    if (!team.ok) {
      throw new Error(`HTTP error! status: ${team.status}`);
    }

    const datas: teamData[] = await team.json();

    return (
      <>
        <Link href="/add" className="button">
          Add new member
        </Link>
        <div className="card-container mt-5 ml-5">
          {datas.map((data) => (
            <div className="card" key={data.id}>
              <img src={data.avatar} className="card-image" alt={data.name} />
              <Link className="category" href={`/${data.id}`}>
                {data.name}
              </Link>
              <div className="heading">{data.stack}</div>
            </div>
          ))}
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching teams:", error);
    return <div>Failed to load teams.</div>; // Or handle the error gracefully
  }
};

export default teams;