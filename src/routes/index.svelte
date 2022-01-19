<script context="module">
	import Peugeot from "$lib/Peugeot/Peugeot.svelte";
	//import { Toast } from '$lib/bootstrap/bootstrap.esm.min.js';
	export const prerender = true;

</script>


<svelte:head>
	<title>TU4EVER</title>
</svelte:head>

<div>
	<div class="container">
		<div class="row">
			<div class="col">
				<img src="logo-white.png" class="img-fluid img-fit" alt="TU4EVER">
			</div>
			<div class="col align-self-center">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus exercitationem laborum molestias culpa aut provident recusandae ad repellat autem! Sequi iusto aut corporis labore molestias placeat voluptatem necessitatibus voluptates maiores?
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores perspiciatis perferendis quae enim libero quibusdam. Nesciunt beatae sed reprehenderit assumenda recusandae veniam aspernatur velit, ipsa laboriosam cum quia ipsum!
			</div>
		</div>
	</div>


	<div class="container">
		<div class="row">
			<div class="col align-self-center">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem maxime cupiditate atque omnis eos nesciunt ut voluptate dolore, dolor, sequi suscipit fuga rerum voluptas ipsum ipsam fugit, cumque ad doloribus?
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla necessitatibus dolores, accusantium aperiam delectus fuga repudiandae, quos voluptas aut voluptatum eligendi minus unde porro laboriosam voluptatem hic labore dolore dicta.
			</div>
			<div class="col">
				<img src="images/alps.jpg" class="img-fluid img-fit" alt="Car">
			</div>
		</div>
	</div>
	
	<!--
	<h1>Page en construction !</h1>

	<object width="700" height="700" class="" data="logo.svg" title="Logo" type="image/svg+xml">
		Logo TU4EVER
	</object>
-->
	<!--<Peugeot/>-->

</div>
<style>
	div {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		color: white;
	}

	.img-fit {
		object-fit: contain;
	}

</style>
