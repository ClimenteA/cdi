<script>

export let buget
export let locatie
export let utilizator
export let foto_utilizator
export let data_postarii
export let despre_utilizator

export let interesat
export let show_user

function toggle() {
    show_user = !show_user
}

</script>


<div class:md:flex-col={show_user} class="flex md:flex-row flex-col justify-between">

    <div class="font-semibold cursor-pointer">
        <span class="text-xl md:text-2xl text-green-500">&euro;</span>
        <span class="text-xl md:text-2xl">{buget}</span>
        <span class="text-sm md:text-lg font-normal ml-2">{locatie}</span>
    </div>

    <div on:click={toggle} class:flex-col-reverse={show_user} class="border-b-2 cursor-pointer flex flex-row gap-2 items-center m-4 md:border-b-0 md:gap-4 md:m-0 md:pb-0 pb-2 self-center">
        <div class="flex flex-col flex-wrap">
            <span class="font-semibold">{utilizator}</span>
            <span class:text-center={show_user} class:text-right={!show_user} class="text-xs text-gray-700">
                {data_postarii}
            </span>
        </div>

        <figure>
            <img class:md:h-24={show_user} class:md:w-24={show_user} class="border-green-500 border-2 h-16 w-16 object-cover rounded-full" src="{foto_utilizator}" alt="">
        </figure>
    </div>
    
</div>


{#if show_user}

    <div class="md:px-6 px-3">  
        <p class="md:text-left md:text-sm md:py-6 text-center text-gray-800 text-xs">
            {despre_utilizator}
        </p>
    </div>

    <div class="flex md:items-baseline justify-between px-6 border-t-2 mt-2 md:flex-row flex-col">

        <span class="flex flex-col-reverse md:flex-row mt-2 text-right">
            <button on:click={toggle} class:bg-gray-700={interesat} class:bg-blue-500={!interesat} class="focus:outline-none lg:text-base md:text-sm md:mt-4 mt-1 outline-none px-4 py-2 rounded-md self-center table text-white text-xs">
                <svg class="inline mr-2 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                INAPOI LA ANUNT
            </button>
        </span>

    </div>

{/if}