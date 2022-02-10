<script context="module">
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

	<img src="images/205-neige.jpg" class="rounded-circle w-50 mx-auto d-block" alt="Cinque Terre">

    <br/>

    <h1>L'équipage</h1> 

	<div class="container">
		<div class="row">
			<div class="col-sm">
				<br/>
				<!--<img src="#" class="rounded-circle mx-auto d-block" alt="Cinque Terre">
				<br/>-->
				<p class="paragraphe">
					Je m'appelle Léo B, originaire du Jura et grand amoureux de la montagne dont j'affectionne particulièrement les paysages.
				</p>
				<p class="paragraphe">
					Amateur en mécanique, motard et passionné de voitures anciennes, je roule quotidiennement avec le pendant de la Peugeot 205, incompréhensiblement resté en second plan, une Citroën AX de 1991.
					Je suis également adepte de VTT, randonnées et voyages.
				</p>
				<p class="paragraphe">
					Actuellement en dernière année d'une école d'ingénieur informatique en alternance dans laquelle j'ai fait la connaissance de Léo K et où ce projet de raid est né.
				</p>
			</div>
			<div class="col-sm">
				<br/>
				<!--<img src="#" class="rounded-circle mx-auto d-block" alt="Cinque Terre">
				<br/>-->
				<p class="paragraphe">
					Je suis Léo K, né en Alsace, j'ai toujours apprécié les différents panoramas que cette région peut offrir. Je suis actuellement en dernière année d'école d'ingénieur dans le domaine
					informatique, dans laquelle j'ai rencontré Léo B et nous avons débuté ce projet de raid. 
				</p>
				<p class="paragraphe">
					J'affectionne particulièrement piloter des drones, qu'ils soient stabilisés ou non (FPV) et
					toucher à l'électronique (HiFi vintage, construction de claviers mécaniques et drones).
				</p>
				<p class="paragraphe">
					J'apprécie également la mécanique automobile, domaine dans lequel je souhaiterai progresser et apprendre de nouvelles choses.
				</p>
		  	</div>
		</div>
	  </div>
	
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}

    .paragraphe {
		color: white;
	}
</style>