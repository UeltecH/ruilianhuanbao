<template>
	<div>
		<img src="../assets/qiandao.jpg" alt="签到" class='hongbao_title'>
		<div class="content">
			<span class='green'>【每周签到说明】</span>
			<span>平台为了奖励我们对于每周（任一时间）签到的好友，平台单次奖励积分5分(每周仅限一次），所得积分自动汇入您的会员中心内的“积分账户“，后期用做兑换商品使用。</span>
		</div>
		<div class="btn" @click='qiandao'>签到</div>
		
		<mt-popup v-model="popupVisible" popup-transition="popup-fade">
			<div class="shibai">
				<img src="../assets/qiandaochenggong.png" alt="签到成功">
				<div class="shibai_main">
					<div class="shibai_tip">
						<span>签到成功，成功领取<span class='green'>5</span>积分</span>
						<div class="jilu" @click='qiandaojilu'>查看签到记录</div>
					</div>
				</div>
			</div>
		</mt-popup>
	</div>
</template>

<script>
	import axios from 'axios';
	import {Toast} from "mint-ui";
	export default{
		data(){
			return{
				popupVisible:false
			}
		},
		methods:{
			qiandao(){
				this.popupVisible = !this.popupVisible
			},
			qiandaojilu(){
				this.$router.push({
					path:'/qiandaojilu'
				})
			}
		}
	}
</script>

<style scoped>
	.jilu{
		font-size:0.32rem;
		color:white;
		text-align: center;
		line-height:0.75rem;
		width:3.8rem;
		height:0.75rem;
		border-radius: 0.5rem;
		background:#33BB33;
		margin:0 auto;
	}
	.green{
		color:#33BB33!important;
		margin:0 0.2rem;
	}
	.shibai_tip>span{
		font-weight: bold;
		margin-top:1.3rem;
		margin-bottom:0.6rem;
		font-size:0.3rem;
		display: inline-block;
	}
	.shibai_tip{
		width:100%;
		height:3.7rem;
		background: white;
		text-align: center;
		border-radius: 0.15rem;
	}
	.mint-popup{
		border-radius: 0.15rem;
	}
	.shibai_main{
		border-radius: 0.15rem;
		width:6rem;
		height:3.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		font-size:0.3rem;
		color:#333;
	}
	.shibai{
		border-radius: 0.15rem;
		width:6rem;
		height:3.5rem;
	}
	.shibai img{
		position:absolute;
		top:0rem;
		left:0;
		right:0;
		bottom:4.5rem;
		margin:auto;
		z-index:9998;
		width:4.65rem;
		height:2.51rem;
	}
	.btn{
		width:6.5rem;
		height:1rem;
		text-align: center;
		line-height:1rem;
		font-size:0.32rem;
		color:white;
		position:fixed;
		bottom:0.3rem;
		left:0.5rem;
		background:#33BB33;
		border-radius: 0.5rem;
	}
	.content{
		width:6.9rem;
		padding:0 0.3rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
	}
	.content span{
		margin-bottom:0.05rem;
		font-size: 0.28rem;
		color:#666666;
	}
	.green{
		margin-bottom:0.1rem;
		font-size:0.32rem!important;
		color:#33BB33!important;
	}
	.hongbao_title{
		width:100%;
		height:3.5rem;
	}
</style>
