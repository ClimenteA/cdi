<script>

import { get } from 'svelte/store'
import { model, criterii_camera } from '../stores.js'
import InputBox from "../components/InputBox.svelte"
import DropCheck from "../components/DropCheck.svelte"
import Anunt from "../components/Anunt.svelte"


function searchRooms(event){
    let anunt_checklist = get(model)
    let form_data = new FormData(event.target)
    form_data = {...anunt_checklist, ...Object.fromEntries(form_data)}

    form_data.buget = Number(form_data.buget)

    console.log(form_data)
}



// export let data
let anunt = {
    buget: 85,
    cerinte: ["Fara studenti", "Nu se fumeaza in camera", "Doar o persoana in camera", "Fara animale de companie"],
    data: "23 Oct, 20:15",
    descriere: "Inchiriez o camera mobilata complet pentru o persoana, intr-un apartament lux mobilat si utilat complet in care locuiesc alte fete, fiecare fata are cheie individuala la camera ei, in Oradea zona Nufarul vis-a -vis de LOTUS, aproape de statia de tramvai. Inchiriez o camera mobilata complet pentru o persoana, intr-un apartament lux mobilat si utilat complet in care locuiesc alte fete, fiecare fata are cheie individuala la camera ei, in Oradea zona Nufarul vis-a -vis de LOTUS, aproape de statia de tramvai. ",
    dotari: ["Aragaz", "Frigider", "Masina de spalat", "Mobilat  complet", "Centrala termica", "Wifi, cablu TV/Net"],
    facilitati: ["Decomandat", "Cu balcon", "Etaj 1-4", "Magazin in apropiere", "Statie transport in apropiere"],
    liber: "2020-10-31",
    locatie: "Iasi, Nicolina",
    proprietar: "Alin Climente",
    foto: "../../assets/img/avatar.jpg",
    despre: "Lucrez mai tot timpul. Pun muzica tare, doar la casti. Nu las vasele in chiuveta pana a doua zi. Nu beau decat ocazional si fumez doar in balcon/bucatarie."
}


</script>


<section class="flex flex-col max-w-xl mt-10 mx-auto">

    <h1 class="border-b-2 py-2 self-center text-sm md:text-base mb-4">Cauta o camera</h1>

    <form on:submit|preventDefault={searchRooms} class="flex flex-col gap-2">

        <InputBox name="oras-zona" label="Oras si zona" placeholder="ex: Iasi, Cantemir">
            <svg class="fill-current h-4 inline mb-1 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>    
            </svg>    
        </InputBox>
    
        <div class="grid grid-cols-2 gap-2">
            
            <InputBox name="buget" label="Buget lunar" type="number" placeholder="ex: 85">
                <span class="font-semibold text-green-500">&euro;</span>
            </InputBox>
    
            <InputBox name="data-liber" label="Liber de la" type="date">
                <svg class="stroke-2 h-4 inline mb-1 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>    
            </InputBox>
    
        </div>
    
        <div>
            <DropCheck name="Dotari apartament" options={criterii_camera.dotari} field="dotari"/>
            <DropCheck name="Facilitati apartament" options={criterii_camera.facilitati} field="facilitati"/>
            <DropCheck name="Cerinte chiriasi" options={criterii_camera.cerinte} field="cerinte"/>
        </div>

        <button type="submit" class="table mt-10 px-4 py-2 self-center focus:outline-none outline-none text-xs md:text-sm lg:text-base rounded-md bg-blue-500 text-white">
            CAUTA CAMERA
            <svg class="inline ml-2 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
        </button>

    </form>

</section>


<section class="md:mt-12 mt-10 border-t-2">

    <p class="max-w-xl mt-6 mx-auto text-gray-600 md:text-sm text-xs">
        Click pe butonul "SUNT INTERESAT(A)" la anunturile de care esti interesat.
        Completeaza sectiunea "Despre mine" din contul tau, 
        pentru a creste sansele de a fi contactat. 
        Atunci cand imparti locuinta cu altcineva e bine sa fiti pe aceeasi lungime de unda. 
    </p>

    <Anunt {anunt}/>

    <Anunt {anunt}/>

    <Anunt {anunt}/>

    <Anunt {anunt}/>

    <Anunt {anunt}/>

    <Anunt {anunt}/>

</section>