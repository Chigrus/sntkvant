<script context="module">
	export function preload() {
		const req1 = this.fetch('/menupg.json').then(r => r.json())
		return 	Promise.all([
			req1
		])
		.then(([menu]) => {
			return { menu }; 
		});
	}
</script>

<script>
	export let menu;
	export let segment;
	import Nav from '../components/Nav.svelte';
</script>

<div class="mainmenu">
	<div class="wrap wrap_mainmenu">
		<div class="work">
			<div class="mainmenu_container">
				<a href="/" class="logo">
					<span class="name">СНТ Квант</span><br>
					<span class="city">г. Невинномысск</span>
				</a>
				<Nav bind:menu {segment} />
			</div>
		</div>
	</div>
</div>

<main>
	<slot></slot>
</main>

<style lang="scss">
main{
	position: relative;
}

.mainmenu{
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	width: 100%;
	height: 100px;
	background-color: #fff;
	box-sizing: border-box;
	border-top: 5px solid #64a507;
}

.wrap_mainmenu{
	height: 100%;
	.work{
		height: 100%;
	}
}

.mainmenu_container{
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
}

.logo{
	display: block;
	text-decoration: none;
	padding: 10px 0;
	padding-left: 72px;
	line-height: 1em;
	background-image: url(/img/logo.png);
	background-repeat: no-repeat;
	background-position: left center;
	background-repeat: no-repeat;
}

.logo{
	.name{
		font-weight: 900;
		text-transform: uppercase;
	}
}

@media only screen and (max-width: 1200px){
	.mainmenu_container{
		padding: 0 20px;
	}
}
</style>