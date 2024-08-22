<script lang="ts">
	import { game } from '$lib/store.svelte';
</script>

<ol>
	{#each game.rankPlayers() as player}
		<li>{player.name}: {player.getTotalScore()}</li>
	{/each}
</ol>
