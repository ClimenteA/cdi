<script>

import { fade, fly } from 'svelte/transition'
import { backOut } from 'svelte/easing'

export let message
export let info = true



</script>

<!-- {#if show_toast} -->

    <div 
        in:fly="{{delay: 0, duration: 300, x: 0, y: 50, opacity: 0.1, easing: backOut}}" 
        out:fade={{duration:500, opacity: 0}} 
        class:border-green-500={info} class:border-red-500={!info} 
        class="absolute bg-blue-900 border-l-8 bottom-0 left-0 p-2 pr-4 rounded-r-md shadow-md text-right text-white z-20"
    >
        
    {message}

    </div>

<!-- {/if} -->
    