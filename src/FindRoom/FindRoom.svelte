<script>


import { fade } from 'svelte/transition'

import { push } from 'svelte-spa-router'   
import Options from "../Widgets/Options/Options.svelte"
import Box from "../Widgets/Box/Box.svelte"
import Btn from "../Widgets/Btn/Btn.svelte"
import Loader from "../Widgets/Loader/Loader.svelte"
import RoomsList from "./RoomsList.svelte" 

import { logged } from "../Utils/auth.js"
import { localitati } from "../Stores/kraaden-localitati.js"
import { db, fire } from "../Utils/fire.js"
import { found_rooms } from "../Stores/rooms-found.js"


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
    {text: "Fara animale de companie", isChecked: false},
    {text: "Se accepta doar caini", isChecked: false},
    {text: "Se accepta doar pisici", isChecked: false},
    {text: "Nu se fumeaza in camera", isChecked: false},
    {text: "Doar o persoana in camera", isChecked: false},
    {text: "Fara studenti", isChecked: false},
    {text: "Doar fete", isChecked: false},
    {text: "Doar baieti", isChecked: false},
],
    
}

// let all_filters = [].concat(criterii_camera.dotari, criterii_camera.facilitati, criterii_camera.cerinte)

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

// TODO - find a way to overcome 'array-contains-any' up to 10 items limit

let saving = false
async function findRoom(event){

    let form_data = new FormData(event.target)
    form_data = Object.fromEntries(form_data)
    form_data.buget = Number(form_data.buget)
    form_data.liber = fire.firestore.Timestamp.fromDate(new Date(form_data.liber))
    
    form_data.locatie = form_data.locatie.replace(", zona?", "")
    let locatie = form_data.locatie.trim().split(",")
    form_data.localitate = locatie[0].trim()
    form_data.judet = locatie = locatie[1].replace("jud.", "").trim()
    if (locatie.length === 3) {
        form_data.zona = locatie[2].trim()
    }
    
    form_data = {
        ...form_data, 
        dotari: getSelected(dotari),
        facilitati: getSelected(facilitati),
        cerinte: getSelected(cerinte),   
    }

    let query = await db.collection("anunturi")
                .where("localitate", "==", form_data.localitate)
                .where("judet", "==", form_data.judet)
                .where("buget", ">=", form_data.buget)
                // .where("filtre", "array-contains-any", all_filters)
                // .where("liber", ">=", form_data.liber)
                .get()

    if (query.empty){
        console.error("Query has no results.")
        console.log(query)
    } else {
        console.info("Query has results.")
        let query_results = []
        query.forEach(doc => {
            query_results.push({...doc.data(), "id":doc.id})
        })

        found_rooms.update(() => query_results)
    }

    // console.log($found_rooms)

    saving = false

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


<section class="flex flex-col max-w-xl mt-10 mx-auto">
    
    <h1 
        transition:fade
        class="border-b-2 py-2 self-center text-sm md:text-base mb-4"
    >
        Cauta o camera
    </h1>

    <form class:hidden={!show_btn} on:submit|preventDefault={findRoom} class="flex flex-col gap-2">

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
    
        <!-- <div class="mb-6"> 
            <Options name="Dotari apartament" bind:data={dotari}/>
            <Options name="Facilitati apartament" bind:data={facilitati}/>
            <Options name="Cerinte chiriasi" bind:data={cerinte}/>
        </div> -->

        <div class="mt-6 mx-auto">
            <Btn text="CAUTA CAMERA" type="submit"/>
        </div>
            
    </form>

</section>



<RoomsList/>