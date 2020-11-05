import { writable } from 'svelte/store'


export const account = {
    logged: false,
    nume: "Alin Climente",
    email: "climente.alin@gmail.com",
    foto: "../../assets/img/avatar.jpg",
    despre: "Lucrez mai tot timpul. Pun muzica tare, doar la casti. Nu las vasele in chiuveta pana a doua zi. Nu beau decat ocazional si fumez doar in balcon/bucatarie.",
}


export const model = writable({
    dotari: [],
    facilitati: [],
    cerinte: [],
    filtre_dotari: [],
    filtre_facilitati: [],
    filtre_cerinte: []
})

