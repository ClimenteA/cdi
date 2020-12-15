<script>

import { db } from "../Utils/fire.js"
import { current_user } from "../Utils/auth.js"
import Room from "./Room.svelte"


async function postedByUser(){
    
    let query = await db.collection("users").doc($current_user.uid).get()

    let user_posts = []
    const listingsRefs = query.data().anunturi_postate 
    for (let ref of listingsRefs) {
        let post = await ref.get()
        let post_data = post.data() 
        if (post_data) {
            user_posts.push({...post_data, listingRef:ref})
        } 
    }

    return user_posts
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
        
        <p class="text-center mt-12">Nu ai postat nici un anunt</p>

    {/if}

{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
