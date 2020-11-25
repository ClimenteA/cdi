<script>
    
import { logged } from '../Utils/auth.js'
    
import UserHeader from "./UserHeader.svelte"
import UserAbout from "./UserAbout.svelte"
import UserListings from "./UserListings.svelte"
import UserDeleteLogout from "./UserDeleteLogout.svelte"
import FacebookLogin from "./FacebookLogin.svelte"


</script>


{#if $logged}
    <UserHeader/>
    <UserAbout/>   
    <UserListings/>
    <UserDeleteLogout/> 
{:else}
    <FacebookLogin/>
{/if}
