<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<!--<Header />-->

<main>
	<slot />
</main>

<footer>
	Made by the TU4EVER team
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 30px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 30px 0;
		}
	}
</style>
