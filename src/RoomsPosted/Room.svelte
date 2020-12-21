<script>

import { db, fire } from "../Utils/fire.js"
import { current_user } from "../Utils/auth.js"


import Table from "../Widgets/Table/Table.svelte"
import Description from "./Description.svelte"
import Messages from "./Messages.svelte"
import InterestedList from "./InterestedList.svelte"

export let camera


let options = {day: 'numeric', month:'short', year:'numeric'}
let data_postarii = new Intl.DateTimeFormat('ro-RO', options).format(camera.data.toDate())


let anunt_sters = false
async function stergeAnuntul(){
    try {
        
        let user_ref = await db.collection("users").doc($current_user.uid)

        await user_ref.update({
            anunturi_postate: fire.firestore.FieldValue.arrayRemove(camera.id),
            anunturi_interesat: fire.firestore.FieldValue.arrayRemove(camera.id)
        })
        
        await db.collection("anunturi").doc(camera.id).delete()

        anunt_sters = !anunt_sters

        console.log("Anuntul a fost sters!")

    } catch (error) {
        console.error("Anuntul nu a putut fi sters!", error)
    }
}


let hide = false
$: {
    setTimeout(() => {
        if (anunt_sters) {
            hide = true
        }
    }, 2500)
} 


let show_interested = false

</script>



<article class:hidden={hide} class="mx-auto max-w-2xl bg-white shadow-md md:p-4 mt-4 md:mt-6 p-2 rounded-md">
    

    {#if show_interested}

        <InterestedList {camera}/>
        <Messages {camera} bind:show_interested/>
        
    {:else}

        {#if anunt_sters}        
            <p>Anuntul a fost sters!</p>
        {:else}

        <div class="flex md:flex-row flex-col-reverse justify-between">
            
            <div class="flex md:flex-row flex-col font-semibold">
                
                <span class="text-xl md:text-2xl">
                    <span class="text-green-500">&euro;</span>{camera.buget}   
                </span>

                <span class="text-sm md:text-lg font-normal ml-4 break-words">{camera.locatie}</span>

            </div>

            <button on:click={stergeAnuntul} class="bg-red-500 p-1 rounded-md self-end text-white text-xs">
                <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        
        </div>

        <Description descriere={camera.descriere} />
        <Table data={camera}/>    
        <Messages {camera} bind:show_interested/>

        {/if}

    {/if}

</article>
