<script>

import { db, fire } from "../Utils/fire.js"
import { current_user } from "../Utils/auth.js"

export let camera


let interesat = false
async function toggleInterested() {

    try {
    
        let ref = await db.collection("anunturi").doc(camera.id)
        
        interesat = !interesat
            
        if (interesat) {
            
            console.log('add', camera.id)

            await ref.update({
                interesati: fire.firestore.FieldValue.arrayUnion($current_user.uid) 
            })
        } else {

            console.log('rem', camera.id)

            await ref.update({
                interesati: fire.firestore.FieldValue.arrayRemove($current_user.uid) 
            })
        }

            
    } catch (error) {
        console.error("Can't update field!", error)   
    }
}



</script>


<div class="flex md:items-baseline justify-between px-6 border-t-2 mt-2 md:flex-row flex-col">

    <span class="flex flex-col-reverse md:flex-row mt-2 text-right">
        
        <button 
            on:click={toggleInterested} 
            class:bg-blue-500={!interesat}
            class:bg-gray-700={interesat}
            class="focus:outline-none outline-none lg:text-base md:text-sm md:mt-4 mt-1 px-4 py-2 rounded-md self-center table text-white text-xs">
            {#if interesat}
                ESTI INTERESAT(A) 👍
            {:else}
                SUNT INTERESAT(A) ✋
            {/if}
        </button>
        
        <sup class="mt-4 text-gray-700">
            (0 interesati)
        </sup>

    </span>

    <slot></slot>

</div>

