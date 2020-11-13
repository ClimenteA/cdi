<script>


import FacebookLogin from "./FacebookLogin.svelte"
import UserPage from "./UserPage.svelte"
import { logged } from '../Utilites/auth.js'


</script>


{#if $logged}
    <UserPage/>    
{:else}
    <FacebookLogin/>
{/if}
