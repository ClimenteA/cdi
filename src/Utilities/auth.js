import { readable } from 'svelte/store'
import { auth, firebase } from "./fire.js"


export const logged = readable(false, function isLogged(set) {
    let unsubscribe = auth.onAuthStateChanged(function(user) {
        if (user) return set(true)
        else return set(false)
    })
    return unsubscribe
})


export function login() {   
    let provider = new firebase.auth.FacebookAuthProvider()
    auth.signInWithPopup(provider).then( result => {
        console.log("logged in")
        console.log(result.user)
    })
}


export function logout(){
    auth.signOut().then(
        console.log("logged out")
    )
}


