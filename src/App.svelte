<script>

import Firebaser from "./Fire/firebaser.js"

const firebaseConfig = {
    apiKey: "AIzaSyA7CZB5SY3BI5bgFBS0sO86l6OlgDN9BmY",
    authDomain: "cdi-firebase.firebaseapp.com",
    databaseURL: "https://cdi-firebase.firebaseio.com",
    projectId: "cdi-firebase",
    storageBucket: "cdi-firebase.appspot.com",
    messagingSenderId: "851561307188",
    appId: "1:851561307188:web:d1c00e1aaf818ee9b8fe61",
    measurementId: "G-YRBTWP52ZP"
}

const fbs = new Firebaser(firebaseConfig)

async function addSomeData() {

    // FIRESTORE

    // Add a new document to a collection with a auto-generated ID
    let generated_id = await fbs.add("collection_name", {"field_1": "value_1", "field_2": "value_2"})
    console.log("Auto-generated ID: ", generated_id)

    
    // Add a new document to a collection with a custom ID
    let custom_id = await fbs.add("collection_name", {"_id": "my_unique_id", "field_1": "value_1", "field_2": "value_2"})
    console.log("Custom ID: ", custom_id)


    // Update documents from a collection without specifing the ID.  
    let updated_ids = await fbs.update("collection_name", {"field_1": "value_1"}, {"field_1": "value_1_updated"})
    console.log("Updated IDs list:", updated_ids)


    // Update a document from a collection by specified ID
    let updated_id = await fbs.update("collection_name", {"_id": custom_id, "field_2": "value_2_updated"})
    console.log("Updated ID:", updated_id)


    // Find documents in a collection without specifing the ID 
    let docList = await fbs.find("collection_name", {"field_2": "value_2_updated"})
    console.log("Found docs:", docList)


    // Find a document in a collection based on document ID
    let doc = await fbs.find("collection_name", custom_id)
    console.log("Found doc:", doc)


    // Delete a document from a collection without specifing the ID
    let deleted_ids = await fbs.delete("collection_name", {"field_2": "value_2_updated"})
    console.log("Deleted doc IDs:", deleted_ids)


    // Delete a document from a collection with a specified ID
    let deleted_id = await fbs.delete("collection_name", generated_id)
    console.log("Deleted doc ID:", deleted_id)


    // AUTHENTIFICATION

    // fbs.login("facebook")

    // Check if user is logged in
    // let logged = fbs.logged()
    // console.log("User auth status:", logged)

    // // Logout user
    // fbs.logout()



}

// addSomeData()
 


let logged
fbs.AUTH.onAuthStateChanged(user => {
    if (user) logged = true
    else logged = false 
})



</script>


{#if logged}
    <p>Logged in</p>
{:else}
    <p>Logged out</p>
{/if}


<button on:click={fbs.facebookLogin} class="bg-blue-600 p-2 text-base text-white">
    Login
</button>


<button on:click={fbs.logoutUser} class="bg-blue-600 p-2 text-base text-white">
    Logout
</button>


<button on:click={fbs.deleteUser} class="bg-red-600 p-2 text-base text-white">
    Delete account
</button>


