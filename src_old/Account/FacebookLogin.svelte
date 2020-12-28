<script>

import Btn from "../Widgets/Btn/Btn.svelte"
import { login } from "../Utils/auth.js" 
           
</script>


<section class="flex flex-col justify-center mt-10">
    
    <h1 class="border-b-2 py-2 mb-6 self-center text-sm md:text-base">
        Intra in cont
    </h1>

    <Btn on:click={login} text="INTRA CU FACEBOOK" />
    
    <p class="max-w-xs md:text-sm mt-2 self-center text-center text-gray-600 text-xs">
        Click pe 'INTRA CU FACEBOOK' pentru a te loga/crea un cont.
    </p>

</section>
