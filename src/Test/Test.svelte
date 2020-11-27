<script>

// https://github.com/kraaden/autocomplete
import autocomplete from 'autocompleter'

import { onMount } from 'svelte'
import { localitati } from "../Stores/kraaden-localitati.js"
import Box from "../Widgets/Box/Box.svelte"


onMount(() => {
    
    let input = document.getElementById("locatie")
    autocomplete({
        input: input,
        fetch: function(text, update) {
            text = text.toLowerCase()
            let suggestions = localitati.filter(n => n.label.toLowerCase().startsWith(text))
            update(suggestions)
        },
        onSelect: function(item) {
            input.value = item.label + ", zona?"
        }
    })
})



</script>


<Box name="locatie" label="Oras si zona" placeholder="ex: Iasi, Cantemir">
    <svg class="fill-current h-4 inline mb-1 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>    
    </svg>    
</Box>

