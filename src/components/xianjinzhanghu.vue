<template>
	<div class='outer'>
		<user_title></user_title>
		<dianzi></dianzi>
		<div class="main">
			<div class="main_title">
				<div class="main_title_left">盈利说明</div>
				<div :class="title_chosed==1?'main_title_left title_chosed':'main_title_left'" @click="chosed(1)">现金明细</div>
				<div :class="title_chosed==0?'main_title_right title_chosed':'main_title_right'" @click="chosed(0)">提现明细</div>
				<div :class="title_chosed==2?'main_title_right title_chosed':'main_title_right'" @click="chuangyejiangjin()" >创业奖金</div>
			</div>
		</div>
		<ul class="list" v-if="title_chosed == 0">
			<li v-for="item in list">
				<p>
					<span>提现到：{{item.card_mun}}</span>
					<span>
						<b>{{item.card_money}}</b>
					</span>
				</p>
				<p>
					<span>余额：{{item.yue}}</span>
					<span>{{item.date}}</span>
				</p>
			</li>
			<div class="dadianzi"></div>
		</ul>
		
		
		<ul class='list2' v-if="title_chosed==1">
			<li v-for="item in list2">
				<div class='list_up'>
					<div class="list_up_left">
						<span>{{item.status}}</span>
						<img :src="item.user_img" alt="头像">
						<span>{{item.name}}</span>
					</div>
					<div class="list_up_right">
						<span>奖励比例：{{item.bili}}</span>
						<span>
							<b>贡献：{{item.gongxian}}元</b>
						</span>
					</div>
				</div>
				
				<div class="list_down">
					<p>关注时间：{{item.guanzhu}}</p>
					<p>消费时间：{{item.xiaofei}}</p>
				</div>
			</li>
			<div class="dadianzi"></div>
		</ul>
		
		
		<ul class='list3' v-if="title_chosed==2">
			<li v-for="item in list3">
				<div class='list_up'>
					<div class="list_up_left">
						<span>{{item.status}}</span>
						<img :src="item.user_img" alt="头像">
						<span>{{item.name}}</span>
					</div>
					<div class="list_up_right">
						<span>
							<b>返还金额：{{item.gongxian}}元</b>
						</span>
					</div>
				</div>
				
				<div class="list_down">
					<p>关注时间：{{item.guanzhu}}</p>
					<p>消费时间：{{item.xiaofei}}</p>
				</div>
			</li>
			<div class="dadianzi"></div>
		</ul>
		
		 
		
		<button class='tixian' @click="tixian" v-if="title_chosed!=2">提现</button>
	</div>
</template>

