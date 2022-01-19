<script>
	import { page } from '$app/stores';
	import DeviceDetector from "svelte-device-detector";
</script>

<header>
	<DeviceDetector showInDevice="desktop">
		<div class="corner"></div>

		<nav role="navigation">
			<svg viewBox="0 0 2 3" aria-hidden="true">
				<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
			</svg>
			<ul>
				<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Accueil</a></li>
				<li class:active={$page.path === '/presentation'}><a sveltekit:prefetch href="/presentation">Présentation</a></li>
				<li class:active={$page.path === '/articles'}><a sveltekit:prefetch href="/articles">Articles</a></li>
				<li class:active={$page.path === '/partenariats'}><a sveltekit:prefetch href="/partenariats">Partenariats</a></li>
				<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">A propos</a></li>
			</ul>
			<svg viewBox="0 0 2 3" aria-hidden="true">
				<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
			</svg>
		</nav>

		<div class="corner"></div>
	</DeviceDetector>
	
	<DeviceDetector showInDevice="mobile">
		<nav role="navigation" class="navbar-mobile">
			<ul>
				<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Accueil</a></li>
				<li class:active={$page.path === '/presentation'}><a sveltekit:prefetch href="/presentation">Présentation</a></li>
				<li class:active={$page.path === '/articles'}><a sveltekit:prefetch href="/articles">Articles</a></li>
				<li class:active={$page.path === '/partenariats'}><a sveltekit:prefetch href="/partenariats">Partenariats</a></li>
				<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">A propos</a></li>
			</ul>
		</nav>
	</DeviceDetector>

</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--secondary-color);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--secondary-color);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}

	.navbar-mobile {
		overflow: auto;
		padding-left: 6em;
	}
</style>
