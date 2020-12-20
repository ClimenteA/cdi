<script>

import { found_rooms } from "../Stores/rooms-found.js"
import Room from "../RoomsInterested/Room.svelte"

</script>


<section class="mt-10">

    {#if $found_rooms.length > 0}

        {#each $found_rooms as camera }
            <Room {camera}/>
        {/each}

    {:else}
        <p class="text-center text-gray-600 mt-10">
            Nici un anunt gasit.
        </p>
    {/if}

</section>



