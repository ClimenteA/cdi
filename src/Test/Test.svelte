<script>
// https://tarekraafat.github.io/autoComplete.js/#/
// import autoComplete from "../Utils/autoComplete.min.js"
import { localitati } from "../Stores/judete-localitati.js"
// console.log(localitati)

const autoComplete = require("@tarekraafat/autocomplete.js/dist/js/autoComplete")


let key_list_obj =  {"key1": ['el1', 'el2', 'el3'], "key2": ['el1', 'el2', 'el3']}
let simplelist = ['banana', 'kiwi', 'ananas']


new autoComplete({
    data: {
        src: simplelist,
        // key: Object.keys(key_list_obj),
        // key: simplelist,
        // cache: true
    },
    selector: "#autoComplete",           
    threshold: 1,
    searchEngine: "strict"    
})

// TypeError: n.filter is not a function

</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@7.2.0/dist/css/autoComplete.min.css">
</svelte:head>



<input id=autoComplete tabindex=1> 