<script lang="ts">
	import type { Snippet } from 'svelte';

	interface PropsType {
		children: Snippet;
		onclose?: () => void;
		dialog: HTMLDialogElement;
	}
	let { dialog = $bindable(), children, onclose = () => {}, ...rest }: PropsType = $props();
</script>

<dialog bind:this={dialog} {...rest}>
	{@render children()}
	<button class="close-btn" title="close window" onclick={() => dialog.close()}>
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
			class="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
		>
	</button>
</dialog>

<style>
	dialog {
		padding: theme('spacing.4');
		padding-block-start: theme('spacing.9');
		background-color: theme('colors.green.900');
		border-radius: theme('borderRadius.2xl');
		width: min(90%, var(--max-width, 400px));
		color: white;
	}

	dialog::backdrop {
		background-color: theme('colors.black' / 50%);
	}

	.close-btn {
		position: absolute;
		right: 10px;
		top: 10px;
		width: 30px;
		height: 30px;
		border-radius: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: theme('colors.white');
		transition: all 250ms;

		&:hover {
			background: theme('colors.red.500');
		}
	}
</style>
