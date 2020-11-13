<script>
// https://firebase.google.com/docs/samples
// https://github.com/firebase/quickstart-js
// https://codelabs.developers.google.com/firebase-emulator#0
// Rules
// https://github.com/u12206050/firestore-rules-starter
// https://github.com/OleksiiBrylin/firestore-rules/blob/master/firestore.rules

// SPA Router and the main nav footer layout
import Router from 'svelte-spa-router'
import Layout from './Layout/Layout.svelte'
import Test from './Test/Test.svelte'


// Footer components and routes
import Gdpr from './Others/Gdpr.svelte'
import Cookies from './Others/Cookies.svelte'
import Terms from './Others/Terms.svelte'
import Contact from './Others/Contact.svelte'

const footer_routes = {
    '/politica-de-confidentilitate':Gdpr,
    '/politica-cookies': Cookies,
    '/termeni-si-conditii': Terms,
    '/sugestii-si-reclamatii': Contact
}

// Main components and routes
import Landing from './Landing/Landing.svelte'
import NotFound from './Others/NotFound.svelte'
import Account from './Account/Account.svelte'

const routes = {
    "/test": Test,
    
    "/": Landing,
    "/cont": Account,

    ...footer_routes,
    "*": NotFound
}



// Add Sveltefire and Firebase to the mix maybe
// import { FirebaseApp, User, Doc, Collection } from 'sveltefire'

import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'


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


window.onload = () => {
    firebase.initializeApp(firebaseConfig)   
    const db = firebase.firestore()
    const auth = firebase.auth()
    
}

</script>


<Layout>
    <Router {routes}/>
</Layout>
