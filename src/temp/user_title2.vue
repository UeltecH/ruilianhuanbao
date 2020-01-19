<template>
	<div class='user_title2'>
		<div class="user_title_left">
			<img src="../assets/user.png" alt="头像">
			<p>
				<span>黑富美</span>
				<span>享受待遇：无忧创业</span>
				<span>会员等级：金牌合伙人</span>
			</p>
		</div>
		<div class="user_title_right">
			<p>预存保证金：￥{{baozhengjin}}</p>
			<p>现在余额：￥{{yue}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				yue:"2800",
				baozhengjin:'3000'
			}
		}
	}
</script>

<style scoped>
	.user_title_right{
		font-size: 0.28rem;
		padding-left:0.25rem;
		color:white;
	}
	.user_title2{
		background:url(../assets/xianjinzhanghu_title.png) 100% 100% no-repeat;
		background-size:cover;
		width:7.5rem;
		height:2.2rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.user_title_left{
		border-right:1px solid #dedede;
		padding-right:0.25rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.user_title_left img{
		width:0.95rem;
		margin-right:0.2rem;
		height:0.95rem;
		border-radius: 50%;
		border:1px solid white;
	}
	.user_title_left p{
		font-size:0.24rem;
		color:white;
		display: flex;
		flex-direction: column;
		align-items:flex-start;
	}
</style>
