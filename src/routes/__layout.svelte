<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import Footer from "$lib/Footer.svelte";
</script>

<Header />

<main>
	<slot />
</main>

<div class="spacer"></div>
<Footer />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: auto;
		margin: 0 auto;
		box-sizing: border-box;
	}

	:global(.spacer) {
    	flex: 1;
  	}
</style>
