<script lang="ts">
	import { spin } from '$lib/animations/spin';
	import { fly } from 'svelte/transition';
	import Counter from '$lib/components/Counter.svelte';
	import type { PlayerType } from '$lib/Types';

	interface Props {
		player: PlayerType;
		currentHole: number;
		i: number;
	}
	let { player = $bindable(), i, currentHole }: Props = $props();

	const currentScore = $derived(player.scores[currentHole - 1] || 0);
	const scoreOptions = new Array(6).fill(0).map((_, i) => i + 1);
</script>

<div class="mt-16 theme-{player.color}">
	<div class="flex items-end justify-between">
		<p class="name w-fit text-4xl font-bold capitalize">{player.name}</p>
		<p class="rounded-full text-2xl font-normal text-green-100">
			<Counter count={player.getTotalScore()} />
		</p>
	</div>
	<div class=" mt-4 grid grid-cols-3 gap-4">
		{#each scoreOptions as score, i}
			{#key currentHole}
				<button
					in:fly={{ y: 100, delay: i * 50 }}
					onclick={() => player.updateScore(currentHole, score)}
					class:selected={currentScore === score}
				>
					{score}
				</button>
			{/key}
		{/each}
	</div>
</div>

<style>
	button {
		border: none;
		text-align: center;
		text-decoration: none;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: theme('fontSize.2xl');
		font-weight: bold;
		cursor: pointer;
		background-color: theme('colors.green.900');
		color: theme('colors.green.100');
		border-radius: 999px;
		height: theme('width.16');
	}

	button.selected {
		background-color: theme('colors.green.100');
		color: theme('colors.green.900');
	}
</style>
