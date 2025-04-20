
const apiEndpoint = "https://67e5832118194932a5865cf4.mockapi.io/teams";
interface teamData {
    name: string;
    avatar: string;
    stack: string;
    email: string;
    phone: string;
    id: string;
}


// function to add new Data 

const newData = async (formData: FormData) => {
    "use server"

    const name = formData.get('name');
    const avatar = formData.get('avatar');
    const email = formData.get('email');
    const stack = formData.get('stack');

    try {
        const response = await fetch(apiEndpoint, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                stack,
                avatar
            })
        });

        if (!response.ok) {
            throw new Error('error while adding new Data');
        }
        const newData: teamData[] = await response.json();
    } catch (e) {
        console.error('error = ' + e);
    }
}

// function to delete data
const deleteData = async (formData: FormData) => {
    "use server";

    const id = formData.get('id');

    if (typeof id !== "string") {
        console.log('Invalid ID Provided');
    }

    try {
        const response = await fetch('https://67e5832118194932a5865cf4.mockapi.io/teams/' + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "Application/json"
            }
        });
    } catch (e) {
        console.log('error deleting data', e)
    }
}



// function to get detail from specific data

const getMemberDetail = async (id: string) => {
    try {
        const response = await fetch(`https://67e5832118194932a5865cf4.mockapi.io/teams/${id}`);
        if (!response.ok) {
            console.log('error with status', response.status);
        }
        const detailData = await response.json();
        return detailData;
    } catch {
        console.log("Failed Getting detail data");
        return null;
    } finally {
        console.log('ok')
    }
}


// function to update data
const updateData = async (id: string, formData: FormData) => {
    "use server"

    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    const avatar = formData.get('avatar') as string;
    const stack = formData.get('stack') as string;

    try {
        const response = await fetch(`https://67e5832118194932a5865cf4.mockapi.io/teams/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                email,
                name,
                stack,
                avatar
            })
        })

        if (!response.ok) {
            throw new Error('Failed Updating data' + response.status);
        }
        const updatedData: teamData[] = await response.json();

        
    } catch (e) {
        console.error('Error updating data' + e);
    } finally {
        console.log('process terminate');
    }
}

export {
    deleteData, getMemberDetail, updateData,
    newData
}