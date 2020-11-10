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


const routes = {
    "/": Landing,
    ...footer_routes,

    "/test": Test,
    "*": NotFound
}

</script>


<Layout>
    <Router {routes}/>
</Layout>
