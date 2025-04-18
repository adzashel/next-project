import { redirect } from "next/navigation"
import { newData } from "../main-logic"
import { revalidatePath } from "next/cache"



interface teamData {
    name: string 
    avatar: string 
    email: string 
    stack: string 
    id: string 
}

const apiEndpoint = "https://67e5832118194932a5865cf4.mockapi.io/teams";
const add = () => {
   const handleAddData = async(formData : FormData) => {
    'use server'
    await newData(formData);
    revalidatePath('/teams');
    redirect('/teams')
   } 
    return (
        <div className="container">
            <div className="form-container">
                <p className="title">Add new member</p>
                <form className="form" action={handleAddData}>
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
