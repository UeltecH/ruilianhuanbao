<template>
	<div class='chaxundetail'>
		<div class='detail'>
			<div class="list_title">
				<span class='list_title_left'>订单号：{{num}}</span>
				<span class='list_title_right'>{{status}}</span>
			</div>
			<div class="list_main">
				<p>
					<span>服务内容：</span>
					<span class='green'>{{neirong}}</span>
				</p>
				<p>
					<span>姓名：</span>
					<span>{{name}}&nbsp;&nbsp;&nbsp;{{phone}}</span>
				</p>
				<p>
					<span>地址：</span>
					<span>{{addr}}</span>
				</p>
			</div>
			<div class="list_money">
				<p>
					<span>检测数量：</span>
					<span>{{count}}个</span>
				</p>
				<p>
					<span>单价：</span>
					<span>{{parse}}元</span>
				<p>
				<p>
					<span>总金额：</span>
					<span>{{parse}}×{{count}}={{all}}元</span>
				</p>
			</div>
		</div>
		
		
		
		<!-- <div class="zaixianzhifu">在线支付</div> -->
		
		<div class="yizhifu">
			<ul>
				<li v-for="(item,index) in status_list" :key="index">
					<span class='timer'>{{item.timer}}</span>
					<img src="../assets/baogao.jpg" v-if="index==0&&status_list.length ==3">
					<img src="../assets/yicaiyang2.jpg" v-if="index==1&&status_list.length ==3">
					<img src="../assets/yicaiyang.jpg" v-if="index==0&&status_list.length ==2">
					<img src="../assets/yifukuan2.jpg" v-if="index==2&&status_list.length ==3">
					<img src="../assets/yifukuan2.jpg" v-if="index==1&&status_list.length ==2">
					<img src="../assets/yifukuan.jpg" v-if="index==0&&status_list.length ==1">
					<div>{{item.content}}</div>
					<div class="kong" v-if="index+1<status_list.length"></div>
					<div class="line" v-if="index+1<status_list.length"></div>
				</li>
			</ul>
			
			<router-link to="/shenqingtuikuan">
				<div class="tuikuan">申请退款</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{	
				zhuangtai:1,
				num:'2019320123652',
				status:'待付款',
				neirong:'空气检测',
				name:'黑富美',
				phone:'15836598764',
				addr:'天津市南开区红旗路慧谷大厦1513-1516',
				count:'3',
				parse:'200',
				all:'600',
				status_list:[
					{
						timer:'2019.11.27',
						content:'检测报告已出具，可联系在线客服查查看检测结果'
					},
					{
						timer:'2019.11.27',
						content:'检测报告已出具，可联系在线客服查查看检测结果'
					},
					{
						timer:'2019.11.27',
						content:'检测报告已出具，可联系在线客服查查看检测结果'
					},
				]
			}
		}
	}
</script>

<style scoped>
	.yizhifu ul li:nth-child(1){
		color:#333!important;
	}
	.tuikuan{
		position:fixed;
		bottom:0;
		left:0;
		width: 100%;
		height:1.1rem;
		background:#33BB33;
		color:white;
		text-align: center;
		line-height:1.1rem;
		font-size:0.36rem;
	}
	.kong{
		width: 1.93rem!important;
		height:0.7rem;
	}
	.line{
		width:0.02rem!important;
		height:0.7rem;
		border-left:0.02rem dashed #33BB33;
	}
	.yizhifu li div{
		width:4rem;
	}
	.yizhifu li>span{
		display:block;
		width:1.2rem;
	}
	.yizhifu li img{
		width:0.87rem;
		height:0.87rem;
		margin:0 0.3rem;
	}
	.yizhifu li{
		color:#666;
	}
	.yizhifu{
		margin-top:0.9rem;
	}
	.yizhifu ul{
		list-style: none;
	}
	.yizhifu li{
		width:6.8rem;
		padding:0 0.4rem 0 0.3rem;
		display:flex;
		align-items:center;
		flex-wrap: wrap;
		font-size:0.24rem;
	}
	.zaixianzhifu{
		margin:0 auto;
		border-radius: 0.15rem;
		margin-top:0.4rem;
		width:6.5rem;
		height:1rem;
		background:#33BB33;
		color:white;
		font-size:0.36rem;
		text-align: center;
		line-height:1rem;
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
	.detail{
		background:white;
		margin-bottom:0.2rem;
		width:6.9rem;
		padding:0 0.3rem;
		display:flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.chaxundetail{
		min-height:100%;
		background:#f5f5f5;
	}
</style>
