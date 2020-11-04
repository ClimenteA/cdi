<script>
import StergeAnunt from "./anunt/StergeAnunt.svelte"
//import BugetUserAnunt from "./anunt/BugetUserAnunt.svelte"
import Table from "./anunt/Table.svelte"

export let anunt

let interesat = false
function  toogleInteresat() {
    interesat = !interesat
}


let show_user = false
function toggle() {
    show_user = !show_user
}


</script>


<article class:bg-gray-100={interesat} class:bg-white={!interesat} class:shadow-md={!interesat} class="max-w-2xl md:p-4 mt-4 md:mt-6 mx-auto p-2 rounded-md">

    <div class:md:flex-col={show_user} class="flex md:flex-row flex-col justify-between">

        <div class="font-semibold cursor-pointer">
            <span class="text-xl md:text-2xl text-green-500">&euro;</span>
            <span class="text-xl md:text-2xl">{anunt.buget}</span>
            <span class="text-sm md:text-lg font-normal ml-2">{anunt.locatie}</span>
        </div>
    
        <div on:click={toggle} class:flex-col-reverse={show_user} class="border-b-2 cursor-pointer flex flex-row gap-2 items-center m-4 md:border-b-0 md:gap-4 md:m-0 md:pb-0 pb-2 self-center">
            <div class="flex flex-col flex-wrap">
                <span class="font-semibold">{anunt.utilizator}</span>
                <span class:text-center={show_user} class:text-right={!show_user} class="text-xs text-gray-700">
                    {anunt.data_postarii}
                </span>
            </div>
    
            <figure>
                <img class:md:h-24={show_user} class:md:w-24={show_user} class="border-green-500 border-2 h-16 w-16 object-cover rounded-full" src="{anunt.foto_utilizator}" alt="">
            </figure>
        </div>
    
    </div>

    
    {#if show_user}

        <div class="md:border-t-2 md:px-6 md:mt-4 px-3">
            
            <p class="md:text-left md:text-sm md:py-6 text-center text-gray-800 text-xs">
                {anunt.despre_utilizator}
            </p>
        
        </div>
  
    {:else}

        <div class="px-3 md:px-6">
            
            <h4 class="font-semibold text-xs md:text-sm">
                Descriere
            </h4>
            
            <p class="mt-2 text-gray-800 text-xs md:text-sm">
                {anunt.descriere}
                <!-- <span class="text-green-500 font-semibold cursor-pointer py-2">mai mult</span> -->
            </p>
        
            <Table data={anunt}/>

        </div>
    
    {/if}

    <div class="flex md:items-baseline justify-between px-6 border-t-2 mt-2 md:flex-row flex-col">

        {#if show_user}
        
            <span class="flex flex-col-reverse md:flex-row mt-2 text-right">
                <button on:click={toggle} class:bg-gray-700={interesat} class:bg-blue-500={!interesat} class="focus:outline-none lg:text-base md:text-sm md:mt-4 mt-1 outline-none px-4 py-2 rounded-md self-center table text-white text-xs">
                    <svg class="inline mr-2 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                    INAPOI LA ANUNT
                </button>
            </span>

        {:else}

            <span class="flex flex-col-reverse md:flex-row mt-2 text-right">
                <button on:click={toogleInteresat} class:bg-gray-700={interesat} class:bg-blue-500={!interesat} class="focus:outline-none lg:text-base md:text-sm md:mt-4 mt-1 outline-none px-4 py-2 rounded-md self-center table text-white text-xs">
                    {#if interesat}
                        ESTI INTERESAT(A)👍
                    {:else}
                        SUNT INTERESAT(A) ✋
                    {/if}
                </button>
                <sup class="mt-4 text-gray-700">(0 interesati)</sup>
            </span>

        {/if}


        <StergeAnunt/>

    </div>

</article>