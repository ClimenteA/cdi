<script>

import { db, fire } from "../Utils/fire.js"
import { current_user } from "../Utils/auth.js"

export let camera

let anunt_ref = db.collection("anunturi").doc(camera.id)
let user_ref = db.collection("users").doc($current_user.uid)


let interesati_len = camera.interesati.length

let interesat = false
if (camera.interesati.includes($current_user.uid)){
    interesat = true
}

async function toggleInterested(){
    try {

        interesat = !interesat

        if (interesat) {
            await anunt_ref.update({
                interesati: fire.firestore.FieldValue.arrayUnion($current_user.uid) 
            })

            await user_ref.update({
                anunturi_interesat: fire.firestore.FieldValue.arrayUnion(camera.id) 
            })

            interesati_len += 1

        }

        else {
            
            await anunt_ref.update({
                interesati: fire.firestore.FieldValue.arrayRemove($current_user.uid) 
            })

            await user_ref.update({
                anunturi_interesat: fire.firestore.FieldValue.arrayRemove(camera.id) 
            })

            interesati_len -= 1
        }
        
    } catch (error) {
        interesat = !interesat   
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
            ({interesati_len} {interesati_len === 1 ? 'interesat' : 'interesati'})
        </sup>

    </span>

    <slot></slot>

</div>

