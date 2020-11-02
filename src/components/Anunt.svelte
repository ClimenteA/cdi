<script>

import Table from "./Table.svelte"

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
    foto: "../../assets/img/avatar.jpg"
}


</script>


<article class="bg-white max-w-2xl md:p-4 mt-4 mx-auto p-2 rounded-md">

    <div class="flex justify-between">

        <div class="font-semibold">
            <span class="text-2xl text-green-500">&euro;</span>
            <span class="text-2xl">{anunt.buget}</span>
            <span class="text-lg font-normal ml-2">{anunt.locatie}</span>
        </div>
    
        <div class="flex gap-4 cursor-pointer">
            <div class="flex flex-col flex-wrap">
                <span class="font-semibold">{anunt.proprietar}</span>
                <span class="text-right text-xs text-gray-700">{anunt.data}</span>
            </div>

            <figure>
                <img class="border-green-500 border-2 h-16 w-16 object-cover rounded-full" src="{anunt.foto}" alt="">
            </figure>
        </div>

    </div>
    

    <div class="px-6">
        
        <h4 class="font-semibold text-xs md:text-sm">
            Descriere
        </h4>
        
        <p class="mt-2 text-gray-800 text-xs md:text-sm">
            {anunt.descriere}
            <span class="text-green-500 font-semibold cursor-pointer py-2">mai mult</span>
        </p>
    
        <Table data={anunt}/>

    </div>        

</article>