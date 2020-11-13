<script>

import firebase from "firebase/app"
import Btn from "../Widgets/Btn/Btn.svelte"


function logout(){
    firebase.auth().signOut().then(
        console.log("logged out")
    )
}

</script>


<!-- User delete account or sign out -->

<div class="flex justify-center">
    <Btn on:click={logout} text="iesi din cont"/>
</div>

