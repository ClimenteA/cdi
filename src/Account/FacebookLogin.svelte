<script>

import { account } from "../stores.js"
import Btn from "../widgets/Btn/Btn.svelte"

function login() {   
    account.logged = !account.logged 
}




</script>



<h1 class="border-b-2 py-2 mb-6 self-center text-sm md:text-base">
    Intra in cont
</h1>


<Btn on:click={login} text="LOGIN CU FACEBOOK" />
  

<p class="max-w-xs md:text-sm mt-2 self-center text-center text-gray-600 text-xs">
    Click pe ‘LOGIN CU FACEBOOK’ pentru a te loga/crea un cont.
</p>