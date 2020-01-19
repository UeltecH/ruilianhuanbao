<template>
	<div class="tixianchenggong">
		<img :src="success" alt="提现成功">
		<p>
			<span>提现申请已提交，等待人工审核</span>
			<span>2019-11-22    17:41</span>
			<span>预计到账时间：11月25日</span>
		</p>
		
		<div class="iknow" @click='goback'>我知道了</div>
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
	.tixianchenggong p{
		margin-top: 0.55rem;
		display: flex;
		flex-direction:column;
		align-items: center;
	}
	.tixianchenggong p span:nth-child(1){
		font-size:0.36rem;
		color:#333;
	}
	.tixianchenggong p span:nth-child(2){
		font-size:0.24rem;
		margin:0.15rem 0 0.1rem 0;
		color:#4c4c4c;
	}
	.tixianchenggong p span:nth-child(3){
		font-size:0.28rem;
		color:#4c4c4c;
	}
	.tixianchenggong img{
		width:3.25rem;
		height:3.25rem;
		display: block;
		margin:0 auto;
		margin-top:0.5rem;
	}
</style>
