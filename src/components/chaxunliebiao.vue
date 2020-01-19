<template>
	<div class='chaxunliebiao'>
		<div class="title" v-if="list.length>0">尊敬的张先生，感谢您选择睿联环保</div>
		<ul class='list'>
			<li v-for='item in list'>
				<div class="list_title">
					<span class='list_title_left'>订单号：{{item.num}}</span>
					<span class='list_title_right'>{{item.status}}</span>
				</div>
				<div class="list_main">
					<p>
						<span>服务内容：</span>
						<span class='green'>{{item.neirong}}</span>
					</p>
					<p>
						<span>姓名：</span>
						<span>{{item.name}}&nbsp;&nbsp;&nbsp;{{item.phone}}</span>
					</p>
					<p>
						<span>地址：</span>
						<span>{{item.addr}}</span>
					</p>
				</div>
				<div class="list_money">
					<p>
						<span>检测数量：</span>
						<span>{{item.count}}个</span>
					</p>
					<p>
						<span>单价：</span>
						<span>{{item.parse}}元</span>
					<p>
					<p>
						<span>总金额：</span>
						<span>{{item.parse}}×{{item.count}}={{item.all}}元</span>
					</p>
				</div>
				
				<div class="btn_list">
					<div class="shenqingtuikuan" v-if="item.zhuangtai == 1" @click="shenqingtuikuan(item.status)">申请退款</div>
					<div class="zaixianzhifu" v-else @click="zaixianzhifu(item.status)">在线支付</div>
					<div class="chakanjindu" @click='chakanjindu(item.status)'>查看进度</div>
				</div>
			</li>
		</ul>
		
		<div class="nohave" v-if="list.length ==0">
			<img src="../assets/dingdankong.png" alt="">
			<span>亲，您还没订单！</span>
			<div class="duihuan" @click='jiance()'>我要检测</div>
		</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{	
						zhuangtai:1,
						num:'2019320123652',
						status:'待付款',
						neirong:'空气检测',
						name:'黑富美',
						phone:'15836598764',
						addr:'天津市南开区红旗路慧谷大厦1513-1516',
						count:'3',
						parse:'200',
						all:'600'
					},
					{
						zhuangtai:2,
						num:'2019320123652',
						status:'待付款',
						neirong:'空气检测',
						name:'黑富美',
						phone:'15836598764',
						addr:'天津市南开区红旗路慧谷大厦1513-1516',
						count:'3',
						parse:'200',
						all:'600'
					},
					{
						num:'2019320123652',
						status:'待付款',
						neirong:'空气检测',
						name:'黑富美',
						phone:'15836598764',
						addr:'天津市南开区红旗路慧谷大厦1513-1516',
						count:'3',
						parse:'200',
						all:'600',
						zhuangtai:1,
					},
					{
						num:'2019320123652',
						status:'待付款',
						neirong:'空气检测',
						name:'黑富美',
						phone:'15836598764',
						addr:'天津市南开区红旗路慧谷大厦1513-1516',
						count:'3',
						parse:'200',
						all:'600',
						zhuangtai:1,
					},
					{
						num:'2019320123652',
						status:'待付款',
						neirong:'空气检测',
						name:'黑富美',
						phone:'15836598764',
						addr:'天津市南开区红旗路慧谷大厦1513-1516',
						count:'3',
						parse:'200',
						all:'600',
						zhuangtai:2,
					},
					{
						num:'2019320123652',
						status:'待付款',
						neirong:'空气检测',
						name:'黑富美',
						phone:'15836598764',
						addr:'天津市南开区红旗路慧谷大厦1513-1516',
						count:'3',
						parse:'200',
						all:'600',
						zhuangtai:1,
					},
				]
			}
		},
		methods:{
			chakanjindu:function(e){
				this.$router.push({
					path:'/chaxundetail'
				})
			},
			shenqingtuikuan:function(){
				this.$router.push({
					path:'/shenqingtuikuan'
				})
			}
		}
	}
</script>

<style scoped>
	.duihuan{
		margin-top: 0.4rem;
		color:white;
		background:#33BB33;
		text-align: center;
		line-height:0.9rem;
		font-size:0.36rem;
		border-radius: 0.5rem;
		width:4.1rem;
		height:0.9rem;
	}
	.nohave img{
		margin-top:0.6rem;
		width: 4.2rem;
		height:4.2rem;
	}
	.nohave{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}
	.nohave span{
		color:#666666;
		font-size:0.3rem;
	}
	.shenqingtuikuan{
		background:#666666!important;
		color:white!important;
	}
	.btn_list>div:nth-child(1){
		margin-right:0.1rem;
	}
	.btn_list{
		padding:0.2rem 0;
		display:flex;
		justify-content: flex-end;
		align-items: center;
		width:100%;
	}
	.btn_list>div{
		padding:0.12rem 0.35rem;
		font-size:0.28rem;
		color:white;
		background:#33BB33;
		border-radius: 0.1rem;
	}
	.list_money p span:nth-child(1){
		color:#666;
	}
	.list_money p span:nth-child(2){
		color:#333;
	}
	.list_money{
		border-bottom:1px solid #f0f0f0;
		font-size:0.24rem;
		padding:0.3rem 0;
		display:flex;
		justify-content: space-between;
		align-items: center;
		width:100%;
	}
	.green{
		color:#33BB33!important;
	}
	.list_main p>span:nth-child(2){
		color:#333;
	}
	.list_main p>span:nth-child(1){
		color:#666;
	}
	.list_main>p:nth-child(2){
		margin:0.15rem 0;
	}
	.list_main{
		font-size:0.24rem;
		padding:0.3rem 0;
		width:100%;
		border-bottom:1px solid #f0f0f0;
	}
	.list_title_right{
		color:#33BB33;
	}
	.list_title_left{
		color:#595959;
	}
	.list_title{
		padding:0.3rem 0;
		width:100%;
		display:flex;
		justify-content: space-between;
		align-items: center;
		font-size:0.28rem;
		border-bottom:1px solid #f0f0f0;
	}
	.list li:nth-child(1){
		margin-top:0.2rem;
	}
	.list li{
		background:white;
		margin-bottom:0.2rem;
		width:6.9rem;
		padding:0 0.3rem;
		display:flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.chaxunliebiao{
		min-height:100%;
		background:#f5f5f5;
	}
	.title{
		font-size:0.32rem;
		color:#33BB33;
		padding:0.35rem 0.3rem;
		background:white;
	}
</style>
