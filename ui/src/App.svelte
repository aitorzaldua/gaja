<script>
	export let name;

	export let appWebsocket;
	export let cell_id;

	let postHash;

	$: postHash;

	 appWebsocket.callZome({
		cap: null,
		cell_id: cell_id,
		zome_name: 'zome_001',
		fn_name: 'create_post',
		payload: 'my post',
		provenance: cell_id[1],
	}).then(hash => postHash = hash);

</script>

<main>
	<h1>Welcome to {name}</h1>
	<p>A distributed emissions trading market.</p>

	{#if postHash}
		<span>Created new Holochain entry post with hash {postHash}</span>
	{:else}
		<span>Creating...</span>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #006166;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>