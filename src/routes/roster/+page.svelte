<script lang="ts">
	import { players, Player } from '$lib/store.svelte';
	import type { ColorOptions } from '$lib/Types';
	import { flip } from 'svelte/animate';
	import Playerbox from './PlayerBox.svelte';

	function handle_submit(event: Event) {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const input = form.new_player as HTMLInputElement;
		const name = input.value.trim();
		if (name) {
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
			const randomColor = colors[Math.floor(Math.random() * colors.length)];
			players.value.push(new Player(name, randomColor));
			input.value = '';
		}
	}
	import PlayerBox from './PlayerBox.svelte';
	import { fly } from 'svelte/transition';
</script>

<h1 class="pt-10">Roster</h1>

<form class="mx-auto mt-8 flex gap-3" onsubmit={handle_submit}>
	<input
		type="text"
		name="new_player"
		placeholder="New Player Name"
		class="block w-5 flex-1 rounded-xl border border-green-900 bg-green-50 px-3 py-2 font-atkinson text-4xl font-bold text-green-950 outline-offset-4 focus:outline-1 focus:outline-green-100 dark:border-green-100"
		autocomplete="off"
	/>
	<button class="btn rounded-xl" type="submit"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-circle-plus"
			><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg
		><span class="sr-only">Add Player</span></button
	>
</form>

<ul class="mt-9">
	{#each [...players.value].reverse() as player (player.id)}
		<li animate:flip={{ duration: 300 }} in:fly={{ y: -100, duration: 300 }}>
			<PlayerBox bind:player />
		</li>
	{/each}
</ul>
