<script lang="ts">
	// spring docs: https://svelte.dev/docs/svelte/svelte-motion
	import { Spring } from 'svelte/motion';

	let { count = 0 } = $props();

	const displayed_count = new Spring(0);
	$effect(() => {
		displayed_count.target = count;
	});

	const offset = $derived(modulo(displayed_count.current, 1));

	function modulo(n: number, m: number) {
		// handle negative numbers
		return ((n % m) + m) % m;
	}
</script>

<div class="counter">
	<div class="counter-viewport">
		<div
			class="counter-digits text-green-900 dark:text-green-100"
			style="transform: translate(0, {100 * offset}%)"
		>
			<strong class="hidden" aria-hidden="true">{Math.floor(displayed_count.current + 1)}</strong>
			<strong>{Math.floor(displayed_count.current)}</strong>
		</div>
	</div>
</div>

<style>
	.counter {
	}

	svg {
		width: 25%;
		height: 25%;
	}

	path {
		vector-effect: non-scaling-stroke;
		stroke-width: 2px;
		stroke: #444;
	}

	.counter-viewport {
		height: 2rem;
		width: 50px;
		overflow: hidden;
		text-align: center;
		position: relative;
	}

	.counter-viewport strong {
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		align-items: flex-end;
		justify-content: flex-end;
	}

	.counter-digits {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.hidden {
		top: -100%;
		user-select: none;
	}
</style>
