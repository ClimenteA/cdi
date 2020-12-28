<script>
import { db } from "../Utils/fire.js"
import { current_user } from "../Utils/auth.js"
import Room from "./Room.svelte"

async function interestedForUser(){
    
    let query = await db.collection("users").doc($current_user.uid).get()
    const listingsIds = query.data().anunturi_interesat 
    
    let anunturi = []
    for (let id of listingsIds) {
        let anunt = await db.collection("anunturi").doc(id).get()
        let anunt_data = anunt.data() 
        if (anunt_data) {
            anunturi.push({...anunt_data, id})
        } 
    }

    return anunturi
}

</script>

{#await interestedForUser()}
    <p class="text-center mt-12">Se incarca...</p>
{:then listings}
    
    {#if listings.length > 0}
            
        {#each listings as camera }
            <Room {camera}/>
        {/each}

    {:else}
        <p class="text-center mt-12">Nici un anunt de care esti interesat.</p>
    {/if}

{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
