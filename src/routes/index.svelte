<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>TU4EVER</title>
</svelte:head>

<section>
	<h1>Page en construction !</h1>

	<img class="logo" src="logo.svg" alt="Welcome" />

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	.logo {
		width: 75%;
		height: 75%;
    	-webkit-user-select: none;
       	-moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
	}
	.logo::selection {
		background: none;
	}

</style>
