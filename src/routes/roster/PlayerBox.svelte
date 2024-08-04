<script lang="ts">
	import type { ColorOptions, PlayerType } from '$lib/Types';
	import { scale } from 'svelte/transition';

	interface PropsType {
		player: PlayerType;
		ondelete: (e: Event) => void;
	}
	let { player = $bindable(), ondelete }: PropsType = $props();

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
	<div class="flex justify-between gap-2">
		<p class="name w-fit text-4xl font-bold capitalize">{player.name}</p>
		<button
			onclick={ondelete}
			aria-label="Delete Player"
			data-id={player.id}
			data-name={player.name}
			class="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-900"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-trash-2"
				><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path
					d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
				/><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg
			>
		</button>
	</div>
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
