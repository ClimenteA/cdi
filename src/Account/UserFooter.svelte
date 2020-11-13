<script>

import Btn from "../Widgets/Btn/Btn.svelte"
import { logout } from "../Utilities/auth.js"

</script>


<!-- User delete account or sign out -->

<div class="flex justify-center">
    <Btn on:click={logout} text="iesi din cont"/>
</div>

