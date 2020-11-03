<script>

import { account } from "../stores.js"
import InputBox from "../components/InputBox.svelte"
import Anunt from "../components/Anunt.svelte"


function toggle() {
    account.logged = !account.logged 
}

let editable = false
function toggleEdit() {
    editable = !editable
}


let tab_interested = true
function toggleTab(){
    tab_interested = !tab_interested
}


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
    utilizator: "Alin Climente",
    email: "climente.alin@gmail.com",
    foto: "../../assets/img/avatar.jpg",
    despre: "Lucrez mai tot timpul. Pun muzica tare, doar la casti. Nu las vasele in chiuveta pana a doua zi. Nu beau decat ocazional si fumez doar in balcon/bucatarie."
}


</script>



<section class="flex flex-col justify-center mt-10">

    {#if !account.logged}

        <h1 class="border-b-2 py-2 self-center text-sm md:text-base">Intra in cont</h1>

        <button on:click={toggle} class="bg-blue-500 lg:text-base md:text-sm mt-6 px-4 py-2 rounded-md self-center table text-white text-xs">
            LOGIN CU FACEBOOK
        </button>

        <p class="max-w-xs md:text-sm mt-2 self-center text-center text-gray-600 text-xs">
            Click pe ‘LOGIN CU FACEBOOK’ pentru a te loga/crea un cont.
        </p>

    {:else}

        <div class="border-b-2 flex flex-col gap-2 items-center m-4 md:border-b-0 md:gap-4 md:m-0 md:pb-0 pb-2 self-center">

            <figure>
                <img class="border-green-500 border-2 h-24 w-24 object-cover rounded-full" src="{anunt.foto}" alt="">
            </figure>

            <div class="flex flex-col flex-wrap">
                <span class="font-semibold text-center">{anunt.utilizator}</span>
                <span class="text-xs text-gray-700">
                    {anunt.email}
                </span>
            </div>

            <div class:shadow-md={editable} class="bg-white md:p-8 p-4 mt-4 mb-6 md:text-sm relative max-w-md text-xs rounded-md text-gray-800">

                <h4 class="mt-2 font-semibold">Despre mine</h4>

                {#if editable}

                    <button on:click={toggleEdit} class="absolute top-0 right-0 h-4 w-4 mt-2 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
                        </svg>    
                    </button>
                    
                    <InputBox 
                    name="despre" 
                    type="textarea" 
                    placeholder="Scrie o scurta descriere. Ex: Nu ascult muzica la maxim. Nu fumez. Nu am animale de companie etc"/>
                
                {:else}

                    <button on:click={toggleEdit} class="absolute top-0 right-0 h-4 w-4 mt-2 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zm-2.207 2.207L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                        </svg>
                    </button>

                    <p>
                        {anunt.despre}
                    </p>
                    
                    {/if}

                </div>
            
            <span class="text-gray-600 text-xs lg:text-sm text-center">Stabileste o intalnire video inainte de a te muta.</span>
        
        </div>

    {/if}

</section>


<section class="mt-6">


    <button on:click={toggleTab} class="bg-gray-300 shadow-md text-gray-900 focus:outline-none lg:text-base md:text-sm outline-none px-4 py-2 rounded-md self-center table text-xs">
        
        {#if tab_interested}
            Anunturi de care esti interesant(a)
        {:else}
            Anunturile postate de tine 
        {/if}

        <svg class="inline ml-2 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
        </svg>

    </button>


    <div class="mt-4">

        {#if tab_interested}

            <section>
                <Anunt {anunt}/>
            </section>
            
        {:else}

            <section>
                <Anunt {anunt}/>
            </section>
            
        {/if}
        
    </div>

</section>





<button class="bg-red-500 focus:outline-none mt-12 mx-auto outline-none px-4 py-2 rounded-md self-center table text-white text-xs">
    STERGE CONTUL
</button>
