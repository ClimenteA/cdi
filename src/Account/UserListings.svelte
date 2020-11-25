<script>
 
import { logged } from '../Utils/auth.js'
   

let tab_interested = true
function toggleTab(){
    tab_interested = !tab_interested
}


</script>


{#if $logged}

<section class="mt-6">


    <button on:click={toggleTab} class="bg-gray-300 text-gray-900 focus:outline-none lg:text-base md:text-sm outline-none px-4 py-2 rounded-md self-center table text-xs">
        
        {#if tab_interested}
            Anunturi de care esti interesant(a)
        {:else}
            Anunturile postate de tine 
        {/if}

        <svg class="inline ml-2 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
        </svg>

    </button>

</section>


{#if tab_interested}

<section class="mt-4">
    Anunturi de care esti interesant(a)
</section>

{:else}

<section class="mt-4">
    Anunturile postate de tine 
</section>

{/if}





{/if}