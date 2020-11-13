<script>
// https://firebase.google.com/docs/samples
// https://github.com/firebase/quickstart-js
// https://codelabs.developers.google.com/firebase-emulator#0
// Rules
// https://github.com/u12206050/firestore-rules-starter
// https://github.com/OleksiiBrylin/firestore-rules/blob/master/firestore.rules

// Icons
// https://tablericons.com/

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


</script>


<Layout>
    <Router {routes}/>
</Layout>
