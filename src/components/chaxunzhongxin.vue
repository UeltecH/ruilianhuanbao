<template>
	<div class="chaxunzhongxin">
		<span>请输入手机号码进入查询中心</span>
		<div class="inp">
			<span>手机号：</span>
			<input type="number" placeholder="请输入手机号" v-model="phone">
		</div>
		<div class="submit" @click="submit()">提交</div>
	</div>
</template>

<script>
	import {Toast} from "mint-ui";
	export default{
		data(){
			return{
				phone:''
			}
		},
		methods:{
			submit:function(){
				let test = /^[1]([3-9])[0-9]{9}$/;
				if(!test.test(this.phone)){
					Toast({
						message:'请输入正确的手机号',
						duration:1000
					});
					return
				}else{
					console.log("手机号对")
					this.$router.push({
						path:'/chaxunliebiao'
					})
				}
			}
		}
	}
</script>

<style scoped>
	.inp input{
		font-size:0.32rem;
		width:70%;
		height:80%;
		margin-top:0.08rem;
		border:none;
		outline: none;
	}
	.inp>span{
		margin-left:0.3rem;
	}
	.submit{
		width:5.9rem;
		height:0.9rem;
		font-size:0.36rem;
		color:white;
		background:#33BB33;
		border-radius: 0.15rem;
		text-align: center;
		line-height:0.9rem;
	}
	.inp{
		margin:0.5rem 0 0.3rem 0;
		width:5.9rem;
		height:0.9rem;
		border:1px solid #ccc;
		border-radius: 0.15rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size:0.32rem;
	}
	.chaxunzhongxin{
		width:100%;
		display:flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}
	.chaxunzhongxin>span{
		margin-top:2rem;
		font-size:0.4rem;
		color:#333;
	}
</style>
