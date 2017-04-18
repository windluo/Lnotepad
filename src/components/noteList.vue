<template>
	<div class="page-notelist">
		<div class="today">
			<div class="today-head">Today</div>
			<ul class="today-list">
				<li class="today-item" v-for="data in todayList">
					<div class="title">{{data.title}}</div>
					<div class="details">{{data.details}}</div>
				</li>
			</ul>
		</div>

		<div class="tomorrow">
			<div class="tomorrow-head">Tomorrow</div>
			<ul class="tomorrow-list">
				<li class="tomorrow-item" v-for="data in tomorrowList">
					<div class="title">{{data.title}}</div>
					<div class="details">{{data.details}}</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				todayList: [
					{title: '吃饭', details: '中午去XXX吃饭'},
					{title: '跑步', details: '晚上去公园跑步'}
				],
				tomorrowList: [
					{title: '游玩', details: '去爬山啊'},
					{title: '吃饭', details: '晚上去某店吃饭'}
				]
			}
		},

		methods: {
			
		},

		mounted () {
			console.log('noteList is ok!')
		}
	}
</script>

<style lang="less">
	.page-notelist{
		padding-top: .24rem;
		padding-right: .24rem;
		padding-left: .48rem;

		.today-head,
		.tomorrow-head{
			padding-bottom: .24rem;
			position: relative;
			&:before{
				content: "";
				width: 1px;
				height: 100%;
				background: #e5e5e5;
				position: absolute;
				top: 0;
				left: -0.24rem;
			}
			&:after{
				content: "";
				width: .14rem;
				height: .14rem;
				background: #fff;
				border-radius: 100%;
				border: 2px solid #ff6700;
				position: absolute;
				top: 0.06rem;
				left: -0.32rem;
			}
		}

		.today-head:after{
			border-color: #47d618;
		}

		.tomorrow-head{
			padding-top: .32rem;
			&:after{
				top: 0.36rem;
			}
		}

		.today-list,
		.tomorrow-list{
			position: relative;
			&:before{
				content: "";
				width: 1px;
				height: 100%;
				background: #e5e5e5;
				position: absolute;
				top: 0;
				left: -0.24rem;
			}
		}

		.today-item,
		.tomorrow-item{
			padding: .18rem;
			border-radius: .08rem;
			border: 1px solid #e5e5e5;
			margin-bottom: .18rem;
			box-shadow: 2px 2px 2px rgba(140, 140, 140, 0.1);
			&:last-child{
				margin-bottom: 0;
			}
		}

		.title{
			color: #ef1b0f;
			font-size: .28rem;
		}

		.details{
			color: #999;
		}

		@media screen and (max-width: 413px) {
			.today-head:after,
			.tomorrow-head:after{
				left: -0.34rem;
			}
		}
	}
</style>