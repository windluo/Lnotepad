<template>
	<div class="page-notelist">
		<div class="notelist" :class="{today:ifToday(data.date)}" v-for="data in dataList">
			<div class="notelist-head">{{data.date}}</div>
			<ul class="notelist-list">
				<li class="notelist-item" v-for="item in data.dataList">
					<div class="title">{{item.title}}</div>
					<div class="details">{{item.details}}</div>
					<div class="time">{{item.time}}</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				systime: '',
				titleArr: ['吃饭', '跑步', '游玩', '看电影', '玩游戏'],
				detailsArr: ['去XXX吃饭', '去公园跑步', '去爬山啊', '到XXX看电影', '在家里打游戏'],
				dataList: []
			}
		},

		methods: {
			createData () {
				for (let i = 0; i < 4; i++) {
					let obj = {}

					obj.date = this.systime + ( i * 24 * 60 * 60 * 1000)
					obj.dataList = []
					for (let j = 0; j < 2; j++) {
						let childObj = {}
						let rand = Math.floor(Math.random() * 5)

						childObj.time = this.systime + ( i * 24 * 60 * 60 * 1000) + (j * 60 * 60 * 1000 * Math.floor(Math.random() * 5))
						childObj.title = this.titleArr[rand]
						childObj.details = this.detailsArr[rand]

						obj.dataList.push(childObj)
					}

					this.dataList.push(obj)
				}

				this.dataConvert()
			},

			dataConvert () {
				for (let i = 0; i < this.dataList.length; i++) {
					let data = this.dataList[i]
					data.date = this.dateConvert(data.date)

					for (let j = 0; j < data.dataList.length; j++) {
						data.dataList[j].time = this.timeConvert(data.dataList[j].time)
					}
				}
			},

			dateConvert (val) {
				let res = ''

				if (this.ifToday(val)) {
					res = 'Today'
				} else if (this.ifTomorrow(val)) {
					res = 'Tomorrow'
				} else {
					res = new Date(val).getFullYear()
								+ '-'
								+ this.completeDigit(parseInt(new Date(val).getMonth()) + 1)
								+ '-'
								+ this.completeDigit(new Date(val).getDate())
				}

				return res
			},

			timeConvert (val) {
				return this.completeDigit(new Date(val).getHours())
							 + ':'
							 + this.completeDigit(new Date(val).getMinutes())
			},

			ifToday (val) {
				if (new Date(val).getDate() === new Date(this.systime).getDate() || val === 'Today') {
					return true
				}

				return false
			},

			ifTomorrow (val) {
				if (new Date(val).getDate() === new Date(this.systime).getDate() + 1) {
					return true
				}

				return false
			},

			completeDigit (val) {
				if (val === undefined || val === null) {
					return
				} else {
					let res = '' + Math.floor(val / 10) + Math.floor(val % 10)

					return res
				}
			}
		},

		mounted () {
			this.systime = (new Date()).getTime()
			this.createData()
		}
	}
</script>

<style lang="less">
	.page-notelist{
		padding-top: .24rem;
		padding-right: .24rem;
		padding-bottom: .24rem;
		padding-left: 1rem;

		.notelist-head{
			padding-top: .32rem;
			padding-bottom: .24rem;
			position: relative;
			text-indent: -0.52rem;
			&:before{
				content: "";
				width: 1px;
				height: 100%;
				background: #e5e5e5;
				position: absolute;
				top: 0;
				left: -0.76rem;
			}
			&:after{
				content: "";
				width: .14rem;
				height: .14rem;
				background: #fff;
				border-radius: 100%;
				border: 2px solid #ff6700;
				position: absolute;
				top: 0.36rem;
				left: -0.84rem;
			}
		}

		.notelist.today .notelist-head:after{
			border-color: #47d618;
		}

		.notelist-list{
			position: relative;
			&:before{
				content: "";
				width: 1px;
				height: 100%;
				background: #e5e5e5;
				position: absolute;
				top: 0;
				left: -0.76rem;
			}
		}

		.notelist-item{
			padding: .18rem;
			border-radius: .08rem;
			border: 1px solid #e5e5e5;
			margin-bottom: .18rem;
			background: #fff;
			box-shadow: 2px 2px 2px rgba(140, 140, 140, 0.1);
			position: relative;
			&:last-child{
				margin-bottom: 0;
			}

			.time{
				width: 0.6rem;
				text-align: center;
				color: #999;
				font-size: .20rem;
				position: absolute;
				top: 50%;
				left: -0.70rem;
				transform: translateY(-50%);
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
			.notelist-head:after{
				left: -0.86rem;
			}
		}
	}
</style>