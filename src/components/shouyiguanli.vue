<template>
	<div class='shouyiguanli'>
		<div class='user_title'>
			<div class="user_title_left">
				<img src="../assets/user.png" alt="头像">
				<p>
					<span>黑富美</span>
					<span>享受待遇：无忧创业</span>
					<span>会员等级：金牌合伙人</span>
				</p>
			</div>
		</div>
		<div class="main">
			<div class="main_title">
				<div :class="title == '0'?'main_title_left title_chosed':'main_title_left'" @click='chose_title(0)'>
					<p>￥1200.00</p>
					<p>现金账户</p>
				</div>
				<div :class="title == '1'?'main_title_right title_chosed':'main_title_right'" @click='chose_title(1)'>
					<p>5000</p>
					<p>积分账户</p>
				</div>
			</div>
		</div>
		<ul class="list" v-if="title==0">
			<li v-for="item in list">
				<p>
					<span>提现到：{{item.card_mun}}</span>
					<span>
						<b>{{item.status==0?'贡献：+':"-"}}{{item.card_money}}</b>
					</span>
				</p>
				<p>
					<span>余额：{{item.yue}}</span>
					<span>消费时间：{{item.date}}</span>
				</p>
			</li>
			<div class="dadianzi"></div>
		</ul>
		<ul class="main" v-if="title==1">
			<li class='green'>
				<div class='xuhao'>序号</div>
				<div class='jifen'>获得积分</div>
				<div class='laiyuan'>来源</div>
				<div class='shijian'>时间</div>
			</li>
			<li v-for="item in list2">
				<div class='xuhao'>{{item.xuhao}}</div>
				<div class='jifen'>{{item.status==5?'-':"+"}}{{item.jifen}}</div>
				<div class='laiyuan' v-if="item.status!=2&&item.status!=3">{{item.laiyuan}}</div>
				<div class='laiyuan' v-else>
					<p>
						<span>{{item.laiyuan}}</span>
						<span>关注奖励</span>
					</p>
					<img :src="item.user_img" alt="用户头像">
				</div>
				<div class='shijian'>{{item.shijian}}</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				title:"0",
				yue:"198.00",
				list:[
					{
						card_mun:'6217***0043',
						card_money:'200.00',
						yue:'1719.00',
						date:"2019-11-22 19:00",
						status:'0'
					},
					{
						card_mun:'6217***0043',
						card_money:'200.00',
						yue:'1719.00',
						date:"2019-11-22 19:00",
						status:'1'
					},
					{
						card_mun:'6217***0043',
						card_money:'200.00',
						yue:'1719.00',
						date:"2019-11-22 19:00",
						status:'0'
					},
					{
						card_mun:'6217***0043',
						card_money:'200.00',
						yue:'1719.00',
						date:"2019-11-22",
						status:'1'
					},
					{
						card_mun:'6217***0043',
						card_money:'200.00',
						yue:'1719.00',
						date:"2019-11-22",
						status:'0'
					},
					{
						card_mun:'6217***0043',
						card_money:'200.00',
						yue:'1719.00',
						date:"2019-11-22",
						status:'1'
					},
					{
						card_mun:'6217***0043',
						card_money:'200.00',
						yue:'1719.00',
						date:"2019-11-22",
						status:'0'
					},
					{
						card_mun:'6217***0043',
						card_money:'200.00',
						yue:'1719.00',
						date:"2019-11-22",
						status:'1'
					},
				],
				list2:[
					{
						xuhao:1,
						jifen:"500",
						status:2,
						laiyuan:"直接好友",
						user_img:require("../assets/user.png"),
						shijian:'2019.11.22 18:49'
					},
					{
						xuhao:2,
						jifen:"500",
						status:1,
						laiyuan:"关注平台奖励",
						user_img:'',
						shijian:'2019.11.22 18:49'
					},
					{
						xuhao:3,
						jifen:"500",
						status:5,
						laiyuan:"礼品兑换",
						user_img:'',
						shijian:'2019.11.22 18:49'
					},
					{
						xuhao:1,
						jifen:"500",
						status:2,
						laiyuan:"直接好友",
						user_img:require("../assets/user.png"),
						shijian:'2019.11.22 18:49'
					},
					{
						xuhao:2,
						jifen:"500",
						status:1,
						laiyuan:"关注平台奖励",
						user_img:'',
						shijian:'2019.11.22 18:49'
					},
					{
						xuhao:3,
						jifen:"500",
						status:5,
						laiyuan:"礼品兑换",
						user_img:'',
						shijian:'2019.11.22 18:49'
					},
					{
						xuhao:1,
						jifen:"500",
						status:2,
						laiyuan:"直接好友",
						user_img:require("../assets/user.png"),
						shijian:'2019.11.22 18:49'
					},
					{
						xuhao:2,
						jifen:"500",
						status:1,
						laiyuan:"关注平台奖励",
						user_img:'',
						shijian:'2019.11.22 18:49'
					},
					{
						xuhao:3,
						jifen:"500",
						status:5,
						laiyuan:"礼品兑换",
						user_img:'',
						shijian:'2019.11.22 18:49'
					},
				]
			}
		},
		methods:{
			chose_title(e){
				this.title = e
			}
		}
	}
</script>

<style scoped>
	.laiyuan p{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	ul.main{
		margin-top:0;
	}
	.laiyuan img{
		width:0.5rem;
		height:0.5rem;
		border:1px solid #cccccc;
		border-radius: 50%;
		margin-left:0.1rem;
	}
	.shijian{
		width:2.4rem;
		text-indent: 0.39rem;
	}
	.green .laiyuan{
		justify-content:center;
		text-indent: 0rem;
	}
	.laiyuan{
		width:1.8rem;
		display: flex;
		justify-content:flex-start;
		align-items: center;
		text-indent: 0.2rem;
	}
	.jifen{
		width:2.2rem;
		text-indent: 0.3rem;
	}
	.xuhao{
		width:0.5rem;
	}
	.green{
		color:#33BB33;
	}
	.main li>div{
		font-size:0.24rem;
		text-align: center;
	}
	.main li{
		border-top:1px solid #f0f0f0;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width:6.9rem;
		padding:0.3rem 0 ;
		margin:0 0.3rem;
		background:white;
	}
	.main li:first-child{
		font-size:0.32rem!important;
	}
	.main{
		margin-top:0.2rem;
	}
	.main,.list{
		background:white;
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
	}
	.main_title_left{
		border-right:0.005rem solid #f0f0f0;
	}
	.main_title_right{
		border-left:0.005rem solid #f0f0f0;
	}
	.main_title>div>p:nth-child(1){
		font-size:0.4rem;
	}
	.main_title>div>p:nth-child(2){
		font-size:0.24rem;
	}
	.main_title>div{
		height:0.91rem;
		font-size: 0.32rem;
		width:50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		color:#666666;
	}
	.main_title{
		width:6.9rem;
		margin:0 auto;
		padding:0.25rem 0;
		display:flex;
		justify-content: space-between;
		align-items: center;
	}
	.shouyiguanli{
		min-height:100%;
		background:#f5f5f5;
	}
	.user_title{
		background:url(../assets/xianjinzhanghu_title.png) 100% 100% no-repeat;
		background-size:cover;
		width:7.5rem;
		height:2.2rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.user_title_left{
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
