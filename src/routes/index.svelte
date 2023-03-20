<script context="module">
	const responseHandler = (defaultResponse = null) => res => {
		if (res.status !== 200) {
			return defaultResponse;
		}
		return res.json();
	};
	export function preload({params}) {
		const ogparams = {og_id: 5};
		//const req1 = this.fetch('token').then(responseHandler({}))
		const req2 = this.fetch('og-data.json', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				ogparams,
			}),
		}).then(responseHandler([]))
		return 	Promise.all([
			//req1, req2
			req2
		])
		// .then(([user, og_data]) => {
		// 	return {user, og_data}; 
		.then(([og_data]) => {
			return {og_data}; 
		});
	}
</script>

<script>
	export let og_data;

	import HeadPages from '../components/HeadPages.svelte';
	import NoticeCard from '../components/NoticeCard.svelte';
	import AdministrationCard from '../components/AdministrationCard.svelte';
	import NewsCard from '../components/NewsCard.svelte';
</script>

<svelte:head>
	<title>{og_data[0].site_title}</title>
	<meta name="description" content="{og_data[0].site_description}" />
	<meta property="og:type" content="{og_data[0].og_type}" />
	<meta property="og:title" content="{og_data[0].og_title}" />
	<meta property="og:description" content="{og_data[0].og_description}" />
	<meta property="og:url" content="{og_data[0].og_url}">
	<meta property="og:image" content="{og_data[0].og_image}">
	<meta property="og:image:type" content="{og_data[0].og_image_type}" />
	<meta property="og:image:width" content="{og_data[0].og_image_width}">
	<meta property="og:image:height" content="{og_data[0].og_image_height}">
	<meta name="twitter:title" content="{og_data[0].site_title}">
	<meta name="twitter:description" content="{og_data[0].site_description}">
</svelte:head>

<div class="wrap wrap_mainheader">
	<div class="work">
		<div class="mainheader">
			<div class="mainheader_block">
				<div class="mainheader_block-head">Садовое общество Квант</div>
				<div class="mainheader_line right">
					<div class="mainheader_line-title">Сайт садового некоммерческого <br>товарищества "Квант"</div>
				</div>
				<div class="mainheader_line">
					<a href="/" class="mainheader_line-link">www.sntkvant.ru</a>
				</div>
				<div class="mainheader_list">
					<div class="mainheader_item">
						Более 1000 <br>участков
					</div>
					<div class="mainheader_item">
						Основан в <br>1987 году
					</div>
					<div class="mainheader_item">
						Более 500 <br>садоводов
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="wrap wrap_notices">
	<div class="work">
		<div class="notices">
			<HeadPages title="Наша доска" text="объявлений" />
			<div class="notices_container">
				<div class="notices_block">
					<NoticeCard />
				</div>
				<div class="notices_block">
					<NoticeCard />
				</div>
				<div class="notices_block">
					<NoticeCard />
				</div>
				<div class="notices_block">
					<NoticeCard />
				</div>
			</div>
		</div>
	</div>
</div>

<div class="wrap wrap_administration">
	<div class="work">
		<div class="administration">
			<HeadPages title="Наша" text="администрация" />
			<div class="administration_container">
				<div class="administration_block">
					<AdministrationCard />
				</div>
				<div class="administration_block">
					<AdministrationCard />
				</div>
				<div class="administration_block">
					<AdministrationCard />
				</div>
				<div class="administration_block">
					<AdministrationCard />
				</div>
			</div>
		</div>
	</div>
</div>

<div class="wrap wrap_news">
	<div class="work">
		<div class="news">
			<HeadPages title="Наши новости" text="что нового?" />
			<div class="news_container">
				<div class="news_block">
					<NewsCard />
				</div>
				<div class="news_block">
					<NewsCard />
				</div>
				<div class="news_block">
					<NewsCard />
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
.wrap_mainheader{
	position: relative;
	height: calc(100vh - 100px);
	min-height: calc(100vh - 100px);
	background-image: url(/img/bg_main_header.jpg);
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	box-sizing: border-box;
	&::before{
		content: '';
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(4,10,0,0.6);
	}
	.work{
		max-width: 800px;
		height: 100%;
	}
}

.mainheader{
	position: relative;
	z-index: 2;
	display: flex;
	align-items: flex-end;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	padding-bottom: 40px;
}

.mainheader_block{
	width: 100%;
}

