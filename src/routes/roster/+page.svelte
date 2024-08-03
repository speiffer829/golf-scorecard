<script lang="ts">
	import PlayerBox from './PlayerBox.svelte';
	import { game, Player } from '$lib/store.svelte';
	import type { ColorOptions, PlayerType } from '$lib/Types';
	import { flip } from 'svelte/animate';
	import { fly, scale } from 'svelte/transition';
	import Dialog from '$lib/components/Dialog.svelte';
	import { goto } from '$app/navigation';

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
			game.players.unshift(new Player(name, randomColor));
			input.value = '';
			input.focus();
		}
	}

	let choppingBlockName: string = $state();
	let choppingBlockId: string = $state();
	let choppingBlockDialog: HTMLDialogElement = $state();

	function ondelete(e: Event) {
		choppingBlockId = (e.currentTarget as HTMLElement).getAttribute('data-id');
		choppingBlockName = (e.currentTarget as HTMLElement).getAttribute('data-name');

		choppingBlockDialog.showModal();
	}

	function removePlayer() {
		game.players = game.players.filter((player: PlayerType) => player.id !== choppingBlockId);
		choppingBlockDialog.close();
	}
</script>

<h1 class="pt-10">Roster</h1>

<form class="mx-auto mt-8 flex gap-3" onsubmit={handle_submit}>
	<input
		type="text"
		name="new_player"
		placeholder="Player Name"
		class="block w-5 flex-1 rounded-xl border border-green-900 bg-green-50 px-3 py-2 font-atkinson text-3xl font-bold text-green-950 outline-offset-4 focus:outline-1 focus:outline-green-100 dark:border-green-100"
		autocomplete="off"
		enterkeyhint="go"
	/>
	<button class="btn rounded-xl" type="submit" aria-label="Add Player"
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
	{#each game.players as player, index (player.id)}
		<li animate:flip={{ duration: 300 }} in:fly={{ y: -100, duration: 300 }}>
			<PlayerBox bind:player={game.players[index]} {ondelete} />
		</li>
	{/each}
</ul>

{#if game.players.length !== 0}
	<a
		href="/game"
		transition:scale
		class="btn mt-9 flex w-full items-center justify-center gap-2 text-3xl font-bold"
		>Start<svg
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
{/if}

<Dialog bind:dialog={choppingBlockDialog}>
	<p class="text-2xl">
		Are you sure you want to remove <strong class="font-bold text-green-100"
			>{choppingBlockName}</strong
		>?
	</p>

	<div class="mt-8 grid grid-cols-2 gap-4">
		<button class="btn w-full bg-red-400 text-red-950 hover:bg-red-500" onclick={removePlayer}
			>Remove</button
		>
		<button
			class="btn w-full bg-green-100 text-green-900 hover:bg-green-300"
			onclick={() => choppingBlockDialog.close()}>Cancel</button
		>
	</div>
</Dialog>
