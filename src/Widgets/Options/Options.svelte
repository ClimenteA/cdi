<script>

export let name
export let data


let show = false
function toggle() {
    show = !show
}

$: size_of_selected = data.filter(d => d.isChecked).length

function clearSelected(){
    data = data.map(d => {
        return {text:d.text, isChecked:false}
    })
    toggle()
}

</script>


<ul class="bg-white lg:cursor-pointer flex flex-col gap-1 mt-4 place-self-center justify-self-start px-2 rounded-md">
    
    <caption on:click={toggle} class:border-b-2="{show}" class="text-gray-700 text-left py-2 text-xs md:text-sm">
        
        {name} 

        <sup class:text-green-500={size_of_selected > 0}>
            ({size_of_selected})
        </sup>
        
        {#if !show}

            <svg class="float-right ml-2 stroke-2 h-4 inline mb-1 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>

        {:else}
        
            <svg class="float-right ml-2 stroke-2 h-4 inline mb-1 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
            </svg>

            <svg on:click={clearSelected} class="float-right ml-2 stroke-2 h-4 inline mb-1 text-green-500" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
            
        {/if}

    </caption>

    {#if show}
        
        {#each data as item, ix}
            <li class:mt-2={ix === 0} class:mb-4={ix === data.length-1}>
                <label for="{item.text}" class="py-1 lg:cursor-pointer">
                    <input type="checkbox" bind:checked={item.isChecked} bind:value={item.text} id={item.text}> 
                    <span>
                        <span class="text-gray-700 text-xs md:text-sm">{item.text}</span>           
                        <slot></slot>
                    </span>
                </label>
            </li>
        {/each}

    {/if}

    
</ul>

