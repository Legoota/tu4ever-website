<script context="module">
	import Peugeot from "$lib/Peugeot/Peugeot.svelte";
	import DeviceDetector from "svelte-device-detector";
	export const prerender = true;

</script>

<svelte:head>
	<title>Easter egg - TU4EVER</title>
</svelte:head>

<div class="content">

    <h1>Page secrète !</h1>
    <br />
    <br />

    <DeviceDetector showInDevice="desktop">
        <div class="d-flex justify-content-center">
            <Peugeot/>
        </div>

        <br />
        <br />

        <div class="d-flex justify-content-center">
            <p class="paragraphe">
                Félicitations, vous avez trouvé l'easter egg du site !
            </p>
        </div>

        <div class="d-flex justify-content-center">
            <p class="paragraphe">
                Trouvez la durée depuis laquelle cette page est en ligne et envoyez-nous le nombre de jours sur notre Instagram pour gagner un sticker TU4EVER 😉
            </p>
        </div>

    </DeviceDetector>

    <DeviceDetector showInDevice="mobile">
        <div class="d-flex justify-content-center">
            <p class="paragraphe">
                Félicitations, vous avez trouvé l'easter egg du site !
            </p>
        </div>
        <div class="d-flex justify-content-center">
            <p class="paragraphe">
                Rendez-vous sur un ordinateur pour voir la 205 en 3D 😉
            </p>
        </div>
    </DeviceDetector>

</div>

<style>
    .paragraphe {
        color: white;
    }
</style>