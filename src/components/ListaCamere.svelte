<script>

import DescriereUser from "./camera/DescriereUser.svelte"
import DescriereCamera from "./camera/DescriereCamera.svelte"
import ActiuniCamera from "./camera/ActiuniCamera.svelte"

export let lista_camere

let interesat = false
let show_user = false


</script>



{#each lista_camere as camera}

    <article 
    class:bg-gray-100={interesat} 
    class:bg-white={!interesat} 
    class:shadow-md={!interesat} 
    class="max-w-2xl md:p-4 mt-4 md:mt-6 mx-auto p-2 rounded-md"
    >

        <DescriereUser bind:interesat bind:show_user {...camera.top_data}/>

        {#if !show_user}
            <DescriereCamera {...camera.center_data}/>
            <ActiuniCamera bind:interesat {...camera.bottom_data}/>
        {/if}

    </article>

{/each}
