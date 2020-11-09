<script>

import DescriereUser from "./camera/DescriereUser.svelte"
import DescriereCamera from "./camera/DescriereCamera.svelte"
import ActiuniCamera from "./camera/ActiuniCamera.svelte"

export let lista_camere

let interesat = false
let show_user = false
let show_msg = false

</script>



{#each lista_camere as camera}

    <article 
    class:bg-gray-100={interesat} 
    class:bg-white={!interesat} 
    class:shadow-md={!interesat} 
    class="max-w-2xl md:p-4 mt-4 md:mt-6 mx-auto p-2 rounded-md"
    >

        {#if show_msg}
            Mesaje de la cei interesati
        {:else}
            <DescriereUser bind:interesat bind:show_user {...camera.top_data}/>
        {/if}
        
        
        {#if !show_user}
            
            {#if !show_msg}
                <DescriereCamera {...camera.center_data}/>
            {/if}

            <ActiuniCamera bind:show_msg bind:interesat {...camera.bottom_data}/>
        {/if}

    </article>

{/each}
