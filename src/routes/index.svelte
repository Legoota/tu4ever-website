<script context="module">
	import DeviceDetector from "svelte-device-detector";
	export const prerender = true;
	import './sitemap.xml.js';

</script>


<svelte:head>
	<title>Accueil - TU4EVER</title>
</svelte:head>

<div>
	<div class="container">
		<DeviceDetector showInDevice="desktop">
			<div class="row">
				<div class="col">
					<img src="logo-white.png" class="img-fluid rounded img-fit" alt="TU4EVER">
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
							Une page de <a sveltekit:prefetch href="/presentation/">Présentation</a> du projet et de l'équipe.
						</li>
						<li>
							Une page <a sveltekit:prefetch href="/articles/">Articles</a> répertoriant la préparation du véhicule ainsi que la semaine de raid.
						</li>
						<li>
							Un espace <a sveltekit:prefetch href="/partenariats/">Partenariats</a> dédié aux sponsors de l'aventure.
						</li>
					</ul>
				</div>
				<div class="col container-youtube">
					<a class="youtube-link-anchor" href="https://www.youtube.com/watch?v=V7fG8VPShmg" target="_blank">
						<img src="images/thumbnail.png" class="img-fluid rounded img-fit youtube-link" alt="Vidéo récap youtube">
						<div class="centered">
							Voir sur Youtube
						</div>
					</a>
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
						Une page de <a sveltekit:prefetch href="/presentation/">Présentation</a> du projet et de l'équipe.
					</li>
					<li>
						Une page <a sveltekit:prefetch href="/articles/">Articles</a> répertoriant la préparation du véhicule ainsi que la semaine de raid.
					</li>
					<li>
						Un espace <a sveltekit:prefetch href="/partenariats/">Partenariats</a> dédié aux sponsors de l'aventure.
					</li>
				</ul>
				<a class="youtube-link-anchor" href="https://www.youtube.com/watch?v=V7fG8VPShmg" target="_blank">
					<img src="images/thumbnail.png" class="img-fluid rounded img-fit youtube-link" alt="Vidéo récap youtube">
				</a>
			</div>
		</DeviceDetector>
	</div>

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

	.container-youtube {
		position: relative;
	}

	.container-youtube:hover {
		transform: scale(1.01);
		cursor: pointer;
		transition: all .2s ease-in-out;
	}

	.youtube-link {
		box-shadow: 2px 2px 5px black;
		transition: all .2s ease-in-out;
	}

	.youtube-link:hover {
		box-shadow: 4px 4px 5px black;
		transition: all .2s ease-in-out;
	}

	.centered {
		position: absolute;
		opacity: 0;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
		background-color: rgb(255, 0, 0);
		padding: 1em;
		border-radius: 2em;
		font-size: larger;
		transition: all .2s ease-in-out;
	}

	.container-youtube:hover .centered {
		opacity: 1;
		transition: all .2s ease-in-out;
	}



</style>
