<script>

import Table from "../Widgets/Table/Table.svelte"
import Description from "./Description.svelte"
import PostOwner from "./PostOwner.svelte"
import Interested from "./Interested.svelte"

export let camera


function makeDate(value, short=true){
    if (short){
        return new Intl.DateTimeFormat('ro-RO', {day: 'numeric', month:'short'})
        .format(value.toDate())

    } else {
        return new Intl.DateTimeFormat('ro-RO', {day: 'numeric', month:'short', year:'numeric'})
        .format(value.toDate())
    }
}


let show_user = false
function toggleUser() {
    show_user = !show_user
}

let interesat = false

</script>


<article class="mx-auto max-w-2xl bg-white shadow-md md:p-4 mt-4 md:mt-6 p-2 rounded-md">
    
    {#if show_user}

        <PostOwner on:click={toggleUser} bind:show_user bind:interesat {camera}>
            <div class="flex flex-col md:text-sm mt-2 text-center text-gray-700 text-xs">
                <span>Liber de la {makeDate(camera.liber)}</span>
            </div>
        </PostOwner>

    {:else}

        <div class="flex md:flex-row flex-col-reverse justify-between">
            <div class="flex md:flex-row flex-col font-semibold">
                <span class="text-xl md:text-2xl">
                    <span class="text-green-500">&euro;</span>{camera.buget}   
                </span>
                <span class="text-sm md:text-lg font-normal ml-4 break-words">{camera.locatie}</span>
            </div>
            
            <PostOwner on:click={toggleUser} bind:show_user {camera}/>

        </div>

        <Description descriere={camera.descriere} />
        <Table data={camera}/> 
        
        <Interested {camera} bind:interesat>
            <div class="flex flex-col md:text-sm mt-2 text-center text-gray-700 text-xs">
                <span>Liber de la {makeDate(camera.liber)}</span>
            </div>
        </Interested>
        
    {/if}
    
</article>
