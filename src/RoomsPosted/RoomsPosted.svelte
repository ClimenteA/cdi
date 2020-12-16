<script>

import { db } from "../Utils/fire.js"
import { current_user } from "../Utils/auth.js"
import Room from "./Room.svelte"


async function postedByUser(){
    
    let query = await db.collection("users").doc($current_user.uid).get()
    const listingsIds = query.data().anunturi_postate 
    
    let user_rooms = []
    for (let id of listingsIds) {
        let room = await db.collection("anunturi").doc(id).get()
        let room_data = room.data() 
        if (room_data) {
            user_rooms.push({...room_data, id})
        } 
    }

    return user_rooms
}


</script>


{#await postedByUser()}

    <p class="text-center mt-12">Se incarca...</p>

{:then listings}   

    {#if listings.length > 0}

        {#each listings as camera }
            <Room {camera}/>
        {/each}
    
    {:else}
        
        <p class="text-center mt-12">Nu ai postat nici un anunt.</p>

    {/if}

{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
