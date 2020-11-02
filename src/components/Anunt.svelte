<script>
import Table from "./Table.svelte"

export let anunt

let show_user = false
function toggle() {
    show_user = !show_user
}

</script>


<article class="bg-white max-w-2xl md:p-4 mt-4 mx-auto p-2 rounded-md shadow-md">

    <div class:md:flex-col={show_user} class="flex md:flex-row flex-col justify-between">

        <div on:click={toggle} class="font-semibold">
            <span class="text-xl md:text-2xl text-green-500">&euro;</span>
            <span class="text-xl md:text-2xl">{anunt.buget}</span>
            <span class="text-sm md:text-lg font-normal ml-2">{anunt.locatie}</span>
        </div>
    
        <div on:click={toggle} class:flex-col-reverse={show_user} class="border-b-2 cursor-pointer flex flex-row gap-2 items-center m-4 md:border-b-0 md:gap-4 md:m-0 md:pb-0 pb-2 self-center">
            <div class="flex flex-col flex-wrap">
                <span class="font-semibold">{anunt.proprietar}</span>
                <span class:text-center={show_user} class:text-right={!show_user} class="text-xs text-gray-700">{anunt.data}</span>
            </div>

            <figure>
                <img class:md:h-24={show_user} class:md:w-24={show_user} class="border-green-500 border-2 h-16 w-16 object-cover rounded-full" src="{anunt.foto}" alt="">
            </figure>
        </div>

    </div>
    

    {#if show_user}

        <div class="md:border-t-2 md:px-6 md:mt-4 px-3">
            
            <p class="md:text-left md:text-sm md:py-6 text-center text-gray-800 text-xs">
                {anunt.despre}
            </p>
        
        </div>
  
    {:else}

        <div class="px-3 md:px-6">
            
            <h4 class="font-semibold text-xs md:text-sm">
                Descriere
            </h4>
            
            <p class="mt-2 text-gray-800 text-xs md:text-sm">
                {anunt.descriere}
                <span class="text-green-500 font-semibold cursor-pointer py-2">mai mult</span>
            </p>
        
            <Table data={anunt}/>

        </div>
    
    {/if}

    <div class="flex md:items-baseline justify-between px-6 border-t-2 mt-2 md:flex-row flex-col">

        {#if show_user}
        
            <span class="flex flex-col-reverse md:flex-row mt-2 text-right">
                <button on:click={toggle} class="bg-blue-500 focus:outline-none lg:text-base md:text-sm md:mt-4 mt-1 outline-none px-4 py-2 rounded-md self-center table text-white text-xs">
                    <svg class="inline mr-2 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                    INAPOI LA ANUNT
                </button>
            </span>

        {:else}

            <span class="flex flex-col-reverse md:flex-row mt-2 text-right">
                <button class="bg-blue-500 focus:outline-none lg:text-base md:text-sm md:mt-4 mt-1 outline-none px-4 py-2 rounded-md self-center table text-white text-xs">
                    SUNT INTERESAT(A) ✋
                </button>
                <sup class="mt-4 text-gray-700">(0 interesati)</sup>
            </span>

        {/if}

        <span class="md:text-sm mt-4 text-center text-gray-700 text-xs">Liber de la 23 Oct.</span>

    </div>

</article>