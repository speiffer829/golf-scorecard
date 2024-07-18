<script lang="ts">
	import type { ColorOptions, PlayerType } from '$lib/Types';
	import { scale } from 'svelte/transition';

	interface PropsType {
		player: PlayerType;
	}
	let { player = $bindable() }: PropsType = $props();

	const colors: ColorOptions[] = [
		'red',
		'gold',
		'green',
		'blue',
		'purple',
		'orange',
		'pink',
		'black',
		'white'
	];
</script>

<div class="my-4 py-2 pl-2 theme-{player.color}" data-id={player.id}>
	<p class="name w-fit text-4xl font-bold capitalize">{player.name}</p>
	<ul class="mt-4 flex flex-wrap gap-2">
		{#each colors as color}
			<li class="">
				<button
					class="h-8 w-8 rounded-full border border-dark dark:border-white bg-ball-{color} flex items-center justify-center"
					onclick={() => (player.color = color)}
				>
					{#if color === player.color}
						<span class="block rounded-full bg-white/60 p-1 text-green-950" in:scale>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg
							>
						</span>
					{/if}
					<span class="sr-only">{color}</span></button
				>
			</li>
		{/each}
	</ul>
</div>

<style>
	.theme-black {
		--color: theme('colors.ball.black');
	}

	.theme-white {
		--color: theme('colors.ball.white');
	}
	.theme-red {
		--color: theme('colors.ball.red');
	}

	.theme-gold {
		--color: theme('colors.ball.gold');
	}

	.theme-green {
		--color: theme('colors.ball.green');
	}

	.theme-blue {
		--color: theme('colors.ball.blue');
	}

	.theme-purple {
		--color: theme('colors.ball.purple');
	}

	.theme-orange {
		--color: theme('colors.ball.orange');
	}

	.theme-pink {
		--color: theme('colors.ball.pink');
	}

	.name {
		position: relative;
		isolation: isolate;
		text-wrap: balance;

		&::after {
			content: '';
			position: absolute;
			height: 8px;
			width: 100%;
			opacity: 1;
			left: 0;
			top: calc(100% - 8px);
			z-index: -1;
			background-color: var(--color);
		}
	}
</style>
