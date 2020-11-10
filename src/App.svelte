<script>
	
import Router from 'svelte-spa-router'

import Navbar from "./NavBar/Navbar.svelte"
import Footer from "./Footer/Footer.svelte"
import Landing from "./Pages/Landing.svelte"
import Cookies from './Pages/Cookies.svelte'
import Gdpr from './Pages/Gdpr.svelte'
import Terms from './Pages/Terms.svelte'
import Contact from './Pages/Contact.svelte'
import AdaugaCamera from './Pages/AdaugaCamera.svelte'
import Cont from './Pages/Cont.svelte'
import NotFound from './Pages/NotFound.svelte'
import Camere from './Pages/Camere.svelte'


const routes = {
	"/": Landing,
	"/adauga-camera": AdaugaCamera,
	"/cont": Cont,
	"/politica-cookies": Cookies,
	"/politica-de-confidentilitate": Gdpr,
	"/termeni-si-conditii": Terms,
	"/sugestii-si-reclamatii": Contact,
	"/camere-libere": Camere,
	"*": NotFound
}

</script>


<Navbar/>
<main class="min-h-screen">
	<Router {routes}/>
</main>
<Footer/>



