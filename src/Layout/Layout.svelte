<script>

import Navbar from "./Navbar.svelte"
import Footer from "./Footer.svelte"


</script>



<Navbar/>
    <main class="min-h-screen">
        <slot></slot>
    </main>
<Footer/>


