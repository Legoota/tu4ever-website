<script>
  import { onMount } from 'svelte';
  import { createScene } from "./scene";
  let el;
  onMount(() => {
    createScene(el)
  });
</script>

<canvas bind:this={el}></canvas>

<style>
  	canvas {
		height: 20em;
    /*outline: black 3px solid;*/
	}
</style>