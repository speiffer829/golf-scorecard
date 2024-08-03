<script lang="ts">
	import type { PlayerType } from '$lib/Types';

	interface Props {
		player: PlayerType;
		currentHole: number;
		i: number;
	}
	let { player = $bindable(), i, currentHole }: Props = $props();

	const currentScore = $derived(player.scores[currentHole] || 0);
	const scoreOptions = new Array(6).fill(0).map((_, i) => i + 1);

	$inspect(currentScore);
</script>

<p>{player.name}</p>
{#each scoreOptions as score}
	<button
		class="bg-ball-green"
		onclick={() => player.updateScore(currentHole, score)}
		class:bg-ball-red={currentScore === score}
	>
		{score}
	</button>
{/each}

<style>
	button {
		border: none;
		color: white;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		cursor: pointer;
	}
</style>
