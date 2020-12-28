import { readable, derived } from 'svelte/store'
import { fire, db } from "./fire.js"

import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/storage'
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



const initial_logged_state = true ? firebase.auth().currentUser : false
export const logged = readable(initial_logged_state, function isLogged(set) {
    let unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
        if (user) return set(true)
        else return set(false)
    })
    return unsubscribe
})


export const current_user = derived(logged, async ($logged) => {

    let user_data = await db.collection("users").doc(firebase.auth().currentUser.uid).get()
    if (user_data.exists) {
        console.log("User data from: ", user_data)
    } else {
        return firebase.auth().currentUser
    }

})



// const initial_logged_state = true ? firebase.auth().currentUser : false
// export const logged = readable(initial_logged_state, function isLogged(set) {
//     let unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
//         if (user) return set(true)
//         else return set(false)
//     })
//     return unsubscribe
// })


// export const current_user = derived(logged, async ($logged) => {
//     let user_data = await db.collection("users").doc(firebase.auth().currentUser.uid).get()
//     return {...firebase.auth().currentUser, ...user_data.data()}    
// })


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
                        "anunturi_interesat": [],
                        "email": result.user.email,
                        "name": result.user.displayName,
                        "foto": result.user.photoURL
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
