<script>

import { found_rooms } from "../Stores/rooms-found.js"
import Room from "./Room.svelte"

</script>


<section class="flex flex-col max-w-3xl mt-10 mx-auto">

    {#if $found_rooms.length > 0}

        {#each $found_rooms as camera }
            <Room {camera}/>
        {/each}

    {:else}
        <p class="text-center text-gray-600 mt-10">Nici un anunt gasit.</p>
    {/if}

</section>



