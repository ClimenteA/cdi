<script>
// https://codechips.me/firebase-authentication-with-svelte/

import Btn from "../widgets/Btn/Btn.svelte"
import firebase from "firebase/app"

function login() {   
    let provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithPopup(provider).then( result => {
        console.log("logged in")
    })
}

           
</script>


<section class="flex flex-col justify-center mt-10">
    
    <h1 class="border-b-2 py-2 mb-6 self-center text-sm md:text-base">
        Intra in cont
    </h1>

    <Btn on:click={login} text="INTRA CU FACEBOOK" />
    
    <p class="max-w-xs md:text-sm mt-2 self-center text-center text-gray-600 text-xs">
        Click pe ‘LOGIN CU FACEBOOK’ pentru a te loga/crea un cont.
    </p>

</section>
