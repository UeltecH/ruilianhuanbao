<template>
	<div class='duihuanchenggong'>
		<img :src="success" alt="兑换成功">
		<p>
			<span>商品兑换成功</span>
			<span>亲，恭喜您成功兑换商品！</span>
		</p>
		
		<div class="iknow" @click='goback'>查看我的订单</div>
		
		<p class='zhuyi'>
			<span>注：</span>
			<span>礼品兑换成功，睿联环保客服会联系您，确认礼品领取事宜。</span>
		</p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				success:require("../assets/tixianchenggong.png")
			}
		},
		methods:{
			goback:function(){
				this.$router.push({
					path:'/'
				})
			}
		}
	}
</script>

<style scoped>
	.zhuyi span:nth-child(2){
		font-size:0.28rem!important;
	}
	.zhuyi span:nth-child(1){
		font-size:0.32rem!important;
		color:#33BB33!important;
	}
	.zhuyi{
		width:6.5rem;
		margin:auto;
		display: flex;
		flex-direction: column;
		align-items: flex-start!important;
		justify-content: flex-start;
	}
	.iknow{
		width:6.5rem;
		height:1rem;
		border-radius: 0.15rem;
		text-align: center;
		line-height:1rem;
		font-size: 0.36rem;
		color:white;
		background:#33bb33;
		margin:0 auto;
		margin-top: 0.6rem;
	}
	.duihuanchenggong p{
		margin-top: 0.55rem;
		display: flex;
		flex-direction:column;
		align-items: center;
	}
	.duihuanchenggong p span:nth-child(1){
		font-size:0.36rem;
		color:#333;
	}
	.duihuanchenggong p span:nth-child(2){
		font-size:0.24rem;
		margin:0.15rem 0 0.1rem 0;
		color:#999;
	}
	.duihuanchenggong img{
		width:3.25rem;
		height:3.25rem;
		display: block;
		margin:0 auto;
		margin-top:0.5rem;
	}
</style>
