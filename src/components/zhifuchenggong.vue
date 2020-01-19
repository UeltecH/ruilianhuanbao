<template>
	<div class='duihuanchenggong'>
		<img :src="success" alt="兑换成功">
		<p>
			<span>您已付款成功！</span>
			<span>稍后小睿会与您沟通具体上门采样时间，请保持电话畅通</span>
		</p>
		
		<div class="iknow" @click='goback'>查看进度</div>
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
					path:'/chaxunliebiao'
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
		font-size:0.28rem;
		margin:0.15rem 0 0.1rem 0;
		color:#4c4c4c;
		display: block;
		width:4.2rem;
		text-align: center;
	}
	.duihuanchenggong img{
		width:3.25rem;
		height:3.25rem;
		display: block;
		margin:0 auto;
		margin-top:0.5rem;
	}
	.duihuanchenggong{
		min-height:100%;
		background: white;
	}
</style>