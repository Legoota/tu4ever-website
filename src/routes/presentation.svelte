<script context="module">
	import Instagram from "svelte-bootstrap-icons/lib/Instagram";
    import Twitter from "svelte-bootstrap-icons/lib/Twitter";
    import Envelope from "svelte-bootstrap-icons/lib/Envelope";
    import Github from "svelte-bootstrap-icons/lib/Github";
</script>

<svelte:head>
	<title>Présentation - TU4EVER</title>
</svelte:head>

<div class="content">
	<h1>L'association</h1>

	<p class="paragraphe">
		Nous avons décidé de fonder l'association TU4EVER suite à une envie commune de découvrir le monde de la mécanique automobile et de participer à des raids.
        Notre premier objectif est la participation à l'Alpinaraid et nous envisageons les années suivantes de pousuivre sur d'autres raids à vocation humanitaire.
	</p>
    <br/>
    <h1>Le projet</h1>

	<p class="paragraphe">
		Pour réaliser cet objectif, nous nous sommes lancés dans le projet TU4EVER afin d'acquérir une voiture, de la restaurer et de la préparer par nos soins.
        Nous avons donc acheté une Peugeot 205 Génération de 1997, motorisée par l'emblématique bloc TU3M de PSA.
	</p>

    <p class="paragraphe">
        Pour participer à l'Alpinaraid, notre voiture doit passer un certain nombre de vérifications techniques que nous allons réaliser et partager avec vous sur notre compte <a target="_blank" href="https://www.instagram.com/tu4ever_205/">Instagram</a> et dans la rubrique <a sveltekit:prefetch href="/articles">Articles</a> de ce site.
        De plus, nous avons prévu certaines modifications d'ordre esthétique, ainsi que des travaux de restauration que nous documenterons également.
    </p>

    <br/>

    <h1>L'équipage</h1> 

	<p class="paragraphe">
		
	</p>
	
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

    .paragraphe {
		color: white;
	}
</style>