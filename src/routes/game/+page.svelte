<script lang="ts">
	import { game } from '$lib/store.svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import PlayerScoreBox from './PlayerScoreBox.svelte';
	import { fly } from 'svelte/transition';

	$effect(() => {
		if (game.players.length === 0) {
			goto('/roster');
		}
	});

	$inspect(game.players.map((p) => p.getTotalScore()));

	$effect(() => {
		game.setCurrentHole($page.url.searchParams.get('hole') || '1');
	});
</script>

{#key game.currentHole}
	<div in:fly={{ x: 100 }}>
		<h1>Hole <sup>#</sup>{game.currentHole}</h1>

		{#each game.players as player, i}
			<PlayerScoreBox {player} {i} currentHole={game.currentHole} />
		{/each}

		<a href="/game?hole={game.currentHole + 1}" class="btn mt-16 w-full text-2xl">Next Hole</a>
	</div>
{/key}
