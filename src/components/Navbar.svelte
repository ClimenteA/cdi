<script>

import {link} from 'svelte-spa-router'
import active from 'svelte-spa-router/active'

let menu = false
function toggleMenu(){
    menu = !menu
}

</script>



<nav class="lg:text-xl lg:mt-6 mt-3 text-sm">
    
    <a href="#/" class="leading-10 px-3 py-4 font-semibold text-blue-900">cameredeinchiriat</a>

    <span class="hidden md:inline-block md:float-right text-center">
        <a href="/adauga-camera" use:link use:active class="leading-10 px-3 py-4">Adauga camera</a>
        <a href="/cont" use:link use:active class="leading-10 px-3 py-4">Intra in cont</a>
    </span> 
    
    <span class="md:hidden inline-block float-right h-5 w-5 mt-2">

        {#if menu}

            <span class="absolute bg-gray-300 shadow-md flex flex-col h-auto mr-2 mt-4 pl-4 right-0 rounded-md top-0 w-auto z-10">
                
                <svg on:click={toggleMenu} class="absolute h-5 mr-2 mt-2 right-0 top-0 w-5" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
                
                <a on:click={toggleMenu} href="#/adauga-camera" class="block mt-10 py-1 pr-10">Adauga camera</a>
                <a on:click={toggleMenu} href="#/cont" class="block mb-5 py-1 pr-10">Intra in cont</a>

            </span> 

            <div on:click={toggleMenu} class="absolute inset-0"></div>

        {:else}

            <svg on:click={toggleMenu} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"/>
            </svg>	

        {/if}

    </span>
    
</nav>


<style>
:global(a.active) {
    border-bottom-width: 2px;
    font-weight: 600;
}
</style>