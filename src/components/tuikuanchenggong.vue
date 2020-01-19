<template>
	<div class="tuikuanchenggong">
		<img src="../assets/success.jpg" alt="成功">
		<p>小睿已收到您的退款申请</p>
		<p>小睿会尽快处理您的退款，如在15个工作日内未进行处理，款项将自动退还</p>
		<router-link to='/chaxunliebiao'>
			<div class='submit'>我知道了</div>
		</router-link>
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
	a{
		text-decoration-line:none;
	}
	.submit{
		width:6.5rem;
		height:1rem;
		text-align: center;
		line-height: 1rem;
		color:white;
		font-size:0.36rem;
		background:#33BB33;
		border-radius: 0.15rem;
		margin:0 auto;
	}
	.tuikuanchenggong p:nth-child(2){
		font-size:0.36rem;
		color:#333;
	}
	.tuikuanchenggong p:nth-child(3){
		font-size:0.28rem;
		color:#666666;
		width:5.7rem;
		margin:0.4rem 0 0.6rem 0;
	}
	.tuikuanchenggong img{
		width:1.8rem;
		height:1.8rem;
		border-radius: 50%;
		margin:1rem 0 0.55rem 0;
	}
	.tuikuanchenggong{
		display:flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}
</style>
