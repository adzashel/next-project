// function to delete data based on id

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const apiEndpoint = "https://67e5832118194932a5865cf4.mockapi.io/teams";
const deleteData = async( formData : FormData  ) => {
    "use server"

    const id = formData.get('id') as string;
    try {
        const response = await fetch(`${ apiEndpoint }/${ id }` , {
            method : "DELETE",
        });

        if(!response.ok) {
            console.log("Error Deleting data");
        }

        revalidatePath('/teams');
        redirect('/teams')
    }catch(e) {
        console.error(e);
    }
} 

export default deleteData;