<script lang="ts">
	import Nav from '../components/Nav.svelte';

	export let segment: string;
</script>

<style>
</style>

<Nav {segment} />

<main class="relative max-w-4xl bg-white p-8 mx-auto box-border">
	<slot />
</main>
