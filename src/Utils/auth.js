import { readable, derived } from 'svelte/store'
import { auth, fire, db } from "./fire.js"

const initial_logged_state = true ? auth.currentUser : false
export const logged = readable(initial_logged_state, function isLogged(set) {
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
        // If user doesn't have additional data saved then create some defaults
        db.collection("users").doc(result.user.uid).get().then(data => {
            if (!data.exists) {
                db.collection("users").doc(result.user.uid).set(
                    {
                        "despre_mine": "Sectiune necompletata.",
                        "anunturi_postate": [],
                        "anunturi_interesat": []
                    }
                )
            }
        })
    })
}


export function logout(){
    auth.signOut().then(
        // console.log("logged out")
    )
}

console.log("auth.js")
