<template>
	<div class='outer' :style="style">
		<div class="top">
			<div class="top_info">
				<img src="../assets/user.png">
				<div>
					<p>黑富美</p>
					<p>会员等级：排长</p>
				</div>
			</div>


			<div class="info_bottom">
				<div class="info_bottom_left">
					<span>265.00</span>
					<span>余额</span>
				</div>
				<div class="info_bottom_middle"></div>
				<div class="info_bottom_right">
					<span>6152</span>
					<span>积分</span>
				</div>
			</div>
		</div>

		<div class="middle_border">
			<div class="middle" @click="order(0)">
				<span>我的积分礼品订单</span>
				<img src="../assets/xiaojiantou.jpg">
			</div>
			
			<div class="status">
				<div class="status_left" @click="order(1)">
					<img src="../assets/yiduihuan.png">
					<span>已兑换</span>
				</div>
			
				<div class="status_middle"></div>
			
				<div class="status_right" @click="order(2)">
					<img src="../assets/yiwancheng.png">
					<span>已完成</span>
				</div>
			</div>
			
		</div>
		<dianzi></dianzi>
		<div class="main">
			<div class="item" v-for="item in items">
				<router-link :to="item.url" class='item_border'>
					<img :src="item.img">
					<span>{{item.info}}</span>
				</router-link>
			</div>
		</div>

		
		<div class="bottom_border" @click='qiandao'>
			<div class="bottom">
				<span><b>每周签到</b></span>
				<span>（每次奖励5积分）</span>
			</div>
		</div>
		
		
		<xuanfucaidan></xuanfucaidan>
	</div>
</template>

<script>
	const root = process.env.API_ROOT;
	import dianzi from '../temp/dianzi';
	import xuanfucaidan from '../temp/xuanfucaidan';
	export default {
		// 引入dianzi
		components:{dianzi:dianzi,xuanfucaidan:xuanfucaidan},
		data() {
			return {
				style:'',
				items: [{
						url:'/wodetuandui',
						img: require('../assets/wodetuandui.png'),
						info: "我的团队"
					},
					{
						url:'/yaoqinghaoyou',
						img: require('../assets/yaoqinghaoyou.png'),
						info: "邀请好友"
					},
					{
						url:'/lipinduihuan',
						img: require('../assets/lipinduihuan.png'),
						info: "礼品兑换"
					},
					{
						url:'/jifenzhanghu',
						img: require('../assets/jifenzhanghu.png'),
						info: "积分账户"
					},
					{
						url:'/xianjinzhanghu',
						img: require('../assets/xianjinzhanghu.png'),
						info: "现金账户"
					},
					{
						url:'/shouyiguanli',
						img: require('../assets/shouyiguanli.png'),
						info: "收益管理"
					},
					{
						url:'/sucaizhongxin',
						img: require('../assets/sucaizhongxin.png'),
						info: "素材中心"
					},
					{
						url:'/zaixiankefu',
						img: require('../assets/zaixiankefu.png'),
						info: "在线客服"
					},
					{
						url:'/bangzhuzhongxin',
						img: require('../assets/bangzhuzhongxin.png'),
						info: "帮助中心"
					}
				]
			}
		},
		methods:{
			order:function(e){
				this.$router.push({
					path:"/order",
					query:{status:e}
				})
			},
			qiandao(){
				this.$router.push({
					path:'/qiandao'
				})
			}
		}
	}
</script>

<style scoped>
	.middle_border{
		background:white;
		padding:0 0.3rem;
	}
	.outer{
		background: white;
		height: 100%;
		width:100%;
	}
	.bottom span:nth-child(1) {
		font-size: 0.36rem;
	}

	.bottom span:nth-child(2) {
		font-size: 0.24rem;
	}
	.bottom_border{
		width:100%;
		height:1.25rem;
		background:#f5f5f5;
	}
	.bottom {
		margin:0 auto;
		color: white;
		width: 6.5rem;
		height: 1rem;
		background: #33bb33;
		text-align: center;
		border-radius: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.item span {
		font-size: 0.275rem;
		color: #666;
		margin-top: 0.15rem;
	}

	.item img {
		width: 0.64rem;
		height: 0.64rem;
	}
	.item_border{
		width:100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		color:#666;
	}
	.item {
		width: 2rem;
		height: 2rem;
	}

	.main {
		margin: 0.18rem 0;
		flex-wrap: wrap;
		width: 100%;
		background: white;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	

	.status img {
		width: 0.57rem;
		height: 0.57rem;
		margin-right: 0.6rem;
	}

	.status_middle {
		width: 0.01rem;
		height: 0.95rem;
		background: #f0f0f0;
	}

	.status_right,
	.status_left {
		width: 3.445rem;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.28rem;
		color: #666666;
	}

	.status {
		padding: 0.11rem 0;
		width: 6.9rem;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 0.95rem;
		background:white;
	}

	.middle img {
		width: 0.17rem;
		height: 0.35rem;
	}

	.middle {
		font-size: 0.32rem;
		width: 6.9rem;
		height: 0.9rem;
		margin: 0 auto;
		border-bottom: 0.01rem solid #f0f0f0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.info_bottom {
		margin-top: 0.6rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.info_bottom_middle {
		width: 0.03rem;
		height: 0.9rem;
		background: white;
	}

	.info_bottom_left>span:nth-child(2),
	.info_bottom_right>span:nth-child(2) {
		font-size: 0.24rem;
		color: white;
	}

	.info_bottom_left>span:nth-child(1),
	.info_bottom_right>span:nth-child(1) {
		font-size: 0.4rem;
		color: white;
	}

	.info_bottom_left,
	.info_bottom_right {
		width: 3.74rem;
		height: 0.9rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.top_info div p:nth-child(1) {
		font-size: 0.32rem;
		color: white;
		font-weight: bold;
	}

	.top_info div p:nth-child(2) {
		font-size: 0.28rem;
		margin-top: 0.15rem;
		color: white;
	}

	.top_info img {
		width: 1.1rem;
		height: 1.1rem;
		border-radius: 50%;
		margin-right: 0.25rem;
	}

	.top_info {
		margin-left: 0.5rem;
		padding-top: 0.55rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.top {
		width: 7.5rem;
		height: 3.4rem;
		background: url(../assets/wode_back.png) 100% 100% no-repeat;
		background-size: cover;
	}
</style>
