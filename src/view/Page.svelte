<script type="ts">
	import engine from '@store/engine';
	$: ({ heading, content } = $engine);
</script>

<h2 class="heading">{heading}</h2>
<p class="content">{content}</p>
<div class="actions">
	<button on:click={() => engine.dispatch({ verb: 'move', direction: 'up' })}>Test</button>
</div>

<style>
</style>
