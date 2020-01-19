<template>
	<div>
		<img src="../assets/hongbao.jpg" alt="领取红包" class='hongbao_title'>
		<div class="content">
			<span class='green'>【领取红包说明】</span>
			<span>1.小睿为感谢您的首次关注，特意准备500积分塞进红包；</span>
			<span>2.红包积分可在公众号内“礼品兑换”专区免费领取；</span>
			<span>3.所有礼品均为国际/国内一线品牌(均为正品）；</span>
			<span>4.所有礼品均在京东商城销售，积分金额1 : 1等同京东销售价格；</span>
			<span>5.本次特惠活动仅限于天津地区（含四郊五县）；</span>
			<span>6.请输入天津本地手机号码登录，用于后期礼品领取；</span>
		</div>
		<div class="inp">
			<input type="number" placeholder="请输入天津本地手机号码，以便领取超值大礼" v-model="phone">
			<div class="sub" @click="submit()">领取红包</div>
		</div>
		
		
		<div class="shibai" @click="guanbi()" v-if="show_tip==1">
			<img src="../assets/lingqushibai.png" alt="兑换失败" @click.stop='maopao($event)'>
			<div class="shibai_main" @click.stop='maopao($event)'>
				<div class="shibai_tip" @click.stop='maopao($event)'>
					<span>您已领取新人专属红包</span>
					<div class="morejifen" @click="duihuanlipin()">
						兑换礼品
					</div>
				</div>
			</div>
		</div>
		<div class="shibai" @click="guanbi()" v-if="show_tip==2">
			<img src="../assets/lingquchenggong.png" alt="兑换失败" @click.stop='maopao($event)'>
			<div class="shibai_main" @click.stop='maopao($event)'>
				<div class="shibai_tip" @click.stop='maopao($event)'>
					<span>成功领取<span class='green'>500</span>积分</span>
					<div class="morejifen" @click="duihuanlipin()">
						兑换礼品
					</div>
					<div class="guanbi_border" @click="guanbi()">
						<div class="guanbi">×</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import {Toast} from "mint-ui";
	export default{
		data(){
			return{
				show_tip:0,
				phone:''
			}
		},
		methods:{
			guanbi:function(){
				this.show_tip = 0
			},
			maopao:function(e){
				console.log("阻止冒泡")
			},
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
					// axios.get("http://tcc.taobao.com/cc/json/mobile_tel_segment.htm",{
					// 	params:{
					// 		tel:this.phone
					// 	}
					// }).then(function(res){
					// 	console.log(res)
					// })
					let count = Math.floor(Math.random()*2)+1
					this.show_tip = count
				}
			},
			duihuanlipin:function(){
				this.$router.push({
					path:'/lipinduihuan'
				})
			}
		}
	}
</script>

<style scoped>
	.guanbi_border{
		width:100%;
		height:0.6rem;
		margin-top:0.7rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.guanbi{
		width:0.6rem;
		height:0.6rem;
		border-radius: 50%;
		text-align: center;
		line-height:0.6rem;
		border:1px solid white;
		color:white;
		font-size:0.5rem;
	}
	.shibai_tip .green{
		margin:0 0.1rem;
		font-size:0.4rem!important;
	}
	.morejifen{
		width:3.8rem;
		height:0.8rem;
		background:#33BB33;
		color:white;
		font-size:0.32rem;
		margin:0 auto;
		text-align: center;
		line-height:0.8rem;
		border-radius: 0.5rem;
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
	.shibai_main{
		width:6rem;
		height:4.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		font-size:0.3rem;
		color:#333;
	}
	.shibai img{
		position:absolute;
		top:0rem;
		left:0;
		right:0;
		bottom:5.5rem;
		margin:auto;
		z-index:9998;
		width:4.65rem;
		height:2.51rem;
	}
	.shibai_main{
		position: absolute;
		top:0;
		left:0;
		right:0;
		bottom:0;
		margin:auto;
	}
	.shibai{
		width:100%;
		height:100%;
		background:rgba(0,0,0,.4);
		position: fixed;
		top:0;
		left:0;
		right:0;
		bottom:0;
		margin:auto;
		z-index:9999;
	}
	.sub{
		width:6.45rem;
		border-radius: 0.15rem;
		height:0.95rem;
		margin:0 auto;
		display: block;
		text-align: center;
		background:#33BB33;
		color:white;
		font-size:0.36rem;
		line-height:0.95rem;
		margin-top:0.35rem;
	}
	.inp input{
		width:6.45rem;
		border:1px solid #cccccc;
		border-radius: 0.15rem;
		height:0.95rem;
		margin:0 auto;
		display: block;
		margin-top:0.55rem;
		text-align: center;
		outline: none;
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