<script>
	import dianzi from '../temp/dianzi';
	import user_title from '../temp/user_title';
	export default{
		// 引入dianzi
		components:{dianzi:dianzi,user_title:user_title},
		data(){
			return{
				title_chosed:1,
				list:[
					{
						card_mun:'6217***0043',
						card_money:'-200.00',
						yue:'1719.00',
						date:"2019-11-22  15:19"
					},
					{
						card_mun:'6217***0043',
						card_money:'-200.00',
						yue:'1719.00',
						date:"2019-11-22  15:19"
					},
					{
						card_mun:'6217***0043',
						card_money:'-200.00',
						yue:'1719.00',
						date:"2019-11-22  15:19"
					},
					{
						card_mun:'6217***0043',
						card_money:'-200.00',
						yue:'1719.00',
						date:"2019-11-22  15:19"
					},
					{
						card_mun:'6217***0043',
						card_money:'-200.00',
						yue:'1719.00',
						date:"2019-11-22  15:19"
					},
					{
						card_mun:'6217***0043',
						card_money:'-200.00',
						yue:'1719.00',
						date:"2019-11-22  15:19"
					},
					{
						card_mun:'6217***0043',
						card_money:'-200.00',
						yue:'1719.00',
						date:"2019-11-22  15:19"
					},
					{
						card_mun:'6217***0043',
						card_money:'-200.00',
						yue:'1719.00',
						date:"2019-11-22  15:19"
					},
					{
						card_mun:'6217***0043',
						card_money:'-200.00',
						yue:'1719.00',
						date:"2019-11-22  15:19"
					},
					{
						card_mun:'6217***0043',
						card_money:'-200.00',
						yue:'1719.00',
						date:"2019-11-22  15:19"
					},
				],
				list2:[
					{
						status:'直接好友',
						user_img:require("../assets/user.png"),
						name:'黑富美',
						bili:'5%',
						gongxian:'+200',
						guanzhu:'2019.11.20',
						xiaofei:'2019.11.24'
					},
					{
						status:'间接好友',
						user_img:require("../assets/user.png"),
						name:'黑富美1',
						bili:'7%',
						gongxian:'+10000',
						guanzhu:'2019.11.20',
						xiaofei:'2019.11.24'
					},
					{
						status:'直接好友',
						user_img:require("../assets/user.png"),
						name:'黑富美',
						bili:'5%',
						gongxian:'+200',
						guanzhu:'2019.11.20',
						xiaofei:'2019.11.24'
					},
					{
						status:'间接好友',
						user_img:require("../assets/user.png"),
						name:'黑富美1',
						bili:'7%',
						gongxian:'+10000',
						guanzhu:'2019.11.20',
						xiaofei:'2019.11.24'
					},
					{
						status:'直接好友',
						user_img:require("../assets/user.png"),
						name:'黑富美',
						bili:'5%',
						gongxian:'+200',
						guanzhu:'2019.11.20',
						xiaofei:'2019.11.24'
					},
					{
						status:'间接好友',
						user_img:require("../assets/user.png"),
						name:'黑富美1',
						bili:'7%',
						gongxian:'+10000',
						guanzhu:'2019.11.20',
						xiaofei:'2019.11.24'
					},
					{
						status:'直接好友',
						user_img:require("../assets/user.png"),
						name:'黑富美',
						bili:'5%',
						gongxian:'+200',
						guanzhu:'2019.11.20',
						xiaofei:'2019.11.24'
					},
					{
						status:'间接好友',
						user_img:require("../assets/user.png"),
						name:'黑富美1',
						bili:'7%',
						gongxian:'+10000',
						guanzhu:'2019.11.20',
						xiaofei:'2019.11.24'
					},
					{
						status:'直接好友',
						user_img:require("../assets/user.png"),
						name:'黑富美',
						bili:'5%',
						gongxian:'+200',
						guanzhu:'2019.11.20',
						xiaofei:'2019.11.24'
					},
					{
						status:'间接好友',
						user_img:require("../assets/user.png"),
						name:'黑富美1',
						bili:'7%',
						gongxian:'+10000',
						guanzhu:'2019.11.20',
						xiaofei:'2019.11.24'
					},
				],
				list3:[
					{
						status:'直接好友',
						user_img:require("../assets/user.png"),
						name:'黑富美',
						gongxian:'+200',
						guanzhu:'2019.11.20',
						xiaofei:'2019.11.24'
					},
					{
						status:'直接好友',
						user_img:require("../assets/user.png"),
						name:'黑富美',
						gongxian:'+200',
						guanzhu:'2019.11.20',
						xiaofei:'2019.11.24'
					},
					{
						status:'直接好友',
						user_img:require("../assets/user.png"),
						name:'黑富美',
						gongxian:'+200',
						guanzhu:'2019.11.20',
						xiaofei:'2019.11.24'
					},
					{
						status:'直接好友',
						user_img:require("../assets/user.png"),
						name:'黑富美',
						gongxian:'+200',
						guanzhu:'2019.11.20',
						xiaofei:'2019.11.24'
					},
					{
						status:'直接好友',
						user_img:require("../assets/user.png"),
						name:'黑富美',
						gongxian:'+200',
						guanzhu:'2019.11.20',
						xiaofei:'2019.11.24'
					},
					{
						status:'直接好友',
						user_img:require("../assets/user.png"),
						name:'黑富美',
						gongxian:'+200',
						guanzhu:'2019.11.20',
						xiaofei:'2019.11.24'
					},
					{
						status:'直接好友',
						user_img:require("../assets/user.png"),
						name:'黑富美',
						gongxian:'+200',
						guanzhu:'2019.11.20',
						xiaofei:'2019.11.24'
					},
					{
						status:'直接好友',
						user_img:require("../assets/user.png"),
						name:'黑富美',
						gongxian:'+200',
						guanzhu:'2019.11.20',
						xiaofei:'2019.11.24'
					},
					{
						status:'直接好友',
						user_img:require("../assets/user.png"),
						name:'黑富美',
						gongxian:'+200',
						guanzhu:'2019.11.20',
						xiaofei:'2019.11.24'
					}
				]
			}
		},
		methods:{
			chosed:function(e){
				this.title_chosed = e
			},
			tixian:function(e){
				this.$router.push("/tixian")
			},
			chuangyejiangjin:function(){
				this.$router.push({
					path:'chuangyejiangjin'
				})
			}
		},
		mounted:function(){
			if(this.$route.params.status == 1){
				this.title_chosed = 2
			}
		}
	}
