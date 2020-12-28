<script>

import Btn from "../Widgets/Btn/Btn.svelte"
import Box from "../Widgets/Box/Box.svelte"
import { db, bucket } from "../Utils/fire.js"
import { current_user, logout } from "../Utils/auth.js"


console.log($current_user)



async function getUserData() {
    try {
        let user_ref = await db.collection("users").doc($current_user.uid).get()
        return user_ref.data()
    } catch (error) {
        console.error("", error)
    }
}
 
let despre_mine = "Sectiune necompletata."
getUserData().then(user_data => {
    try {
        despre_mine = user_data.despre_mine
    } catch (error) {
        console.log(error)
        logout()
    }
})


let editable = false
async function toggleEdit() {    
    editable = !editable
} 


let email = $current_user.email

let updateProfileError = false
async function updateProfile(event) {
    let form_data = new FormData(event.target)
    form_data = Object.fromEntries(form_data)
    form_data.displayName = $current_user.displayName
    let foto = form_data.foto
    delete form_data.foto

    try {

        if (foto.size > 0) { // this is not evaluated? why?
            let snapshot   = await bucket.child(`/profileImages/${$current_user.uid}/${foto.name}`).put(foto)
            let fotourl    = await snapshot.ref.getDownloadURL()
            form_data.photoUrl = fotourl
        }        

        await db.collection("users").doc($current_user.uid).update(form_data)

        toggleEdit()

    } catch (error) {
        updateProfileError = true
        console.error("Error updating about me section: ", error)
        toggleEdit() // Temporary 

    }

    console.log(form_data, foto)

}

</script>


{#if editable}

    <form 
        on:submit|preventDefault={updateProfile} 
        class="flex flex-col items-center max-w-xs mb-16 mt-10 mx-auto"
    >

        <Box 
            label="Despre mine:" 
            bind:value={despre_mine}
            name="despre_mine" 
            type="textarea" 
            placeholder="Scrie o scurta descriere. Ex: Nu ascult muzica la maxim. Nu fumez. Nu am animale de companie etc"
        />
            
        <Box 
            label="Email nou:" 
            value={email} 
            name="email" 
            type="email"
        />

        <label class="ml-2 md:text-sm text-xs mt-4 mb-4 text-gray-700 overflow-hidden" for="foto">Foto Profil
            <input type="file" id="foto" name="foto" accept=".jpg, .jpeg, .png">
        </label>

        <div class="flex gap-2 flex-col">
            <Btn text="SALVEAZA" type="submit"/>
            <Btn on:click={toggleEdit} text="INAPOI" active={false}/>
        </div>

        {#if updateProfileError}
            <p class="text-sm text-red-500">
                Toate campurile trebuie completate.
            </p>
        {/if}

    </form>

{:else}

    <div class:shadow-md={editable} 
    class="bg-white max-w-md mb-6 md:p-8 md:text-sm min-h-32 mt-4 mx-auto p-4 relative rounded-md text-gray-800 text-xs">

        <h4 class="mt-2 font-semibold">Despre mine</h4>

        <button on:click={toggleEdit} class="absolute top-0 right-0 h-4 w-4 mt-2 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zm-2.207 2.207L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
            </svg>
        </button>

        <p>{despre_mine}</p>

            
    </div>

{/if}
    
<p class="text-gray-600 text-xs lg:text-sm text-center">
    Stabileste o intalnire video inainte de a te muta.
</p>


    