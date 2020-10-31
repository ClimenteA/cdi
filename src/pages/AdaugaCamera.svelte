<script>

import { get } from 'svelte/store'
import { model } from '../stores.js'
import InputBox from "../components/InputBox.svelte"
import DropCheck from "../components/DropCheck.svelte"

let dotari = ["Aragaz", 
"Frigider", 
"Masina de spalat", 
"Mobilat  complet",
"Centrala termica",
"Hota aragaz",
"Masina de spalat vase",
"Aer conditionat",
"Wifi, cablu TV/Net"
]


let facilitati = ["Decomandat", 
"Cu balcon", 
"Apartament lux", 
"Etaj 1-4",
"Lift",
"Magazin in apropiere",
"Statie transport in apropiere",
"Loc de parcare"
]


let cerinte = ["Fara studenti", 
"Nu se fumeaza in camera",
"Doar fete", 
"Doar baieti", 
"Doar o persoana in camera",
"Fara animale de companie",
"Se accepta doar caini",
"Se accepta doar pisici"
]


function saveRoom(event){
    let anunt_checklist = get(model)
    console.log(anunt_checklist)
    
    let form_data = new FormData(event.target)
    form_data = Object.fromEntries(form_data)
    console.log(form_data)
}


</script>



<section class="flex flex-col max-w-xl mt-10 mx-auto">

    <h1 class="border-b-2 py-2 self-center text-sm md:text-base mb-4">Adauga o camera</h1>

    <form on:submit|preventDefault={saveRoom} class="flex flex-col gap-2">

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
    
        <InputBox name="detalii" label="Alte detalii anunt" type="textarea" placeholder="ex: Cautam o persoana linistita si curata.">
            <svg class="stroke-2 h-4 inline mb-1 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
            </svg>
        </InputBox>

        <div class="">

            <DropCheck name="Dotari apartament" options={dotari} field="dotari"/>
            <DropCheck name="Facilitati apartament" options={facilitati} field="facilitati"/>
            <DropCheck name="Cerinte chiriasi" options={cerinte} field="cerinte"/>

        </div>

        <button type="submit" class="table px-4 py-2 focus:outline-none outline-none text-xs lg:text-base rounded-md bg-blue-500 text-white">
            Adauga camera
        </button>

    </form>

</section>
