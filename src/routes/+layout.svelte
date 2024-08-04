<script>
	import '../app.css';
	let { children } = $props();
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
