<script>

export let camera
export let show_interested

let interesati_len = camera.interesati.length

let options = {day: 'numeric', month:'short'}
let data_liber = new Intl.DateTimeFormat('ro-RO', options).format(camera.liber.toDate())


function toggleInterested(){
    show_interested = !show_interested
}

</script>


<div class="flex md:items-baseline justify-between px-6 border-t-2 mt-2 md:flex-row flex-col">

    <span class="flex flex-col-reverse md:flex-row mt-2 text-right">
        
        <button on:click={toggleInterested} class="focus:outline-none outline-none bg-blue-500 lg:text-base md:text-sm md:mt-4 mt-1 px-4 py-2 rounded-md self-center table text-white text-xs">
            
            {#if show_interested}

                <svg class="inline mr-2 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                INAPOI

            {:else}

                VEZI INTERESATI
                <svg class="inline ml-2 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>

            {/if}

        </button>
        
        <sup class="mt-4 text-gray-700">
            ({interesati_len} {interesati_len === 1 ? 'interesat' : 'interesati'})
        </sup>

    </span>

    <div class="flex flex-col md:text-sm mt-2 text-center text-gray-700 text-xs">
        <span>Liber de la {data_liber}</span>
    </div>

</div>

