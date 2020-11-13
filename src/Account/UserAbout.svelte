<script>

import Box from "../Widgets/Box/Box.svelte"
import { db } from "../Utils/fire.js"

let about_me
let editable = false
function toggleEdit() {
    
    if (editable) {
        console.log("save to firebase", about_me)
        
        db.collection("users").add({
            first: "Ada",
            last: "Lovelace",
            born: 1815
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });

    
    } 

    else {
        console.log("clear", about_me)
    }
    
    editable = !editable
} 


function updateAbout(user_self_description){

    // Add a new document with a generated id.
    db.collection("users").add({about: user_self_description})
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id)
    })
    .catch(function(error) {
        console.error("Error adding document: ", error)
    })

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

        <p>
            TODO
            <!-- {user.despre} -->
        </p>

    {/if}

</div>




<!-- <button on:click={addData} class="mt-12 mx-auto py-4 px-6 bg-gray-600 text-white">
    Add data
</button> -->



    
    
    
    