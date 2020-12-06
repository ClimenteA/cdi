<script>

import Box from "../Widgets/Box/Box.svelte"
import { db } from "../Utils/fire.js"
import { current_user } from "../Utils/auth.js"



async function getUserData() {

    let user_ref = await db.collection("users").where("uid", "==", $current_user.uid).get()

    let user_data
    if (!user_ref.empty){
        user_data = user_ref.docs[0].data()
    } else {
        user_data = {about_me: "Sectiune necompletata."}
    }
    
    // console.log(user_data)
    return user_data
}
 
let about_me
getUserData().then(user_data => {
    about_me = user_data.about_me
})

let editable = false
async function toggleEdit() {
    if (editable) await updateAbout(about_me)
    editable = !editable
} 

async function updateAbout(about_me){
    try {
        await db.collection("users").doc($current_user.uid).set({about_me})
    } catch (error) {
        console.error("Error updating about me section: ", error)
    }
}

</script>


<div class:shadow-md={editable} 
class="bg-white max-w-md mb-6 md:p-8 md:text-sm min-h-32 mt-4 mx-auto p-4 relative rounded-md text-gray-800 text-xs">

    <h4 class="mt-2 font-semibold">Despre mine</h4>

    {#if editable}

        <button on:click={toggleEdit} class="absolute top-0 right-0 h-4 w-4 mt-2 mr-2">
            <svg class="text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
            </svg>   
        </button>

        <Box 
        bind:value={about_me}
        name="despre" 
        type="textarea" 
        placeholder="Scrie o scurta descriere. Ex: Nu ascult muzica la maxim. Nu fumez. Nu am animale de companie etc"
        />

    {:else}

        <button on:click={toggleEdit} class="absolute top-0 right-0 h-4 w-4 mt-2 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zm-2.207 2.207L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
            </svg>
        </button>

        <p>{about_me}</p>

    {/if}

</div>

<p class="text-gray-600 text-xs lg:text-sm text-center">
    Stabileste o intalnire video inainte de a te muta.
</p>


    