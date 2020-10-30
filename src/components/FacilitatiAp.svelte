<script>

import { anunt } from "../stores.js"

let facilitati = ["Decomandat", 
"Cu balcon", 
"Apartament lux", 
"Etaj 1-4",
"Lift",
"Magazin in apropiere",
"Statie transport in apropiere",
"Loc de parcare"
]

</script>


<ul class="flex flex-col gap-2 mt-4">
    <caption class="border-b-2 text-gray-700 text-left text-xs">Facilitati apartament</caption>
    {#each facilitati as item}
        <li>
            <label for="{item}" class="py-1">
                <input type="checkbox" bind:group={$anunt.facilitati} value={item} id={item}>
                <span>
                    <span class="text-gray-700 text-xs">{item}</span>           
                    <slot></slot>
                </span>
            </label>
        </li>
    {/each}
</ul>

