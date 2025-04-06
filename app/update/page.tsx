import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import React from 'react';

interface updateData {
    email: string | null,
}

const apiEndpoint = "https://67e5832118194932a5865cf4.mockapi.io/teams";


const update = ({ params } : { params : { id : string }}) => {
    const { id } = params;
    const updateProfile = async (formData: FormData , id : string): Promise<updateData | null> => {
        "use server"
        const email = formData.get('email');

        const response = await fetch(`${apiEndpoint}/${id}` , {
            method : "PUT",
            headers : {
                'Content-Type' : "application/json"
            },
            body : JSON.stringify({email})
        })

        if(!response.ok) {
            throw new Error('error change data');
        }

        const updateChanges = await response.json();
        console.log(updateChanges);
        revalidatePath('/teams')
        redirect('/teams')
    }
    return (
        <div className="container">
            <div className="form-wrapper">
                <p className="title">Update Profile</p>
                <form className="form" action={updateProfile}>  
                        <div className="input-group">
                            <label htmlFor="username">New Email</label>
                            <input type="text" name="email" id="username" placeholder="Enter new Email" />
                        </div>
                    <button className="sign">Save Changes </button>
                </form>
            </div>
        </div>
    )
}

export default update
