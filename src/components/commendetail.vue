<template>
	<div>
		<mt-swipe :auto="4000" class='loop'>
		  <mt-swipe-item v-for="(item,index) in img_list"  class='loop' :key="index">
			  <img :src="item" alt="轮播图" class='loop'>
		  </mt-swipe-item>
		</mt-swipe>
		<p class='commen_info'>
			<span>活性炭光触媒去除甲醛固体空气清新剂350g</span>
			<span>需要积分：<span class='red'>2500分</span></span>
			<span>京东售价：<span class='red'>2500元</span></span>
		</p>
		<dianzi></dianzi>
		<div class="detail">
			商品详情
		</div>
		<img src="../assets/commen_detail.jpg" alt="商品详情" class='detail_img'>
		<div class="bottom_dianzi"></div>
		<div class="buy" @click='changetip()'>立即购买</div>
		
		<div class="shibai" v-if="show_tip" @click="guanbi()">
			<img src="../assets/duihuanshibai.png" alt="兑换失败" @click.stop='maopao($event)'>
			<div class="shibai_main" @click.stop='maopao($event)'>
				<div class="shibai_tip" @click.stop='maopao($event)'>
					<span>积分不足，不能兑换该商品</span>
					<div class="morejifen">
						获取更多积分
					</div>
				</div>
				<div class="guanbi_border" @click="guanbi()">
					<div class="guanbi">×</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	import dianzi from '../temp/dianzi.vue'
	export default{
		components:{dianzi:dianzi},
		data(){
			return{
				img_list:[
					require("../assets/loop.png"),
					require("../assets/haibao.jpg"),
					require("../assets/jifenzhanghu.png"),
					require("../assets/kefu.png"),
					require("../assets/lipinduihuan.png"),
				],
				show_tip:false
			}
		},
		mounted:function(){
			console.log(this.$route.query)
		},
		methods:{
			changetip:function(){
				let a = Math.round(Math.random()*1)
				if(a == 0){
					this.show_tip = !this.show_tip
				}else{
					this.$router.push("/duihuanxinxi")
				}
				
			},
			guanbi:function(){
				this.show_tip = !this.show_tip
			},
			maopao:function(e){
				console.log("阻止冒泡")
			}
		}
	}
</script>

<style scoped>
	.guanbi_border{
		width:100%;
		height:0.6rem;
		margin-top:0.15rem;
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
		background:rgba(0,0,0,.5);
		color:white;
		font-size:0.5rem;
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
		bottom:6rem;
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
	.buy{
		width:100%;
		height:1.1rem;
		background: #33BB33;
		color:white;
		text-align: center;
		line-height:1.1rem;
		position:fixed;
		bottom:0;
		left:0;
		z-index:999;
		font-size:0.36rem;
	}
	.bottom_dianzi{
		width:100%;
		height:1.1rem;
	}
	.detail_img{
		width:100%;
	}
	.detail{
		width:100%;
		height:1.1rem;
		text-align: center;
		line-height:1.1rem;
		font-size:0.34rem;
		color:#333;
		background: white;
	}
	.commen_info>span:nth-child(2){
		margin:0.1rem 0;
	}
	.commen_info{
		padding:0.3rem;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		font-size: 0.3rem;
		flex-direction: column;
		background: white;
	}
	.loop{
		width:7.5rem;
		height:7.5rem;
	}
</style>