.mainheader_block-head{
	position: relative;
	padding: 30px 80px;
	background-color: #46811c;
	border-radius: 0 15px 0 15px;
	color: #fff;
	font-size: 36px;
	font-weight: 900;
	text-align: center;
	margin-bottom: 15px;
	&::before{
		content: '';
		position: absolute;
		top: -25px;
		left: 40px;
		width: 51px;
		height: 51px;
		background-image: url(/img/logo.png);
		background-repeat: no-repeat;
	}
}

.mainheader_line{
	display: flex;
	justify-content: center;
	width: 100%;
	margin-bottom: 15%;
	&.right{
		justify-content: right;
	}
}

.mainheader_line-link{
	font-weight: 600;
	color: #fff;
	font-size: 16px;
}

.mainheader_line-title{
	font-size: 18px;
	line-height: 1.4em;
	color: #fff;
}

.mainheader_list{
	display: flex;
	width: 100%;
	justify-content: center;
}

.mainheader_item{
	position: relative;
	padding-left: 90px;
	display: flex;
	align-items: center;
	min-height: 90px;
	margin: 0 40px;
	line-height: 1.3em;
	color: #fff;
	&::before{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 80px;
		height: 80px;
		background-color: #fff;
		border-radius: 50%;
	}
	&::after{
		content: '';
		position: absolute;
		top: 5px;
		left: 5px;
		width: 68px;
		height: 68px;
		background-color: #fff;
		border-radius: 50%;
		border: 1px dashed green;
		background-position: center center;
		background-repeat: no-repeat;
	}
}

.mainheader_item{
	&:nth-child(1){
		&::after{
			background-image: url(/svg/trees.svg);
			background-size: 75% 75%;
		}
	}
	&:nth-child(2){
		&::after{
			background-image: url(/svg/found.svg);
			background-size: 60% 60%;
		}
	}
	&:nth-child(3){
		&::after{
			background-image: url(/svg/gardener.svg);
			background-size: 70% 70%;
		}
	}
}

.notices{
	padding: 65px 0;
}

.notices_container{
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	margin-top: 30px;
}

.notices_block{
	width: calc(100%/2 - 40px);
	margin: 20px;
}

.wrap_administration{
	padding: 65px 0;
	background-repeat: repeat;
	background-image: url(/img/bg-administration.png);
}

.administration_container{
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	margin-top: 30px;
}

.administration_block{
	width: calc(100%/4 - 30px);
	margin: 15px;
}

.wrap_news{
	padding: 65px 0;
}

.news_container{
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	margin-top: 30px;
}

.news_block{
	width: calc(100%/3 - 30px);
	margin: 15px;
}

@media only screen and (max-width: 1679px){
	.wrap_mainheader{
		height: auto;
		min-height: auto;
		padding-top: 100px;
	}

	// .wrap_mainheader .work{
	// 	min-height: calc(100vh - 200px);
	// }

	.mainheader_item{
		margin: 0 25px;
	}

	.mainheader_line{
		margin-bottom: 50px;
	}
}

@media only screen and (max-width: 1023px){
	.mainheader_block{
		box-sizing: border-box;
		padding: 0 20px;
	}

	.administration_block{
		width: calc(100%/2 - 30px);
	}

	.news_block{
		width: calc(100%/2 - 30px);
	}
}

@media only screen and (max-width: 767px){
	.mainheader_block-head{
		font-size: 32px;
	}

	.mainheader_item{
		margin: 0 15px;
	}
}

@media only screen and (max-width: 639px){
	.mainheader{
		align-items: flex-start;
	}

	.mainheader_block-head{
		font-size: 24px;
	}

	.mainheader_list{
		flex-wrap: wrap;
	}

	.mainheader_item{
		width: 100%;
		margin: 10px 0;
		br{
			display: none;
		}
	}
	.news_block{
		width: calc(100% - 30px);
	}
}

@media only screen and (max-width: 539px){
	.mainheader_block-head{
		padding: 30px;
	}

	.mainheader_item{
		padding-left: 0;
		justify-content: center;
		padding-top: 60px;
	}

	.mainheader_item::before{
		left: 50%;
		margin-left: -40px;
	}

	.mainheader_item::after{
		left: 50%;
		margin-left: -34px;
	}

	.mainheader_item{
		margin: 5px 0;
	}

	.notices_block{
		width: calc(100% - 40px);
	}

	.administration_block{
		width: calc(100% - 30px);
	}
}
</style>