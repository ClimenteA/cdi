<script>
	
import Router from 'svelte-spa-router'

import Navbar from "./components/Navbar.svelte"
import Footer from "./components/Footer.svelte"
import Landing from "./pages/Landing.svelte"
import Cookies from './pages/Cookies.svelte';
import Gdpr from './pages/Gdpr.svelte';
import Terms from './pages/Terms.svelte';
import Contact from './pages/Contact.svelte';
import AdaugaCamera from './pages/AdaugaCamera.svelte';
import Cont from './pages/Cont.svelte';
import NotFound from './pages/NotFound.svelte';
import Camere from './pages/Camere.svelte';

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



