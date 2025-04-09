import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import React from 'react';

interface update {
    name : string;
    avatar : string;
    email: string;
    stack : string ;
    id  : string;
}

const apiEndpoint = "https://67e5832118194932a5865cf4.mockapi.io/teams";

const update = async ({ params }: { params: { id: string } }) => {
    const { id } =  params;
    console.log("the id = ", id);

        const updateData = async (formData: FormData) => {
            "use server"

            const email = formData.get('email');
            const name = formData.get('name');
            const avatar = formData.get('avatar');
            const stack = formData.get('stack')

            try {
                const response = await fetch(`${apiEndpoint}/${id}`, { // get data based on id
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ name , avatar , email ,stack })
                });

                if (!response.ok) {
                    console.log("Error while updating data");
                }
                const updatedData = await response.json();
                console.log(updatedData);
                revalidatePath('/');
                redirect(`/`)
            } catch (e) {
                console.error(e)
                return;
            } finally {
                console.log("end")
            }
        }
    return (
        <div className="container">
        <div className="form-container">
            <p className="title">Change Data</p>
            <form className="form" action={updateData}>
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
                <button className="sign">Save Changes </button>
            </form>
        </div>
    </div>
    )
}

export default update;
