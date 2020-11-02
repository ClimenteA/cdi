<script>

import Table from "./Table.svelte"

// export let data

let anunt = {
    buget: 85,
    cerinte: ["Fara studenti", "Nu se fumeaza in camera", "Doar o persoana in camera", "Fara animale de companie"],
    data: "2020-10-31",
    descriere: "Inchiriez o camera mobilata complet pentru o persoana, intr-un apartament lux mobilat si utilat complet in care locuiesc alte fete, fiecare fata are cheie individuala la camera ei, in Oradea zona Nufarul vis-a -vis de LOTUS, aproape de statia de tramvai. Inchiriez o camera mobilata complet pentru o persoana, intr-un apartament lux mobilat si utilat complet in care locuiesc alte fete, fiecare fata are cheie individuala la camera ei, in Oradea zona Nufarul vis-a -vis de LOTUS, aproape de statia de tramvai. ",
    dotari: ["Aragaz", "Frigider", "Masina de spalat", "Mobilat  complet", "Centrala termica", "Wifi, cablu TV/Net"],
    facilitati: ["Decomandat", "Cu balcon", "Etaj 1-4", "Magazin in apropiere", "Statie transport in apropiere"],
    liber: "2020-10-31",
    locatie: "Iasi",
    proprietar: "Alin Climente",
    foto: "../../assets/img/avatar.jpg"
}


</script>




<article class="md:p-4 mt-4 p-2 rounded-md bg-white">

    <div>

        <div>
            <span class="font-semibold text-green-500">&euro;</span>
            <span>{anunt.buget}</span>
            <span>{anunt.locatie}</span>
        </div>
    
    
        <div>
            <div>
                <span>{anunt.proprietar}</span>
                <span>Postat la: {anunt.data}</span>
            </div>

            <figure>
                <img class="h-16 w-16 object-cover rounded-full" src="{anunt.foto}" alt="">
            </figure>
        </div>

    </div>
    
    <h4>Descriere</h4>
    
    <p>{anunt.descriere}<span>mai mult</span></p>


    <h1 class="text-lg">Tabel</h1>

    <Table data={anunt}/>




</article>