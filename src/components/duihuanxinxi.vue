<template>
	<div class='back'>
		<div class="title">
			<img src="../assets/commen.jpg" alt="商品图片">
			<div class="title_info">
				<p>活性炭光触媒去除甲醛固体空气清新剂350g</p>
				<span class='red'>2500积分</span>
			</div>
		</div>
		<div class="tip">
			<p class='green'>【兑换说明】</p>
			<p>建议您到公司领取礼品，可额外获赠惊喜礼品和200积分；如需快递，运费到付</p>
		</div>
		<ul class='inp_list'>
			<li>
				<span>填写兑换信息</span>
			</li>
			<li>
				<span>姓名</span>
				<input type="text" placeholder="请填写您的姓名" v-model="name">
			</li>
			<li>
				<span>手机号</span>
				<input type="number" placeholder="请填写您的手机号" v-model="phone">
			</li>
			<li>
				<span>领取方式</span>
				<div class="chose">
					<div @click="chose_kuaidi(0)">
						<img :src="chose=='0'?yes:no" alt="选择" class="point">
						<span>到店自取</span>
					</div>
					<div @click="chose_kuaidi(1)">
						<img :src="chose=='1'?yes:no" alt="选择" class="point">
						<span>快递（默认到付）</span>
					</div>
				</div>
			</li>
			<li>
				<span>公司地址</span>
				<input type="text" :value="addr" readonly='readonly'>
			</li>
			
		</ul>
		<div class="submit" @click='submit()'>提交</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		data(){
			return{
				yes:require('../assets/chosed_dui.png'),
				no:require("../assets/dui.png"),
				addr:'天津市南开区红旗路慧谷大厦',
				chose:"0",
				name:'',
				phone:''
			}
		},
		methods:{
			chose_kuaidi:function(e){
				this.chose = e
			},
			submit:function(){
				let test =  /^[\u4e00-\u9fa5][\u4e00-\u9fa5]{1,5}$/;
				let test1 = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
				if(!test.test(this.name)){
					Toast({
						message:'请填写正确的名字',
						duration:1000
					});
					return
				}
				if(!test1.test(this.phone)){
					Toast({
						message:'请填写正确的手机号',
						duration:1000
					});
					return
				}
				this.$router.push({
					path:'/duihuanchenggong'
				})
			}
		}
	}
</script>

<style scoped>
	.back{
		background: #f5f5f5;
		height: 100%;
	}
	.submit{
		width:6.5rem;
		hegiht:1rem;
		border-radius: 0.15rem;
		background:#33BB33;
		color:white;
		font-size:0.36rem;
		text-align: center;
		line-height: 1rem;
		margin:0.45rem auto;
	}
	.point{
		width:0.3rem;
		height:0.3rem;
		border-radius: 50%;
		margin-right:0.1rem;
	}
	.chose>div>span{
		white-space: nowrap;
	}
	.chose>div{
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.chose{
		width:70%;
		font-size:0.28rem;
		height:100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.inp_list li:first-child span{
		width:100%!important;
	}
	.inp_list li input[type='text'],.inp_list li input[type='number']{
		height:90%;
		font-size:0.28rem;
		border:none;
		outline: none;
		width:70%;
	}
	.inp_list li{
		width:100%;
		border-bottom:1px solid #f0f0f0;
		height:1rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.inp_list li span{
		font-size:0.32rem;
		display: inline-block;
		width:1.6rem;
	}
	.inp_list{
		width:6.9rem;
		margin:auto;
		list-style: none;
		background:white;
		padding:0 0.3rem;
	}
	.tip{
		width:6.9rem;
		padding:0.2rem 0.3rem 0.5rem 0.3rem;
		background: #f5f5f5;
		line-height: 0.45rem;
	}
	.tip p{
		font-size:0.28rem;
		color:#666;
	}
	.tip p.green{
		font-size:0.32rem;
		font-weight: bold;
		color:#33BB33;
	}
	.title img{
		width:1.35rem;
		height:1.35rem;
		border:1px solid #e6e6e6;
		border-radius: 0.15rem;
		margin-right:0.3rem;
	}
	.title_info>p{
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.title{
		background: white;
		padding:0 0.3rem;
		margin:0 auto;
		padding-top:0.37rem;
		padding-bottom: 0.45rem;
		width:6.9rem;
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
	}
	.red{
		color:red;
		font-size:0.28rem;
		margin-top:0.1rem;
	}
	.title_info{
		line-height: 0.4rem;
		font-size:0.32rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
	}
</style>






