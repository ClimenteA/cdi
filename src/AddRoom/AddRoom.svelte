<script>
    
import { push } from 'svelte-spa-router'   
import Options from "../Widgets/Options/Options.svelte"
import Box from "../Widgets/Box/Box.svelte"
import Btn from "../Widgets/Btn/Btn.svelte"
import Loader from "../Widgets/Loader/Loader.svelte"
import Toast from "../Widgets/Toast/Toast.svelte"

import { current_user, logged } from "../Utils/auth.js"
import { localitati } from "../Stores/kraaden-localitati.js"
import { db, fire } from "../Utils/fire.js"

// If called from another file keeps state between routes..
// import { criterii_camera } from "../Stores/criterii-camera.js"

const criterii_camera = {

dotari: [
    {text: "Aragaz", isChecked: false},
    {text: "Frigider", isChecked: false},
    {text: "Masina de spalat", isChecked: false},
    {text: "Mobilat complet", isChecked: false},
    {text: "Wifi, cablu TV/Net", isChecked: false},
    {text: "Centrala termica", isChecked: false},
    {text: "Hota aragaz", isChecked: false},
    {text: "Masina de spalat vase", isChecked: false},
    {text: "Aer conditionat", isChecked: false},
],

facilitati : [
    {text: "Decomandat", isChecked: false},
    {text: "Cu balcon", isChecked: false},
    {text: "Apartament lux", isChecked: false},
    {text: "Etaj 1-4", isChecked: false},
    {text: "Lift", isChecked: false},
    {text: "Magazin in apropiere", isChecked: false},
    {text: "Statie transport in apropiere", isChecked: false},
    {text: "Loc de parcare", isChecked: false},
], 

cerinte: [
    {text: "Fara studenti", isChecked: false},
    {text: "Nu se fumeaza in camera", isChecked: false},
    {text: "Doar fete", isChecked: false},
    {text: "Doar baieti", isChecked: false},
    {text: "Doar o persoana in camera", isChecked: false},
    {text: "Fara animale de companie", isChecked: false},
    {text: "Se accepta doar caini", isChecked: false},
    {text: "Se accepta doar pisici", isChecked: false},
],
 
}


let dotari = criterii_camera.dotari
let facilitati = criterii_camera.facilitati
let cerinte = criterii_camera.cerinte


function getSelected(selectedItems){

    let filtered_items = []
    selectedItems.forEach(obj => {
        if (obj.isChecked) {
            filtered_items.push(obj.text)
        }       
    })
    
    return filtered_items
}


function isDate(dateStr) {
  return !isNaN(new Date(dateStr).getDate())
}

// TODO - figure out how to make saveRoom function more clean

let error = false
let success = false
let saving = false
async function saveRoom(event){

    let form_data = new FormData(event.target)
    form_data = Object.fromEntries(form_data)
    
    saving = true

    form_data.buget = Number(form_data.buget)
    
    if (isNaN(form_data.buget)) {
        saving = false   
        error = "'Buget lunar' trebuie sa fie un numar pozitiv"
        setTimeout(_ => {
            error = false
        }, 2500)
        throw error
    }

    if (!isDate(form_data.liber)){
        
        console.log(form_data.liber)

        saving = false   
        error = "'Liber de la' trebuie sa fie in formatul: YYYY-MM-DD"
        setTimeout(_ => {
            error = false
        }, 2500)
        throw error
    }

    form_data.liber = fire.firestore.Timestamp.fromDate(new Date(form_data.liber))
    
    let owner = {
        proprietar: $current_user.displayName,
        uid: $current_user.uid,
        foto: $current_user.photoURL,
        data: fire.firestore.FieldValue.serverTimestamp()
    }
    
    form_data = {
        ...form_data, 
        ...owner,
        dotari: getSelected(dotari),
        facilitati: getSelected(facilitati),
        cerinte: getSelected(cerinte),   
    }

    let anunt_ref = await db.collection("anunturi").add(form_data)
    let user_ref = await db.collection("users").doc($current_user.uid)
    let user_doc = await user_ref.get()

    if (!user_doc.exists) {
        await db.collection("users").doc($current_user.uid).set({
            anunturi_postate: fire.firestore.FieldValue.arrayUnion(anunt_ref)
        })  
    }
    else {
        await user_ref.update({
            anunturi_postate: fire.firestore.FieldValue.arrayUnion(anunt_ref)
        })
    }

    saving = false
    success = true
    setTimeout(_ => {
        success = false
    }, 2500)

    console.log(form_data)

}

let show_btn = true

$: {

    if (saving) {
        show_btn = false
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
    }  
}

</script>

{#if $logged === false}
    {push("/cont")}
{/if}

{#if saving}
    <Loader/>
{/if}

{#if error}
    <Toast message={error} info={false}/>
{/if}

{#if success}
    <Toast message="Anuntul a fost salvat!"/>
{/if}


<section class="flex flex-col max-w-xl mt-10 mx-auto">

    <h1 class="border-b-2 py-2 self-center text-sm md:text-base mb-4">Adauga o camera</h1>

    <form on:submit|preventDefault|once={saveRoom} class="flex flex-col gap-2">

        <Box autoCompleteList={localitati} name="locatie" label="Oras si zona" placeholder="ex: Iasi, Cantemir">
            <svg class="fill-current h-4 inline mb-1 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>    
            </svg>    
        </Box>
    
        <div class="grid grid-cols-2 gap-2">
            
            <Box name="buget" label="Buget lunar" type="number" placeholder="ex: 85">
                <span class="font-semibold text-green-500">&euro</span>
            </Box>
    
            <Box name="liber" label="Liber de la" type="date">
                <svg class="stroke-2 h-4 inline mb-1 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>    
            </Box>
    
        </div>
    
        <Box name="descriere" label="Descriere anunt" type="textarea" placeholder="ex: Cautam o persoana linistita si curata.">
            <svg class="stroke-2 h-4 inline mb-1 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
            </svg>
        </Box>

        <div class="mb-6">
            <Options name="Dotari apartament" bind:data={dotari}/>
            <Options name="Facilitati apartament" bind:data={facilitati}/>
            <Options name="Cerinte chiriasi" bind:data={cerinte}/>
        </div>

        {#if show_btn}
            <Btn text="ADAUGA CAMERA" type="submit"/>
        {/if}
            
    </form>

</section>


