<script lang="ts">
	import { game } from '$lib/store.svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import PlayerScoreBox from './PlayerScoreBox.svelte';
	import { fly } from 'svelte/transition';
	import Dialog from '$lib/components/Dialog.svelte';

	// $effect(() => {
	// 	if (game.players.length === 0) {
	// 		goto('/roster');
	// 	}
	// });

	// $inspect(game.players.map((p) => p.getTotalScore()));

	$effect(() => {
		game.setCurrentHole(page.url.searchParams.get('hole') || '1');
	});

	let resetDialogOpen: HTMLDialogElement = $state()!;

	function resetGame() {
		game.resetGame();
		goto('/');
	}
</script>

{#key game.currentHole}
	<h1 in:fly={{ x: 100 }}>Hole <sup>#</sup>{game.currentHole}</h1>
{/key}
{#each game.players as player, i}
	<PlayerScoreBox {player} {i} currentHole={game.currentHole} />
{/each}

<div class="mt-16 flex gap-4">
	<a
		href="/game?hole={game.currentHole - 1}"
		class:pointer-events-none={game.currentHole === 1}
		class:opacity-50={game.currentHole === 1}
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
	{#if game.currentHole < game.totalHoles}
		<a
			href="/game?hole={game.currentHole + 1}"
			class="btn flex w-full justify-center gap-1 text-2xl"
			>Next Hole<svg
				xmlns="http://www.w3.org/2000/svg"
				width="30"
				height="30"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="3"
				stroke-linecap="butt"
				stroke-linejoin="arcs"
				class="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
			></a
		>
	{:else}
		<a href="/final" class="btn w-full text-2xl">Finish Game</a>
	{/if}
</div>

<div class="mt-16 flex justify-center gap-4">
	<button class="text-sm text-green-200 underline" onclick={() => resetDialogOpen.showModal()}
		>Reset Game</button
	>
</div>

<Dialog bind:dialog={resetDialogOpen}>
	<p>Are you sure you want to reset the game?</p>
	<div class="mt-7 flex gap-4">
		<button class="btn w-full bg-red-200 text-red-900" onclick={() => resetDialogOpen.close()}
			>Cancel</button
		>
		<button class="btn w-full" onclick={resetGame}>Reset Game</button>
	</div>
</Dialog>
