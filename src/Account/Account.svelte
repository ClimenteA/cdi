<script>


import FacebookLogin from "./FacebookLogin.svelte"
import UserPage from "./UserPage.svelte"
import { logged } from '../Stores/auth.js'


</script>



{#if $logged}
    <UserPage/>    
{:else}
    <FacebookLogin/>
{/if}
