import { readable, derived } from 'svelte/store'
import { auth, fire } from "./fire.js"


export const logged = readable(false, function isLogged(set) {
    let unsubscribe = auth.onAuthStateChanged(function(user) {
        if (user) return set(true)
        else return set(false)
    })
    return unsubscribe
})


export const current_user = derived(logged, $logged => auth.currentUser)


export function login() {   
    let provider = new fire.auth.FacebookAuthProvider()
    auth.signInWithPopup(provider).then( result => {
        // console.log("logged in")
        // console.log(result.user)
    })
}


export function logout(){
    auth.signOut().then(
        // console.log("logged out")
    )
}

