<script>

import { anunt } from "../stores.js"

let cerinte = ["Fara studenti", 
"Nu se fumeaza in camera",
"Doar fete", 
"Doar baieti", 
"Doar o persoana in camera",
"Fara animale de companie",
"Se accepta doar caini",
"Se accepta doar pisici"
]

</script>


<ul class="flex flex-col gap-2 mt-4">
    <caption class="border-b-2 text-gray-700 text-left text-xs">Cerinte chiriasi</caption>
    {#each cerinte as item}
        <li>
            <label for="{item}" class="py-1">
                <input type="checkbox" bind:group={$anunt.cerinte} value={item} id={item}>
                <span>
                    <span class="text-gray-700 text-xs">{item}</span>           
                    <slot></slot>
                </span>
            </label>
        </li>
    {/each}
</ul>

