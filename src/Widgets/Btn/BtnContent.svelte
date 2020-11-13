<script>

export let icon
export let text

</script>


{#if icon === "search"}  

    {text}

    <svg class="inline ml-1 md:ml-2 w-3 md:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
    </svg>

{:else if icon === "arrow-right"}

    {text}

    <svg class="inline ml-1 md:ml-2 w-3 md:w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
    </svg>

{:else if icon === "arrow-left"}

    <svg class="inline mr-1 md:mr-2 w-3 md:w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
    </svg>

    {text}

{:else}

    {text}

{/if}
