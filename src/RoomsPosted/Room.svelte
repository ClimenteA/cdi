<script>

import { db, fire } from "../Utils/fire.js"
import { current_user } from "../Utils/auth.js"


import Table from "../Widgets/Table/Table.svelte"
import Description from "./Description.svelte"
import Messages from "./Messages.svelte"

export let camera


let options = {day: 'numeric', month:'short', year:'numeric'}
let data_postarii = new Intl.DateTimeFormat('ro-RO', options).format(camera.data.toDate())


let anunt_sters = false
async function stergeAnuntul(){
    try {
        
        let user_ref = await db.collection("users").doc($current_user.uid)

        await user_ref.update({
            anunturi_postate: fire.firestore.FieldValue.arrayRemove(camera.listingRef)
        })
        
        await camera.listingRef.delete()

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

</script>



<article class:hidden={hide} class="max-w-2xl bg-white shadow-md md:p-4 mt-4 md:mt-6 mx-auto p-2 rounded-md">
    
    {#if anunt_sters}
        
        <p>Anuntul a fost sters!</p>

    {:else}

    <div class="flex md:flex-row flex-col justify-between">
        
        <div class="font-semibold cursor-pointer">
            <span class="text-xl md:text-2xl text-green-500">&euro;</span>
            <span class="text-xl md:text-2xl">{camera.buget}</span>
            <span class="text-sm md:text-lg font-normal ml-2">{camera.locatie}</span>
        </div>

        <button on:click={stergeAnuntul} class="bg-red-500 focus:outline-none mb-2 mt-3 outline-none px-3 py-1 rounded-md self-center table text-white text-xs">
            STERGE
        </button>
    
    </div>

    <Description descriere={camera.descriere} />
    <Table data={camera}/>    
    <Messages {camera}/>

    {/if}

</article>
