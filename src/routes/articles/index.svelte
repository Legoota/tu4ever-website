<script context="module">
    import DeviceDetector from "svelte-device-detector";
    let miniatureNettoyage = "images/interior_washing/miniature.jpg"
    let miniatureJantes = "images/wheels_repair/miniature.jpg"
    let miniatureFreins = "images/brakes_replacement/miniature.jpg"
    let miniatureBumper = "images/bumper_supports/miniature.jpg";
    let miniatureRoofrack = "images/roofrack/miniature.jpg";
</script>

<svelte:head>
	<title>Articles - TU4EVER</title>
</svelte:head>

<div class="content">
    <h1>Articles disponibles</h1>
    <br />
    <br />

    <DeviceDetector showInDevice="desktop">
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <div class="card card-article" style="width: 20rem;">
                        <img class="card-img-top" src="{miniatureNettoyage}" alt="Intérieur">
                        <div class="card-body">
                            <h5 class="card-title">Nettoyage de l'intérieur</h5>
                            <p class="card-text card-article-short">Nous partageons avec vous la "remise à neuf" de l'intérieur de notre 205. Il y avait du travail...</p>
                            <div class="row mx-auto d-block">
                                <a sveltekit:prefetch href="/articles/interior-car-washing/" class="btn card-article-btn">Lire</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card card-article" style="width: 20rem;">
                        <img class="card-img-top" src="{miniatureJantes}" alt="Jantes">
                        <div class="card-body">
                            <h5 class="card-title">Réfection des jantes</h5>
                            <p class="card-text card-article-short">Nous avons restauré des jantes de 205 GTI 1.6 à la maison, et nous vous expliquons les différentes étapes.</p>
                            <div class="row mx-auto d-block">
                                <a sveltekit:prefetch href="/articles/wheels-repair/" class="btn card-article-btn">Lire</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card card-article" style="width: 20rem;">
                        <img class="card-img-top" src="{miniatureFreins}" alt="Brakes">
                        <div class="card-body">
                            <h5 class="card-title">Remplacement des freins</h5>
                            <p class="card-text card-article-short">Nous avons enfin remplacé les freins avant et arrières de notre Peugeot 205. Il était temps...</p>
                            <div class="row mx-auto d-block">
                                <a sveltekit:prefetch href="/articles/brakes-replacement/" class="btn card-article-btn">Lire</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm">
                    <div class="card card-article" style="width: 20rem;">
                        <img class="card-img-top" src="{miniatureBumper}" alt="Bumper supports">
                        <div class="card-body">
                            <h5 class="card-title">Maintien des parechocs</h5>
                            <p class="card-text card-article-short">Nous avons refabriqué à la maison des pièces de support des parechocs avant et arrière.</p>
                            <div class="row mx-auto d-block">
                                <a sveltekit:prefetch href="/articles/bumper-supports/" class="btn card-article-btn">Lire</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <!-- CARTE ICI-->
                </div>
                <div class="col-sm">
                    <div class="card card-article" style="width: 20rem;">
                        <img class="card-img-top" src="{miniatureRoofrack}" alt="Galerie de toit">
                        <div class="card-body">
                            <h5 class="card-title">Galerie de toit</h5>
                            <p class="card-text card-article-short">Nous avons conçu notre galerie de toit sur mesure en inox pour transporter nos affaires.</p>
                            <div class="row mx-auto d-block">
                                <a sveltekit:prefetch href="/articles/roofrack/" class="btn card-article-btn">Lire</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </DeviceDetector>

    <DeviceDetector showInDevice="mobile">
        <div class="row justify-content-center">
            <!--
            <div class="card card-article mobile-card" style="width: 80%;">
                <img class="card-img-top" src="images/205-neige.jpg" alt="Article">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text card-article-short">Informations de base</p>
                    <div class="row mx-auto d-block">
                        <a sveltekit:prefetch href="/articles/testing-template" class="btn card-article-btn">Lire</a>
                    </div>
                </div>
            </div>
            -->

            <div class="card card-article mobile-card" style="width: 80%;">
                <img class="card-img-top" src="{miniatureNettoyage}" alt="Intérieur">
                <div class="card-body">
                    <h5 class="card-title">Nettoyage de l'intérieur</h5>
                    <p class="card-text card-article-short">Nous partageons avec vous la "remise à neuf" de l'intérieur de notre 205. Il y avait du travail...</p>
                    <div class="row mx-auto d-block">
                        <a sveltekit:prefetch href="/articles/interior-car-washing/" class="btn card-article-btn">Lire</a>
                    </div>
                </div>
            </div>

            <div class="card card-article mobile-card" style="width: 80%;">
                <img class="card-img-top" src="{miniatureJantes}" alt="Jantes">
                <div class="card-body">
                    <h5 class="card-title">Réfection des jantes</h5>
                    <p class="card-text card-article-short">Nous avons restauré des jantes de 205 GTI 1.6 à la maison, et nous vous expliquons les différentes étapes.</p>
                    <div class="row mx-auto d-block">
                        <a sveltekit:prefetch href="/articles/wheels-repair/" class="btn card-article-btn">Lire</a>
                    </div>
                </div>
            </div>

            <div class="card card-article mobile-card" style="width: 80%;">
                <img class="card-img-top" src="{miniatureFreins}" alt="Brakes">
                <div class="card-body">
                    <h5 class="card-title">Remplacement des freins</h5>
                    <p class="card-text card-article-short">Nous avons enfin remplacé les freins avant et arrière de notre Peugeot 205. Il était temps...</p>
                    <div class="row mx-auto d-block">
                        <a sveltekit:prefetch href="/articles/brakes-replacement/" class="btn card-article-btn">Lire</a>
                    </div>
                </div>
            </div>

            <div class="card card-article mobile-card" style="width: 80%;">
                <img class="card-img-top" src="{miniatureBumper}" alt="Bumper supports">
                <div class="card-body">
                    <h5 class="card-title">Maintien des parechocs</h5>
                    <p class="card-text card-article-short">Nous avons refabriqué à la maison des pièces de support des parechocs avant et arrière.</p>
                    <div class="row mx-auto d-block">
                        <a sveltekit:prefetch href="/articles/bumper-supports/" class="btn card-article-btn">Lire</a>
                    </div>
                </div>
            </div>

            <div class="card card-article mobile-card" style="width: 80%;">
                <img class="card-img-top" src="{miniatureRoofrack}" alt="Galerie de toit">
                <div class="card-body">
                    <h5 class="card-title">Galerie de toit</h5>
                    <p class="card-text card-article-short">Nous avons conçu notre galerie de toit sur mesure en inox pour transporter nos affaires.</p>
                    <div class="row mx-auto d-block">
                        <a sveltekit:prefetch href="/articles/roofrack/" class="btn card-article-btn">Lire</a>
                    </div>
                </div>
            </div>

            <!-- CARTE ICI-->
        </div>
    </DeviceDetector>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}

    .card-article {
        background-color: #787878;
        margin-bottom: 3rem;
    }

    .card-article-short {
        color: #202020;
    }

    .card-article-btn {
        background-color: var(--accent-color);
    }

    .mobile-card {
        padding-top: .7rem;
    }
</style>