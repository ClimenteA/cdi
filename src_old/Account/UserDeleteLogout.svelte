<script>

import Btn from "../Widgets/Btn/Btn.svelte"
import { logout } from "../Utils/auth.js"

</script>


<div class="flex justify-center mt-32">
    <Btn on:click={logout} text="iesi din cont"/>
</div>

