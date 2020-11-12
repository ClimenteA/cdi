<script>

import firebase from "firebase/app"
import InputBox from "../widgets/InputBox/InputBox.svelte"
import UserFooter from "./UserFooter.svelte"

let user = firebase.auth().currentUser


let despre
let editable = false
function toggleEdit() {
    
    if (editable) {
        console.log("save to firebase", despre)
    } 
    else {
        console.log("clear", despre)
    }
    
    editable = !editable
    
} 


</script>


<!-- User header -->
<div class="flex flex-col gap-2 items-center m-4 md:gap-4 md:m-0 md:pb-0 pb-2">

    <figure class="mt-10">
        <img class="border-green-500 border-2 h-24 w-24 object-cover rounded-full" 
        src="{user.photoURL}" alt="">
    </figure>

    <div class="flex flex-col flex-wrap">
        <span class="font-semibold text-center">
            {user.displayName}
        </span>
        <span class="text-xs text-gray-700">
            {user.email}
        </span>
    </div>

</div>


<!-- User about -->
<div class:shadow-md={editable} 
class="bg-white max-w-md mb-6 md:p-8 md:text-sm min-h-32 mt-4 mx-auto p-4 relative rounded-md text-gray-800 text-xs">

    <h4 class="mt-2 font-semibold">Despre mine</h4>

    {#if editable}

        <button on:click={toggleEdit} class="absolute top-0 right-0 h-4 w-4 mt-2 mr-2">
            <svg class="text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
            </svg>   
        </button>


        <InputBox 
        bind:value={despre}
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
            {user.despre}
        </p>

    {/if}

</div>




<UserFooter/>


    
    
    
    