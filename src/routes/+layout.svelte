<script>
	import { game } from '$lib/store.svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	let { children } = $props();

	onMount(() => {
		let loaded = game.loadGame();
	});
</script>

<main>
	{@render children()}
</main>

<style>
	main {
		margin-inline: auto;
		width: min(100% - 3.5rem, 450px);
	}
</style>
