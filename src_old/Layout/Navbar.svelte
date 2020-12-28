<script>

import { pop } from "svelte-spa-router"

let menu = false
function toggleMenu(){
    menu = !menu
}


let home = false
function toggleHome(){
    home = !home
}

let add_room = true
function toggleAdd(){
    in_cont = false
    if (home) {
        add_room = true
        home = false
        return
    } 
    add_room = !add_room
}

let in_cont = false
function toggleCont(){
    in_cont = !in_cont
}

</script>



<nav class="lg:text-xl lg:mt-6 mt-3">
    
    <a on:click={() => {toggleHome();toggleAdd()}} href="#/" class="leading-10 px-3 py-4 font-semibold text-blue-900">cameredeinchiriat</a>

    <span class="text-sm lg:text-base hidden md:inline-block md:float-right text-center">

        {#if add_room}
            <a
            on:click={toggleAdd} href="#/adauga-camera" class:font-semibold={!in_cont} class="leading-10 px-3 py-4">
                <span class="text-green-500">Adauga</span> camera
            </a>
        {:else}
            <a 
            on:click={toggleAdd} href="#/camere-libere" class:font-semibold={!in_cont} class="leading-10 px-3 py-4">
                <span class="text-blue-500">Cauta</span> camera
            </a>
        {/if}

        {#if in_cont}
        
            <a on:click={() => {pop();toggleCont()}} class:font-semibold={in_cont} href="#/cont" class="leading-10 px-3 py-4">
                Inapoi
            </a>

        {:else}

            <a on:click={toggleCont} class:font-semibold={in_cont} href="#/cont" class="leading-10 px-3 py-4">
                Intra in cont
            </a>

        {/if}


    </span> 
    
    <span class="md:hidden inline-block float-right h-5 w-5 mt-2">

        {#if menu}

            <span class="text-sm lg:text-base absolute bg-gray-300 shadow-md flex flex-col h-auto mr-2 mt-4 pl-4 right-0 rounded-md top-0 w-auto z-10">
                
                <svg on:click={toggleMenu} class="absolute h-5 mr-2 mt-2 right-0 top-0 w-5" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>

                {#if add_room}
                    <a on:click={() => {toggleAdd();toggleMenu()}} href="#/adauga-camera" class="block mt-10 py-1 pr-10">
                        Adauga camera
                    </a>
                {:else}
                    <a on:click={() => {toggleAdd();toggleMenu()}} href="#/camere-libere" class="block mt-10 py-1 pr-10">
                        Cauta camera
                    </a>
                {/if}
        
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
