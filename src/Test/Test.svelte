<script>

import { db, fire } from "../Utils/fire.js"
import { current_user } from "../Utils/auth.js"
import Table from "../Widgets/Table/Table.svelte"


async function postedByUser(){
    
    let query = await db.collection("users").doc($current_user.uid).get()

    let user_posts = []
    const listingsRefs = query.data().anunturi_postate 
    for (let ref of listingsRefs) {
        let post = await ref.get()
        let post_data = await post.data() 
        user_posts.push(post_data)
    }

    return user_posts
}


let user_posts 
postedByUser().then(data => {
    user_posts = data
})


$: console.log("Results: ", user_posts)


</script>

