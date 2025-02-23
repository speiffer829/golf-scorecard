<script lang="ts">
	import type { PlayerType } from '$lib/Types';
	let { player, index }: { player: PlayerType; index: number } = $props();
</script>

<details open>
	<summary class="flex justify-between">
		<h2>
			<sup class="mr-2 font-normal text-green-950 dark:text-green-100">#{index + 1}</sup
			>{player.name}
		</h2>
		<p>{player.getTotalScore()}</p>
	</summary>

	<div class="details">
		{#each player.scores as score, index}
			<div
				class:bg-green-600={score <= 2}
				class:bg-red-600={score >= 5}
				class:bg-yellow-700={score >= 3 && score <= 4}
			>
				<span><sup>#</sup>{index + 1}</span>
				<p
					class:text-green-100={score <= 2}
					class:text-red-100={score >= 5}
					class:text-yellow-100={score >= 3 && score <= 4}
				>
					{score}
				</p>
			</div>
		{/each}
	</div>
</details>

<style>
	details {
		margin-block-end: theme('spacing.4');
	}
	summary {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: theme('fontSize.lg');
		padding-block: theme('spacing.3');
		cursor: pointer;
		user-select: none;
	}

	h2 {
		font-size: theme('fontSize.2xl');
	}

	summary p {
		font-size: theme('fontSize.2xl');
	}

	.details {
		display: grid;
		grid-template-columns: repeat(9, 1fr);
		gap: theme('spacing.2');
	}

	.details div {
		border-radius: theme('borderRadius.md');

		position: relative;
	}

	.details p {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.details span {
		position: absolute;
		top: -10px;
		left: 0;
		font-size: theme('fontSize.xs');
	}
</style>
