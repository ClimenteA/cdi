<script>

import BtnContent from "./BtnContent.svelte"

export let text 
export let type = "button"
export let icon = undefined
export let url  = undefined
export let active =  true

</script>


{#if url === undefined}

    <button 
        on:click
        class:bg-gray-700={!active} 
        class:bg-blue-500={active}
        {type} 
        class="table px-4 py-2 self-center uppercase focus:outline-none outline-none text-xs md:text-sm lg:text-base rounded-md text-white">
        <BtnContent {text} {icon}/>   
    </button>

{:else if url != undefined}

    <a 
        on:click
        class:bg-gray-700={!active} 
        class:bg-blue-500={active}
        href="{url}"
        class="table px-4 py-2 self-center uppercase focus:outline-none outline-none text-xs md:text-sm lg:text-base rounded-md text-white">
        <BtnContent {text} {icon}/>
    </a>

{/if}



