<script context="module">
</script>

<svelte:head>
	<title>Changement de l'alternateur - TU4EVER</title>
</svelte:head>

<div class="content">
	<h1>Changement de l'alternateur</h1>

	<p class="paragraphe">
        Afin d'éviter les pannes fréquentes lors des raid, nous avons effectué le remplacement de notre alternateur ainsi que la courroie d'accessoires. Nous avons également installé une batterie neuve, des prises allume-cigare et USB supplémentaires et un voltmètre pour surveiller la tension de la batterie.
	</p>

    <h2>Remplacement de l'alternateur</h2>

    <p class="paragraphe">
        Le changement de l'alternateur est une étape assez simple à réaliser. Nous avons procédé comme ceci :
    </p>

    <ol class="list">
        <li>Commencer par débrancher la cosse négative (-) de la batterie. Dans notre cas, nous avons un coupe-circuit rapide, ce qui nous permet de nous affranchir de clés pour cette étape.</li>
        <li>Débrancher les deux câbles connectés à l'ancien alternateur. Le câble de petite section du milieu sert pour le temoin de charge tandis que le plus gros rouge sert pour le chargement de la batterie. </li>
        <li>Déserrer les vis de fixation de l'alternateur pour lui pemettre le basculement.</li>
        <li>Dévisser la vis de tension jusqu'à ce que la courroie puisse être déposée.</li>
        <li>Déposer ensuite l'ancien alternateur.</li>
    </ol>

    <p class="paragraphe">
        Pour le remontage du nouvel alternateur, il suffit de procéder dans le sens inverse.
    </p>

    <span class="badge badge-quartiary">Conseil</span>

    <p class="paragraphe">
        Dans notre cas, la préconisation constructeur pour la tension de la courroie est un déplacement d'environ 6mm lors de l'appui sur la partie supérieure.
    </p>

    <p class="paragraphe">
        Voici quelques images du nouvel alternateur en place.
    </p>

    <div class="text-center">
        <figure class="figure">
            <img loading="lazy" src="/images/alternator_replacement/alternator-replacement-1.jpg" class="figure-img img-fluid rounded" style="width: 80%;" alt="Alternator #1">
            <figcaption class="figure-caption text-right text-light">Nouvel alternateur et courroie, vue du dessus.</figcaption>
        </figure>
    </div>

    <div class="text-center">
        <figure class="figure">
            <img loading="lazy" src="/images/alternator_replacement/alternator-replacement-2.jpg" class="figure-img img-fluid rounded" style="width: 80%;" alt="Alternator #2">
            <figcaption class="figure-caption text-right text-light">Nouvel alternateur et courroie, vue du dessous.</figcaption>
        </figure>
    </div>

    <p class="paragraphe">
        Lors du démontage du câble de charge, nous avons cassé la cosse avec manchon à sertir qui n'était pas en bon état et nous n'avions pas cette pièce sous la main. Dans ce cas, la solution est de pincer fort le brin de câble entre deux rondelles (visible sur la photo ci-dessus).
    </p>

    <h3>Références de pièces instalées</h3>

    <ul class="list">
        <li>Alternateur : HELLA - 8EL 012 430-101</li>
        <li>Courroie d'accessoires : <a target="_blank" href="https://www.gates.com/fr/fr/search.p.8532-000000-000000.v.8532-16261.html">Courroie Gates 6261MC AVX10 x 713</a></li>
    </ul>

    <h2>Ajout des accessoires</h2>

	<div class="container">
		<div class="row">
			<div class="col-sm">
                <h3>Le voltmètre</h3>
				<p class="paragraphe">
                    Nous avons câblé le voltmètre sur le +12V après contact. Il nous permet de connaitre l'état de charge de la batterie avant le démarage du moteur mais aussi de vérifier le bon rechargement de la batterie lorsqu'on roule et ce, même quand nous utiliserons les équipements électriques à bord.    
                </p>
                <br/>
                <img loading="lazy" src="/images/alternator_replacement/alternator-replacement-4.jpg" class="img-fluid rounded mx-auto d-block" alt="Voltmeter">
			</div>
			<div class="col-sm">
                <h3>Les prises de rechargement</h3>
                <p class="paragraphe">
                    Afin de  pouvoir recharger tout au long de l'aventure tous nos équipements électriques comme le GPS, les smartphones, les lampes, le drone et les caméras, nous avons décider d'ajouter une deuxième prise allume-cigare en plus que celle d'origine. Nous avons également ajouté 2 prises USB en 5V, 2,1A.
                </p>
				<img loading="lazy" src="/images/alternator_replacement/alternator-replacement-3.jpg" class="img-fluid rounded mx-auto d-block" alt="USB and cigarette lighter sockets">
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

    h2 {
        font-size: x-large;
        text-align: left;
    }

    h3 {
        font-size: large;
        text-align: left;
        color: var(--accent-color);
    }

    .list {
        color: white;
    }

    .badge-quartiary {
        background-color: var(--quartiary-color);
    }

    .figure-caption {
        font-style: italic;
    }
</style>