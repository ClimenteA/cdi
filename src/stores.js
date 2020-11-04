import { writable } from 'svelte/store'


export const account = {
    logged: false
}


export const model = writable({
    dotari: [],
    facilitati: [],
    cerinte: [],
    filtre_dotari: [],
    filtre_facilitati: [],
    filtre_cerinte: []
})

