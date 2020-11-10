<script>
	
import Router from 'svelte-spa-router'

import Navbar from "./Pages/Navbar.svelte"
import Footer from "./Pages/Footer.svelte"

import Cookies from './Pages/Cookies.svelte'
import Gdpr from './Pages/Gdpr.svelte'
import Terms from './Pages/Terms.svelte'
import Contact from './Pages/Contact.svelte'
import NotFound from './Pages/NotFound.svelte'

import Landing from "./Landing/Landing.svelte"
import Cont from './Pages/Cont.svelte'
import AdaugaCamera from './Pages/AdaugaCamera.svelte'
import Camere from './Pages/Camere.svelte'

import Test from "./Test/Test.svelte"


const routes = {
	"/": Landing,
	"/adauga-camera": AdaugaCamera,
	"/cont": Cont,
	"/camere-libere": Camere,
	"/test": Test,
	"*": NotFound
}

</script>


<Navbar/>
<main class="min-h-screen">
	<Router {routes}/>
</main>
<Footer/>



