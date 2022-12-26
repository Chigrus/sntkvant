<script context="module">
	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Новости</title>
</svelte:head>

<div class="wrap">
	<div class="work">
		<h1>Новости</h1>

		<p>Страница в разработке</p>
	</div>
</div>