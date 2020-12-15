<script>
import { db } from "../Utils/fire.js"
import { current_user } from "../Utils/auth.js"
import Room from "./Room.svelte"

async function interestedForUser(){
    let query = await db.collection("users").doc($current_user.uid).get()
    const listingsIds = query.data().anunturi_interesat 
    console.log(listingsIds) //ok
    
    let anunturi = []

    if (listingsIds.length > 0) {

        for (let id of listingsIds) {
            console.log(id, typeof(id)) // ok
            let anunt = await db.collection("anunturi").doc(id).get() // nok
            let anunt_data = anunt.data() 
            if (anunt_data) {
                anunturi.push({...anunt_data, listingId:id})
            } 
        }
    }
    
    return anunturi
}

</script>

{#await interestedForUser()}
    <p class="text-center mt-12">Se incarca...</p>
{:then listings}
    {console.log("In template:", listings, listings.length)} //ok (but why?)
    {#if listings.length > 0}
        {#each listings as camera }
            <Room {camera}/>
        {/each}
    {:else}
        <p class="text-center mt-12">Nu ai postat nici un anunt</p>
    {/if}
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
