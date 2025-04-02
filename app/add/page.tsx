
import { revalidatePath } from 'next/cache';
import React from 'react'


interface data  {
    name : string | null,
    avatar : string | null,
    stack : string | null,
    id : number | null
}

const apiEndpoint = "https://67e5832118194932a5865cf4.mockapi.io/teams";
const add = () => {
    const addNewMember = async(formData : FormData) => {
        "use server"
        const name = formData.get('name');
        const avatar = formData.get('avatar');
        const stack = formData.get('stack');

        const response = await fetch(apiEndpoint , {
            method : "POST",
            headers : {
                'Content-Type' : "Application/json",
            },
            body : JSON.stringify({ name , avatar , stack})
        })

        if(!response.ok) {
            throw new Error('Failde to add');
        }

        const newMember = await response.json();
        console.log(newMember);

        revalidatePath('/teams');
    }

   
    return (
<div className="container">
            <div className="form-container">
                <p className="title">Add new member</p>
                <form className="form" action={ addNewMember }>
                    <div className="input-group">
                        <label htmlFor="username">Name</label>
                        <input type="text" name="name" id="username" placeholder="Enter Ur Name" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Github Image</label>
                        <input type="text" name="avatar" id="password" placeholder="" />

                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Stack</label>
                        <input type="text" name="stack" id="password" placeholder="" />
                        <div className="forgot">
                        </div>
                    </div>
                    <button className="sign">add new </button>
                </form>


            </div>

        </div>

    )
}

export default add;
