<script>

import { anunt } from "../stores.js"

let dotari = ["Aragaz", 
"Frigider", 
"Masina de spalat", 
"Mobilat  complet",
"Centrala termica",
"Hota aragaz",
"Masina de spalat vase",
"Aer conditionat",
"Wifi, cablu TV/Net"
]

let show = false
function toggle() {
    show = !show
}

</script>


<ul class="bg-white flex flex-col gap-1 mt-4 place-self-center justify-self-start px-2 rounded-md">
    
    <caption on:click={toggle} class:border-b-2="{show}" class="text-gray-700 text-left py-2 text-xs">
        
        Dotari apartament
        
        {#if !show}

            <svg class="float-right ml-2 stroke-2 h-4 inline mb-1 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>

        {:else}

            <svg class="float-right ml-2 stroke-2 h-4 inline mb-1 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
            </svg>
            
        {/if}

    </caption>

    {#if show}
        
        {#each dotari as item, ix}
            <li class:mt-2={ix === 0} class:mb-4={ix === dotari.length-1}>
                <label for="{item}" class="py-1">
                    <input type="checkbox" bind:group={$anunt.dotari} value={item} id={item}>
                    <span>
                        <span class="text-gray-700 text-xs">{item}</span>           
                        <slot></slot>
                    </span>
                </label>
            </li>
        {/each}

    {/if}
</ul>

