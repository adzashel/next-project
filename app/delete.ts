import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const apiEndpoint = "https://67e5832118194932a5865cf4.mockapi.io/teams";

const deleteData = async( id : string) => {
    "use server"
    try {
        const response = await fetch(`${ apiEndpoint }/${ id }` , {
            method : "DELETE"
        });

        if(!response.ok) {
            throw new Error("Error deleting data");
        }
        console.log("id" , id , "has been deleted")
        revalidatePath('/teams')        
        redirect('/teams')
    }catch(e) {
        console.error(e);
    }
}

export default deleteData;