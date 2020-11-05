<script>

import { account } from "../../stores.js"

export let liber_la_data


export let interesat
function toogle(){
    interesat = !interesat
    // console.error("In development")
}


function stergeAnuntul(){
    console.error("In development")
}


function showStergeBtn(){
    console.error("In development")
}



</script>


<div class="flex md:items-baseline justify-between px-6 border-t-2 mt-2 md:flex-row flex-col">

    <span class="flex flex-col-reverse md:flex-row mt-2 text-right">
        <button on:click={toogle} class:bg-gray-700={interesat} class:bg-blue-500={!interesat} class="focus:outline-none lg:text-base md:text-sm md:mt-4 mt-1 outline-none px-4 py-2 rounded-md self-center table text-white text-xs">
            {#if interesat}
                ESTI INTERESAT(A) 👍
            {:else}
                SUNT INTERESAT(A) ✋
            {/if}
        </button>
        <sup class="mt-4 text-gray-700">(0 interesati)</sup>
    </span>

    <div class="flex flex-col md:text-sm mt-2 text-center text-gray-700 text-xs">
        
        {#if account.logged}
            <button on:click={stergeAnuntul} class="self-center focus:outline-none text-xs md:text-sm outline-none px-2 py-1 rounded-md table text-white bg-red-500">
                STERGE
            </button>
        {/if}

        <span>Liber de la {liber_la_data}</span>

    </div>

</div>
