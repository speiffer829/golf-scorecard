<script lang="ts">
</script>

<div class="flex min-h-screen flex-col items-center justify-center py-10">
	<h1>Mini-Golf Scorecard</h1>
	<span class="flourish">
		<span class="circle bg-ball-red"></span>
		<span class="circle bg-ball-pink"></span>
		<span class="circle bg-ball-gold"></span>
		<span class="circle bg-ball-green"></span>
		<span class="circle bg-ball-blue"></span>
		<span class="circle bg-ball-purple"></span>
		<span class="circle bg-ball-orange"></span>
	</span>

	<a href="/roster" class="btn mt-16 w-full max-w-80 text-2xl">Start A Game</a>
</div>

<style>
	.flourish {
		display: flex;
		justify-content: center;
		width: 100%;
		gap: theme('spacing.3');
		margin-block-start: theme('spacing.9');
	}

	.circle {
		flex: 0 1 20px;
		aspect-ratio: 1 / 1;
		border-radius: 50%;
	}
</style>
