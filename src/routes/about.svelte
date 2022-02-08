<script context="module">
	import Instagram from "svelte-bootstrap-icons/lib/Instagram";
    import Twitter from "svelte-bootstrap-icons/lib/Twitter";
    import Envelope from "svelte-bootstrap-icons/lib/Envelope";
    import Github from "svelte-bootstrap-icons/lib/Github";
</script>

<svelte:head>
	<title>A propos</title>
</svelte:head>

<div class="content">
	<h1>A propos de l'équipe TU4EVER</h1>

	<p class="paragraphe">
		Nous sommes les deux membres de l'association TU4EVER, qui a pour objectif la préparation et la participation à des raids automobiles en Peugeot 205.
	</p>
	<br/>

    <h1>A propos du site</h1>

	<p class="paragraphe">
		Ce site est entièrement réalisé par les membres de l'équipe, en guise de projet personnel. Etant ingénieurs en informatique, nous avons trouvé logique de réaliser nous même notre propre support de communication.
	</p>
    <p class="paragraphe">
        Afin de réaliser ce site, nous avons utilisé le framework <a target="_blank" href="https://kit.svelte.dev/">Svelte.js</a>, et nous l'hébergeons sur Github Pages.
    </p>
    <div class="d-flex justify-content-center">
        <a target="_blank" class="link" href="https://github.com/Legoota/tu4ever-website"><Github /> Github</a>
    </div>
	<br/>

	<h1>Nous contacter</h1>

	<p class="paragraphe">
		Vous pouvez nous joindre aisément en utilisant un des réseaux sociaux ci-dessous, ou bien en nous envoyant un mail :
	</p>
    <div class="d-flex justify-content-center">
        <a target="_blank" class="link" href="https://www.instagram.com/tu4ever_205/"><Instagram /> Instagram</a>
        <a target="_blank" class="link" href="https://twitter.com/tu4ever_205"><Twitter /> Twitter</a>
        <a class="link" href="mailto:contact@tu4ever.fr"><Envelope /> Mail</a>
    </div>
    
	<br/>

	<h1>Alpinaraid 2022</h1>

	<p class="paragraphe">
		L’<a target="_blank" href="https://alpinaraid.fr/">Alpina Raid</a> est un raid touristique et culturel à la découverte des Alpes françaises et italiennes. À bord de Peugeot 205 trentenaires toutes décorées et préparées pour l’aventure, les équipages rallient le Mont-Blanc à la mer Méditerranée. Une aventure de 800 kilomètres en 6 jours à travers pas moins de 25 grands cols Alpins et plus de 25 000 mètres de dénivelé positif.
	</p>
	<p class="paragraphe">
		Cet événement se déroule du 3 au 8 juillet 2022.
	</p>
    <div class="d-flex justify-content-center">
        <img src="images/itineraire-alpina-22.jpg" class="img-fluid mx-auto img-fit" alt="Itinéraire">
    </div>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}

	.img-fit {
		object-fit: contain;
        -khtml-user-select: none;
        -o-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
	}

    .link {
        font-weight: 700;
        font-size: 1rem;
        text-transform: uppercase;
        text-decoration: none;
        margin-left: 1em;
        letter-spacing: 0.1em;
        color: var(--secondary-color);
        transition: color 0.2s linear;
    }

    .link:hover {
        margin-left: 1em;
        color: var(--accent-color);
    }

    .paragraphe {
		color: white;
	}
</style>
