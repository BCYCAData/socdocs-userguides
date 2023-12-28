<script lang="ts">
	import { onMount } from 'svelte';
	import mermaid from 'mermaid';

	export let mermaidOptions = {};

	mermaid.initialize(mermaidOptions);

	onMount(() => {
		setTimeout(async () => {
			await mermaid.run();
		}, 0);
	});
</script>

<div class="container">
	<pre class="mermaid">
    <slot />
  </pre>
</div>

<style lang="scss">
	.mermaid {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
</style>
