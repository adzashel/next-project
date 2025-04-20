import { updateData, getMemberDetail } from '@/app/main-logic';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


export default async function Page(props: {
    params: Promise<{ id: string }>
}) {
    const { id } = await props.params;
    const memberDetail = await getMemberDetail(id);

    const handleSubmit = async (formData: FormData) => {
        "use server"

        await updateData(id, formData);

        revalidatePath('/teams/' + id);
        redirect('/teams/' + id);

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
                            <input type="text" defaultValue={memberDetail?.avatar} name="avatar" id="password" placeholder="Enter ur github link" />

                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Email</label>
                            <input type="text" defaultValue={memberDetail?.email} name="email" id="password" placeholder="placeholder@gmail.com" />

                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Stack</label>
                            <input type="text" defaultValue={memberDetail?.stack} name="stack" id="password" placeholder="Cloud Engineer" />
                            <div className="forgot">
                            </div>
                        </div>
                    </div>
                    <button className="sign">Save Changes</button>
                </form>
            </div>
        </div>
    )
}

