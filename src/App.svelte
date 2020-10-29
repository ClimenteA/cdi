<script>
	import Navbar from "./components/Navbar.svelte"
	import Hero from "./components/Hero.svelte"
	import Card from "./components/Card.svelte"
</script>


<Navbar/>
<Hero/>


<section class="gap-10 grid justify-center max-w-3xl md:grid-cols-2 md:mt-32 mt-16 mx-auto">

	<Card 
		title="Salveaza banuti" 
		image="./assets/img/money.svg" 
		text="Ramai cu mai multi bani in buzunar impartind chiria cu alti colegi/colege."
	/>

	<Card 
		title="Focus pe comunicare" 
		image="./assets/img/focus.svg" 
		text="Completeaza sectiunea “Despre mine” din profilul tau. Astfel, vei fi coleg doar cu cei care rezonezi."
	/>

	<Card 
		title="Gaseste usor" 
		image="./assets/img/findmap.svg" 
		text="Filtrele de cautare sunt optimizate astfel incat sa gasesti ce doresti mult mai usor."
	/>

	<Card 
		title="Anunturi active" 
		image="./assets/img/dot.svg" 
		text="Cele mai recente anunturi vor aparea in topul listei. Dupa o luna anunturile sunt automat sterse."
	/>

</section>
