import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

interface teamData {
    name: string | null,
    avatar: string | null,
    email: string | null,
    stack: string | null,
    id: string | null
}

const apiEndpoint = "https://67e5832118194932a5865cf4.mockapi.io/teams";
const add = () => {
    const addNewMember = async (formData: FormData): Promise<teamData> => {
        "use server"

        const name = formData.get('name');
        const avatar = formData.get("avatar");
        const email = formData.get("email");
        const stack = formData.get('stack');

        const response = await fetch(apiEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                name,
                avatar,
                email,
                stack
            })
        })

        if (!response.ok) {
            throw new Error('error while adding new data')
        }
        const newMember = await response.json();
        console.log(newMember)
        revalidatePath('/teams');
        redirect('/teams');
    }
    return (
        <div className="container">
            <div className="form-container">
                <p className="title">Add new member</p>
                <form className="form" action={addNewMember}>
                    <div className="input-container">
                        <div className="input-group">
                            <label htmlFor="username">Name</label>
                            <input type="text" name="name" id="username" placeholder="Enter Ur Name" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Github Image</label>
                            <input type="text" name="avatar" id="password" placeholder="Enter ur github link" />

                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Email</label>
                            <input type="text" name="email" id="password" placeholder="placeholder@gmail.com" />

                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Stack</label>
                            <input type="text" name="stack" id="password" placeholder="Cloud Engineer" />
                            <div className="forgot">
                            </div>
                        </div>
                    </div>
                    <button className="sign">add new </button>
                </form>
            </div>
        </div>
    )
}

export default add;
