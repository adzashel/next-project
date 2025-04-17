// "use client"
import { updateData, getMemberDetail } from '@/app/main-logic';
import Swal from "sweetalert2";
import React from 'react';

interface updateProps {
    params: { id: string }
}

interface update {
    name: string;
    avatar: string;
    email: string;
    stack: string;
    id: string;
}



const update: React.FC<updateProps> = async ({ params }) => {
    const memberDetail = await getMemberDetail(params.id)
    const { id } = params;

    const handleSubmit = async (formData: FormData) => {
        "use server"
        try {
            await updateData(id, formData);
        } catch {
            console.log('error updating data');
            return;
        }
    }

    return (
        <div className="container">
            <div className="form-container">
                <p className="title">Change Data</p>
                <form className="form" action={handleSubmit}>
                    <div className="input-container">
                        <div className="input-group">
                            <label htmlFor="username">Name</label>
                            <input defaultValue={memberDetail?.name} type="text" name="name" id="username" placeholder="Enter Ur Name" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Github Image</label>
                            <input type="text" defaultValue={ memberDetail?.avatar } name="avatar" id="password" placeholder="Enter ur github link" />

                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Email</label>
                            <input type="text" defaultValue={ memberDetail?.email } name="email" id="password" placeholder="placeholder@gmail.com" />

                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Stack</label>
                            <input type="text" defaultValue={ memberDetail?.stack } name="stack" id="password" placeholder="Cloud Engineer" />
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
