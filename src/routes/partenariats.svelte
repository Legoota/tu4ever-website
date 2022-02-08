<script context="module">
	import Instagram from "svelte-bootstrap-icons/lib/Instagram";
    import Twitter from "svelte-bootstrap-icons/lib/Twitter";
    import Envelope from "svelte-bootstrap-icons/lib/Envelope";
    import Github from "svelte-bootstrap-icons/lib/Github";
</script>

<svelte:head>
	<title>Partenariats - TU4EVER</title>
</svelte:head>

<div class="content">
	<h1>Partenariats</h1>

	<p class="paragraphe">
		Notre association est toujours à la recherche de nouveaux partenaires ! Si vous êtes une entreprise ou un particulier et que vous souhaitez nous soutenir dans ce projet, vous pouvez le faire de plusieurs manières :
	</p>
	
    <ul>
        <li>Financements</li>
        <li>Don de materiel</li>
        <li>Compétences techniques diverses</li>
        <li>Partage du site et de nos réseaux sociaux</li>
    </ul>
    <br/>
    <p class="paragraphe">
		Pour toutes questions ou demande de partenariats, vous pouvez nous contacter via notre compte <a target="_blank" href="https://www.instagram.com/tu4ever_205/">Instagram</a> ou directement à l'adresse <a href="mailto:partenariats@tu4ever.fr">partenariats@tu4ever.fr</a>. Nous serons ravis de collaborer avec vous !
	</p>
    <br/>
    <p class="paragraphe">
		En contrepartie de votre participation, nous pouvons vous offrir de la visibilité sur notre site, sur notre Instagram et directement sur la voiture en apposant votre sticker. Nous pouvons aussi vous faire cadeau de produits d'Alsace et du Jura.
	</p>

    <!--<h1>Nos partenaires</h1>-->

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

    div {
        color: white;
    }
</style>
