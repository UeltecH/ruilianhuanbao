<template>
	<div class="yaoqinghaoyou">
		<img :src="img" alt="邀请好友">
		<div class='shengchenghaibao' @click="shengcheng" v-if="is_show">生成海报</div>
		
		<mt-popup v-model="popupVisible" class='round'>
			<div class="middle">
				<span>【邀请好友关注平台奖励政策】</span>
				<span>1.邀请1个直接好友关注，平台奖励5分；</span>
				<span>2.直接好友再次邀请其好友关注，平台再次奖励您3分；</span>
				<span>3.积分可作累计，在“礼品兑换”专区兑换礼品；</span>
				<div class="queding" @click="queding">确定</div>
			</div>
		</mt-popup>
	</div>
</template>

<script>
	import { Popup } from 'mint-ui';
	export default{
		data(){
			return{
				is_show:true,
				popupVisible:true,
				img:require("../assets/yaoqinghaoyou_null.jpg")
			}
		},
		methods:{
			queding(){
				this.popupVisible = !this.popupVisible
			},
			shengcheng(){
				this.img = require("../assets/yaoqinghaoyou_has.jpg")
				this.is_show = !this.is_show
			}
		}
	}
</script>

<style scoped>
	.queding{
		width:4.1rem;
		height:0.9rem;
		border-radius: 0.5rem;
		color:white;
		background:#33BB33;
		text-align: center;
		line-height:0.9rem;
		font-size:0.32rem;
		margin:0.5rem auto;
	}
	.middle span:nth-child(1){
		color:#33BB33!important;
		margin:0.45rem auto 0.3rem auto;
		text-align: center;
		font-size:0.32rem!important;
	}
	.middle span{
		color:#666;
		line-height:0.5rem;
		width:5.3rem;
		margin:0 auto;
		font-size:0.28rem;
	}
	.middle{
		display:flex;
		flex-direction: column;
		align-items:flex-start;
	}
	.round{
		border-radius:0.15rem;
	}
	.middle{
		border-radius:0.15rem;
		width:5.9rem;
		height:5.75rem;
		background-color: white;
	}
	.shengchenghaibao{
		width:6.5rem;
		position:absolute;
		bottom:1.4rem;
		left:0.5rem;
		height:1rem;
		border-radius: 0.15rem;
		background:#33BB33;
		text-align: center;
		line-height:1rem;
		color:white;
		font-size:0.36rem;
		z-index:3;
	}
	.yaoqinghaoyou img{
		position:absolute;
		top:0;
		left:0;
		z-index:2;
		width:100%;
		height:100%;
	}
	.yaoqinghaoyou{
		position:relative;
		min-height:100%;
	}
</style>
