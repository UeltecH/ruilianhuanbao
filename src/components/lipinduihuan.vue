<template>
	<div>
		<div class="title">
			<span>【兑换说明】</span>
			<div class="title_info">
				<p>尊敬的用户：</p>
				<p class='text_index'>您好！小睿已为您准备好上百种精美礼品，请根据您的积分兑换您喜爱的礼品。</p>
				<p>如现有积分不够，您可通过以下方式增长积分：</p>
				<div>
					<p>
						<span>1.点击右方您的专属海报，分享给好友，关注睿联环保公众号，一个直接好友关注，平台赠送5分；一个间接好友关注，平台赠送3分。</span>
						<span>2.若您家需要除甲醛，如签单金额为3000元，则平台自动赠送您3000积分。</span>
						<span>3.在会员中心每周签到，每次赠送5分。</span>
					</p>
					<img src="../assets/haibao.jpg" alt="海报">
				</div>
			</div>
		</div>
		<dianzi></dianzi>
		<div class="commen">
			<p class="commen_title">
				<span class='line'></span>
				<span>兑换专区</span>
				<span class='line'></span>
			</p>
			<div class="chose_commen">
				<p :class='chosed==0?"chosed":""' @click="chose_commen(0)">1500-5000</p>
				<p :class='chosed==1?"chosed":""' @click="chose_commen(1)">5000-10000</p>
				<p :class='chosed==2?"chosed":""' @click="chose_commen(2)">10000以上</p>
			</div>
			<ul class='commen_list' v-for="(item,index) in list" :key="index">
				<router-link  v-for="(ite,idx) in item" :to="{path:'commendetail',query:{id:ite.id}}" class='li_border' :key="idx">
					<li>
						<img :src="ite.img" alt="商品图片">
						<p class='commen_name'>{{ite.commen_name}}</p>
						<p class='commen_money'>需要积分：<span class='red'>{{ite.commen_money1}}分</span></p>
						<p class='commen_money'>京东售价：<span class='red'>{{ite.commen_money2}}元</span></p>
					</li>
				</router-link>
				<img src="../assets/guanggao.png" alt="广告" class='guanggao' v-if="index+1 != list.length">
			</ul>
		</div>
	</div>
</template>

<script>
	import dianzi from "../temp/dianzi.vue"
	export default{
		components:{dianzi:dianzi},
		data(){
			return{
				chosed:0,
				list:[
					[
						{
							img:require('../assets/commen.jpg'),
							commen_name:'活性炭光触媒去除甲醛固体空气清新剂350g',
							commen_money1:"2500",
							commen_money2:'2500',
							id:'1'
						},
						{
							img:require('../assets/commen.jpg'),
							commen_name:'活性炭光触媒去除甲醛固体空气清新剂350g',
							commen_money1:"2500",
							commen_money2:'2500',
							id:'1'
						},
						{
							img:require('../assets/commen.jpg'),
							commen_name:'活性炭光触媒去除甲醛固体空气清新剂350g',
							commen_money1:"2500",
							commen_money2:'2500',
							id:'1'
						},
						{
							img:require('../assets/commen.jpg'),
							commen_name:'活性炭光触媒去除甲醛固体空气清新剂350g',
							commen_money1:"2500",
							commen_money2:'2500',
							id:'1'
						},
						{
							img:require('../assets/commen.jpg'),
							commen_name:'活性炭光触媒去除甲醛固体空气清新剂350g',
							commen_money1:"2500",
							commen_money2:'2500',
							id:'1'
						},
					],
					[
						{
							img:require('../assets/commen.jpg'),
							commen_name:'活性炭光触媒去除甲醛固体空气清新剂350g',
							commen_money1:"2500",
							commen_money2:'2500',
							id:'1'
						},
						{
							img:require('../assets/commen.jpg'),
							commen_name:'活性炭光触媒去除甲醛固体空气清新剂350g',
							commen_money1:"2500",
							commen_money2:'2500',
							id:'1'
						},
						{
							img:require('../assets/commen.jpg'),
							commen_name:'活性炭光触媒去除甲醛固体空气清新剂350g',
							commen_money1:"2500",
							commen_money2:'2500',
							id:'1'
						},
						{
							img:require('../assets/commen.jpg'),
							commen_name:'活性炭光触媒去除甲醛固体空气清新剂350g',
							commen_money1:"2500",
							commen_money2:'2500',
							id:'1'
						},
						{
							img:require('../assets/commen.jpg'),
							commen_name:'活性炭光触媒去除甲醛固体空气清新剂350g',
							commen_money1:"2500",
							commen_money2:'2500',
							id:'1'
						},
					],
				]
			}
		},
		methods:{
			chose_commen:function(e){
				this.chosed = e
			}
		}
	}
</script>

<style scoped>
	.guanggao{
		width:6.9rem;
		height:1.37rem;
		display: block;
		margin:0 auto;
		margin-bottom:0.35rem;
	}
	.commen_money{
		margin-top:0.1rem;
		color:#666!important;
	}
	.red{
		color:#FF0000!important;
	}
	.commen_list li p{
		font-size: 0.275rem;;
	}
	.li_border{
		width:3.35rem;
		margin-bottom:0.35rem;
		height:5.4rem;
		text-decoration-line:none;
	}
	.commen_list li{
		width:3.35rem;
		height:5.4rem;
	}
	.commen_name{
		height:0.76rem;
		width:100%;
		color:#232323;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.commen_list li img{
		width:3.35rem;
		height:3.35rem;
		border:1px solid #d2d2d2;
		border-radius: 0.1rem;
	}
	.commen_list .li_border:nth-child(odd){
		margin-right: 0.2rem;
	}
	.commen_list{
		list-style: none;
		width:6.9rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		margin:0 auto!important;
	}
	.chose_commen p.chosed{
		background:#33BB33;
		color:white;
	}
	.chose_commen p{
		padding:0.15rem 0.3rem;
		border:1px solid #cccccc;
		border-radius: 0.1rem;
		margin:0 0.075rem;
	}
	.chose_commen{
		margin:0.2rem 0;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.28rem;
		color:#666666;
	}
	.line{
		display: inline-block;
		width:0.8rem;
		height:0.02rem;
		background: #999999;
		margin: 0 0.45rem;
	}
	.commen_title{
		border-bottom:1px solid #F0F0F0;
		padding: 0.4rem 0;
		font-size: 0.34rem;
		color:#333;
		display: flex;
		justify-content: center;
		align-items: center;
		clear: both;
	}
	.commen{
		background:white;
	}
	.text_index{
		text-indent: 0.64rem;
	}
	.title_info>div>p{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-indent:0.64rem;
		float:left;
		width:3.9rem;
	}
	.title_info>div{
		height:6rem;
	}
	.title_info img{
		width:2.98rem;
		height:5.29rem;
		float:right;
	}
	.title>span{
		font-size: 0.32rem;
		color:#33BB33;
	}
	.title_info{
		line-height: 0.5rem;
		width:6.9rem;
		margin:0 auto;
		font-size:0.28rem;
		min-height:6.75rem;
		word-wrap:break-word;
	}
	
	
</style>
