<script>
    
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



// Add Sveltefire and Firebase to the mix

import { FirebaseApp, User, Doc, Collection } from 'sveltefire'

import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/performance'
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

firebase.initializeApp(firebaseConfig)   

</script>


<FirebaseApp {firebase}>
    <Layout>
        <Router {routes}/>
    </Layout>
</FirebaseApp>