</script>

<style scoped>
	.list3 .list_up_right span{
		margin-right:0!important;
	}
	.list3 .dadianzi{
		background:#f5f5f5;
	}
	.list3,.list,.main{
		background: white;
	}
	
	.list3 b{
		color:#333;
	}
	.list3 li>div:first-child{
		margin-bottom:0.2rem;
	}
	.list3 li>div{
		display:flex;
		width:100%;
		justify-content: space-between;
		align-items: center;
	}
	.list3 li{
		font-size:0.24rem;
		color:#666;
		height:1.3rem;
		width:6.9rem;
		margin:0 0.3rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		border-top:1px solid #f0f0f0;
	}
	.list3 li img{
		width:0.3rem;
		height:0.3rem;
		border-radius: 50%;
		border:1px solid #f0f0f0;
		margin:0 0.1rem;
	}
	
	
	
	.list_up_right span:nth-child(1){
		margin-right:0.2rem;
	}
	.list_up_left{
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.list2,.list,.main{
		background: white;
	}
	
	.list2 b{
		color:#333;
	}
	.list2 li>div:first-child{
		margin-bottom:0.2rem;
	}
	.list2 li>div{
		display:flex;
		width:100%;
		justify-content: space-between;
		align-items: center;
	}
	.list2 li{
		font-size:0.24rem;
		color:#666;
		height:1.3rem;
		width:6.9rem;
		margin:0 0.3rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		border-top:1px solid #f0f0f0;
	}
	.list2 li img{
		width:0.3rem;
		height:0.3rem;
		border-radius: 50%;
		border:1px solid #f0f0f0;
		margin:0 0.1rem;
	}
	.main_title>div:nth-child(2){
		border-right:none!important;
	}
	.outer{
		width:100%;
		height:100%;
	}
	.dadianzi{
		height:1.1rem;
		width: 100%;
	}
	.tixian{
		position:fixed;
		left:0;
		bottom:0;
		height:1.1rem;
		width: 100%;
		background:#33bb33;
		text-align: center;
		line-height: 1.1rem;
		border:none;
		outline: none;
		font-size:0.36rem;
		color:white;
	}
	.list li p:nth-child(2){
		font-size: 0.24rem;
	}
	.list li p:nth-child(1){
		margin-bottom:0.1rem;
	}
	.list li p{
		width:100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.list li p:nth-child(1) span:nth-child(1){
		font-size: 0.24rem;
		color:#333;
	}
	.list li p:nth-child(1) span:nth-child(2){
		font-size: 0.28rem;
		color:#333;
	}
	.list,.list2{
		flex:1;
		list-style: none;
	}
	.list li{
		height:1.3rem;
		width:6.9rem;
		margin:0 auto;
		border-top: 1px solid #f0f0f0;
		display: flex;
		flex-direction:column;
		align-items: flex-start;
		justify-content: center;
	}
	.title_chosed{
		color:#33bb33!important;
		font-weight: bold;
	}
	.main_title_left{
		border-right:0.005rem solid #f0f0f0;
	}
	.main_title_right{
		border-left:0.005rem solid #f0f0f0;
	}
	.main_title>div{
		font-size: 0.32rem;
		color:#333;
		width:50%;
		height:100%;
		text-align: center;
		line-height: 0.6rem;
	}
	.main_title{
		width:6.9rem;
		margin:0 auto;
		height: 0.6rem;
		padding:0.2rem 0;
		display:flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
