import { readable, derived } from 'svelte/store'
import { auth, fire, db } from "./fire.js"

import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

// Hack need somehow to init firebase before it's needed (TO BE Refactored)

try {
    firebase.initializeApp({
        apiKey: "AIzaSyA7CZB5SY3BI5bgFBS0sO86l6OlgDN9BmY",
        authDomain: "cdi-firebase.firebaseapp.com",
        databaseURL: "https://cdi-firebase.firebaseio.com",
        projectId: "cdi-firebase",
        storageBucket: "cdi-firebase.appspot.com",
        messagingSenderId: "851561307188",
        appId: "1:851561307188:web:d1c00e1aaf818ee9b8fe61",
        measurementId: "G-YRBTWP52ZP"
    })   
        
} catch (error) {
    // refactor
}



const initial_logged_state = true ? auth.currentUser : false
export const logged = readable(initial_logged_state, function isLogged(set) {
    let unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
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
