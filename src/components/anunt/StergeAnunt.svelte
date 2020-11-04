<script>

import { account } from "../../stores.js"



function stergeAnuntul(){
    // Connect to firebase and delete this listing ID or equivalent
    console.error("TODO")
}

</script>



<div class="flex flex-col md:text-sm mt-2 text-center text-gray-700 text-xs">
    
    {#if account.logged}
        <button on:click={stergeAnuntul} class="self-center focus:outline-none text-xs md:text-sm outline-none px-2 py-1 rounded-md table text-white bg-red-500">
            STERGE
        </button>
    {/if}

    <span>Liber de la 23 Oct.</span>

</div>
