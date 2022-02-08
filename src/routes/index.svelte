<script context="module">
	import Peugeot from "$lib/Peugeot/Peugeot.svelte";
	import DeviceDetector from "svelte-device-detector";
	//import { Toast } from '$lib/bootstrap/bootstrap.esm.min.js';
	export const prerender = true;

</script>


<svelte:head>
	<title>Accueil - TU4EVER</title>
</svelte:head>

<div>
	<div class="container">
		<DeviceDetector showInDevice="desktop">
			<div class="row">
				<div class="col">
					<img src="logo-white.png" class="img-fluid img-fit" alt="TU4EVER">
				</div>
				<div class="col align-self-center">
					<p class="paragraphe">
						TU4EVER est une équipe composée de deux personnes qui a pour objectif la préparation et la participation à des raids en Peugeot 205.
						<br/>
						L'équipe a été fondée en 2021 et s'engagera cette année dans l'aventure Alpinaraid du 3 au 8 juillet 2022 avant de poursuivre vers d'autres raids à vocation humanitaire les années suivantes.
						<br/>
						&nbsp;
						<br/>
						L'origine du nom TU4EVER provient du code moteur <strong>TU</strong> équipant un grand nombre de véhicules des marques Peugeot et Citroën (PSA), y compris notre Peugeot 205 1,4L.
					</p>
				</div>
			</div>
		</DeviceDetector>
		<DeviceDetector showInDevice="mobile">
			<div>
				<p class="paragraphe">
					TU4EVER est une équipe composée de deux personnes qui a pour objectif la préparation et la participation à des raids en Peugeot 205.
					<br/>
					L'équipe a été fondée en 2021 et s'engagera cette année dans l'aventure Alpinaraid du 3 au 8 juillet 2022 avant de poursuivre vers d'autres raids à vocation humanitaire les années suivantes.
					<br/>
					&nbsp;
					<br/>
					L'origine du nom TU4EVER provient du code moteur <strong>TU</strong> équipant un grand nombre de véhicules des marques Peugeot et Citroën (PSA), y compris notre Peugeot 205 1,4L.
				</p>
				<img src="logo-white.png" class="img-fluid img-fit" alt="TU4EVER">
			</div>
		</DeviceDetector>
	</div>


	<div class="container">
		<DeviceDetector showInDevice="desktop">
			<div class="row">
				<div class="col align-self-center">
					<p class="paragraphe">
						Vous trouverez sur ce site différentes pages :	
					</p>
					<ul>
						<li>
							Une page de <a sveltekit:prefetch href="/presentation">Présentation</a> du projet et de l'équipe.
						</li>
						<li>
							Une page <a sveltekit:prefetch href="/articles">Articles</a> répertoriant la préparation du véhicule ainsi que la semaine de raid.
						</li>
						<li>
							Un espace <a sveltekit:prefetch href="/partenariats">Partenariats</a> dédié aux sponsors de l'aventure.
						</li>
					</ul>
				</div>
				<div class="col">
					<img src="images/alps.jpg" class="img-fluid img-fit" alt="Car">
				</div>
			</div>
		</DeviceDetector>
		<DeviceDetector showInDevice="mobile">
			<div>
				<p class="paragraphe">
					Vous trouverez sur ce site différentes pages :	
				</p>
				<ul>
					<li>
						Une page de <a sveltekit:prefetch href="/presentation">Présentation</a> du projet et de l'équipe.
					</li>
					<li>
						Une page <a sveltekit:prefetch href="/articles">Articles</a> répertoriant la préparation du véhicule ainsi que la semaine de raid.
					</li>
					<li>
						Un espace <a sveltekit:prefetch href="/partenariats">Partenariats</a> dédié aux sponsors de l'aventure.
					</li>
				</ul>
				<img src="images/alps.jpg" class="img-fluid img-fit" alt="Car">
			</div>
		</DeviceDetector>
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

	.paragraphe {
		color: white;
	}

	.img-fit {
		object-fit: contain;
	}

</style>
