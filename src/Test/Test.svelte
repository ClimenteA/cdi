<script>

import { db, fire } from "../Utils/fire.js"
import { current_user } from "../Utils/auth.js"
import Table from "../Widgets/Table/Table.svelte"


// db = firebase.firestore()
async function postedByUser(){
    
    let query = await db.collection("users").doc($current_user.uid).get()

    let user_posts = []
    const listingsRefs = await query.data().anunturi_postate 
    
    console.log(listingsRefs[0])

    for (ref of listingsRefs) {
        let post = await ref.get()
        let post_data = await post.data() 
        console.log(post_data) // data looks ok
        user_posts.push(post_data)
    }

    // ref is not defined
    console.log("user_posts:", user_posts) // here it's empty
    return user_posts
}


let user_posts 
postedByUser().then(data => {
    user_posts = data
})

// here it's empty
console.log("After func call: ", user_posts)


</script>

