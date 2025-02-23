<script lang="ts">
	import { goto } from '$app/navigation';
	import { game } from '$lib/store.svelte';
	import ScoreBox from './ScoreBox.svelte';

	function resetGame() {
		game.resetGame();
		goto('/');
	}
</script>

<h1 class="pt-10">Final Score</h1>
<ol>
	{#each game.rankPlayers() as player, index}
		<li>
			<ScoreBox {player} {index} />
		</li>
	{/each}
</ol>

<div class="mt-9 flex gap-4">
	<a
		href="/game?hole=9"
		class="btn flex items-center justify-center bg-green-600 text-green-100 hover:text-green-900"
		aria-label="Previous Hole"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="30"
			height="30"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="3"
			stroke-linecap="butt"
			stroke-linejoin="arcs"
			class="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
		>
	</a>
	<button onclick={resetGame} class="btn flex w-full justify-center gap-1 text-2xl"
		>Reset Game</button
	>
</div>
