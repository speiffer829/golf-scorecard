<script lang="ts">
	import { game } from '$lib/store.svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import PlayerScoreBox from './PlayerScoreBox.svelte';

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

<h1>Hole <sup>#</sup>{game.currentHole}</h1>

{#each game.players as player, i}
	<PlayerScoreBox {player} {i} currentHole={game.currentHole} />
{/each}

<a href="/game?hole={game.currentHole + 1}">Next</a>
