<script context="module">
    import DeviceDetector from "svelte-device-detector";
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
                        <img class="card-img-top" src="images/interior_washing/6.jpg" alt="Article">
                        <div class="card-body">
                            <h5 class="card-title">Nettoyage de l'intérieur</h5>
                            <p class="card-text card-article-short">Nous partageons avec vous la "remise à neuf" de l'intérieur de notre 205. Il y avait du travail...</p>
                            <div class="row mx-auto d-block">
                                <a sveltekit:prefetch href="/articles/interior-car-washing" class="btn card-article-btn">Lire</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm">
                    <!-- CARTE ICI-->
                </div>
                <div class="col-sm">
                    <!-- CARTE ICI-->
                </div>
            </div>

            <div class="row">
                <div class="col-sm">
                    <!-- CARTE ICI-->
                </div>
                <div class="col-sm">
                    <!-- CARTE ICI-->
                </div>
                <div class="col-sm">
                    <!-- CARTE ICI-->
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
                    <a sveltekit:prefetch href="/articles/testing-template" class="btn card-article-btn">Lire</a>
                </div>
            </div>
            -->

            <div class="card card-article" style="width: 20rem;">
                <img class="card-img-top" src="images/interior_washing/6.jpg" alt="Article">
                <div class="card-body">
                    <h5 class="card-title">Nettoyage de l'intérieur</h5>
                    <p class="card-text card-article-short">Nous partageons avec vous la "remise à neuf" de l'intérieur de notre 205. Il y avait du travail...</p>
                    <div class="row mx-auto d-block">
                        <a sveltekit:prefetch href="/articles/interior-car-washing" class="btn card-article-btn">Lire</a>
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