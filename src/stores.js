import { writable } from 'svelte/store'


export const account = {
    logged: true
}


export const model = writable({
    dotari: [],
    facilitati: [],
    cerinte: [],
    filtre_dotari: [],
    filtre_facilitati: [],
    filtre_cerinte: []
})


export const criterii_camera = {

    dotari: ["Aragaz", 
    "Frigider", 
    "Masina de spalat", 
    "Mobilat  complet",
    "Centrala termica",
    "Hota aragaz",
    "Masina de spalat vase",
    "Aer conditionat",
    "Wifi, cablu TV/Net"
    ],

    facilitati : ["Decomandat", 
    "Cu balcon", 
    "Apartament lux", 
    "Etaj 1-4",
    "Lift",
    "Magazin in apropiere",
    "Statie transport in apropiere",
    "Loc de parcare"
    ],


    cerinte: ["Fara studenti", 
    "Nu se fumeaza in camera",
    "Doar fete", 
    "Doar baieti", 
    "Doar o persoana in camera",
    "Fara animale de companie",
    "Se accepta doar caini",
    "Se accepta doar pisici"
    ]

}