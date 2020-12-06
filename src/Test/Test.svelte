<script>

import { db, fire } from "../Utils/fire.js"
import { current_user, logged } from "../Utils/auth.js"
import Room from "../Room/Room.svelte"


async function postedByUser(){
    
    let query = await db.collection("users").doc($current_user.uid).get()

    let user_posts = []
    const listingsRefs = query.data().anunturi_postate 
    for (let ref of listingsRefs) {
        let post = await ref.get()
        let post_data = await post.data() 
        if (post_data) {
            user_posts.push({...post_data, listingRef:ref})
        } 
    }

    return user_posts
}


</script>


{#await postedByUser()}

	<p>Se incarca...</p>

{:then listings}   

    {#each listings as camera }
        <Room {camera}/>
    {/each}

{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
