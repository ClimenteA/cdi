import { readable } from 'svelte/store'

import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyA7CZB5SY3BI5bgFBS0sO86l6OlgDN9BmY",
    authDomain: "cdi-firebase.firebaseapp.com",
    databaseURL: "https://cdi-firebase.firebaseio.com",
    projectId: "cdi-firebase",
    storageBucket: "cdi-firebase.appspot.com",
    messagingSenderId: "851561307188",
    appId: "1:851561307188:web:d1c00e1aaf818ee9b8fe61",
    measurementId: "G-YRBTWP52ZP"
}

// On load init firebase and set db auth variables
var db, auth, fire, bucket
window.onload = () => {

try {
    firebase.initializeApp(firebaseConfig)   
} catch (error) {
    
}

db = firebase.firestore()
auth = firebase.auth()
bucket = firebase.storage().ref()
fire = firebase

// Detect if we develop on local 
// Change port if needed in firebase.json
if (window.location.hostname === "localhost") {
    db.settings({
        host: "localhost:5005",
        ssl: false
    })
}

// console.log("firebase initialized")

// End onload
}


// Make db, auth variables available for all components
db = readable(db)
auth = readable(auth)
fire = readable(firebase)
bucket = readable(bucket)


export {
    db,
    auth,
    fire,
    bucket
}

console.log("fire.js")

