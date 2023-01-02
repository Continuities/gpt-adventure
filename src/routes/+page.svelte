<script type="typescript">
	import App from '@view/App.svelte';
</script>

<svelte:head>
	<style>
		html {
			box-sizing: border-box;
		}
		*,
		*::before,
		*::after {
			box-sizing: inherit;
		}
		body {
			margin: 0;
		}
	</style>
</svelte:head>
<App />
