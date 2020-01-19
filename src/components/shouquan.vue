<template>
	<div class="showquan">
		<img src="../assets/shouquan.png" alt="logo">
		<p>授权获取用户信息</p>
		<div class="yunxu">允许</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.yunxu{
		width:3.9rem;
		height:0.9rem;
		margin:0 auto;
		border-radius: 0.15rem;
		background:#33BB33;
		color:white;
		font-size:0.36rem;
		text-align: center;
		line-height:0.9rem;
	}
	p{
		font-size:0.32rem;
		color:#595959;
		text-align: center;
		width:100%;
		margin-bottom:0.55rem;
	}
	img{
		width:1.48rem;
		height:1.48rem;
		border-radius: 50%;
		border:1px solid #dedede;
		display:block;
		margin:1.3rem auto 0.5rem auto;
	}
</style>
