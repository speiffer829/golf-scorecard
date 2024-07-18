<script>
	let scores = $state([2, 4, 6, 2, 1, 2, 3, 4]);
	let newScore = $state(1);

	const width = 600;
	const height = 400;
	const padding = 40;

	function addScore() {
		if (scores.length < 12) {
			scores = [...scores, newScore];
		}
	}

	const xScale = $derived((width - padding * 2) / 12);
	const yScale = $derived((height - padding * 2) / 6);
</script>

<div>
	<svg {width} {height}>
		<!-- X-axis -->
		<line
			x1={padding}
			y1={height - padding}
			x2={width - padding}
			y2={height - padding}
			stroke="black"
		/>

		<!-- Y-axis -->
		<line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="black" />

		<!-- X-axis labels -->
		{#each Array(13) as _, i}
			<text x={padding + i * xScale} y={height - padding + 20} text-anchor="middle">{i}</text>
		{/each}

		<!-- Y-axis labels -->
		{#each Array(7) as _, i}
			<text
				x={padding - 10}
				y={height - padding - i * yScale}
				text-anchor="end"
				alignment-baseline="middle">{i}</text
			>
		{/each}

		<!-- Data points and lines -->
		<path
			d={`M ${scores.map((score, i) => `${padding + (i + 1) * xScale},${height - padding - score * yScale}`).join(' L ')}`}
			fill="none"
			stroke="blue"
			stroke-width="2"
		/>

		{#each scores as score, i}
			<circle
				cx={padding + (i + 1) * xScale}
				cy={height - padding - score * yScale}
				r="4"
				fill="blue"
			/>
		{/each}
	</svg>

	<div>
		<input type="number" bind:value={newScore} min="1" max="6" />
		<button on:click={addScore}>Add Score</button>
	</div>
</div>
