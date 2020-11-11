import firebase from "firebase/app"
import { readable } from 'svelte/store'

export const logged = readable(false, function isLogged(set) {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) return set(true)
        else return set(false)
    })
})
