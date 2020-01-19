<template>
	<div class='chuangyejiangjin'>
		<user_title2 ref="user_title2"></user_title2>
		<div class="info">
			<p class='tip'>您已预存{{baozhengjin}}元，恭喜您成为睿联环保{{status}}合伙人</p>
			<p class='table_title'>【公司奖励明细】</p>
			<table>
				<tr>
					<td rowspan='3' colspan="3">NO.</td>
					<td rowspan='3' colspan="6">级别</td>
					<td rowspan='3' colspan="4">预存保证金</td>
					<td rowspan='2' colspan="10">分享好友家庭除甲醛收益提点（<span class='green'>可提现</span>）</td>
				</tr>
				<tr>
					
				</tr>
				<tr class='two'>
					<td rowspan='1' colspan="5">直接好友</td>
					<td rowspan='1' colspan="5">间接好友</td>
				</tr>
				<tr>
					<td colspan="3">1</td>
					<td colspan="6">金牌</td>
					<td colspan="4">3000</td>
					<td colspan="5">9%</td>
					<td colspan="5">1%</td>
				</tr>
				<tr>
					<td colspan="3">2</td>
					<td colspan="6">钻石</td>
					<td colspan="4">5000</td>
					<td colspan="5">10%</td>
					<td colspan="5">2%</td>
				</tr>
				<tr>
					<td colspan="3">3</td>
					<td colspan="6">皇冠</td>
					<td colspan="4">8000</td>
					<td colspan="5">12%</td>
					<td colspan="5">3%</td>
				</tr>
				<tr>
					<td colspan="3">4</td>
					<td colspan="6">战略</td>
					<td colspan="4">10000</td>
					<td colspan="5">15%</td>
					<td colspan="5">4%</td>
				</tr>
			</table>
			<div class="tip_bottom">
				<p>以上保证金为合伙人取得收益权益的认证，后期签约所有客户，直接好友消费一律按照签约金额8%记账；间接好友一律按照签约金额2%记账，累计返还金额达到保证金额后，合伙人可选择一下方式：</p>
				<p>1.一次性提取预存的保证金，后期若不选择合伙人模式，可根据已发展团队人数，享受相应的“最牛兼职”级别权益；</p>
				<p>2.不提取保证金，继续合作，享受原有权益；</p>
				<p>3.申请升级，联系客服</p>
			</div>
			<div class="chaxun" @click='chaxun'>保证金余额查询</div>
			<div class="dianzi"></div>
		</div>
	</div>
</template>

<script>
	import user_title2 from '../temp/user_title2';

	export default {
		components: {
			user_title2: user_title2
		},
		data() {
			return {
				baozhengjin: "",
				status: '金牌'
			}
		},
		methods:{
			chaxun(){
				this.$router.push({
					name:'xianjinzhanghu',
					params:{
						status:'1'
					}
				})
			}
		},
		mounted: function() {
			this.baozhengjin = this.$refs.user_title2.baozhengjin
		}
	}
</script>

<style scoped>
	.chuangyejiangjin{
		background: white;
		min-height:100%;
	}
	.dianzi{
		width:100%;
		height:0.8rem;
	}
	.chaxun{
		width:6.5rem;
		margin:0 auto;
		background:#33BB33;
		color:white;
		text-align: center;
		line-height:1rem;
		height:1rem;
		border-radius: 0.15rem;
		font-size: 0.36rem;
		margin-top:0.5rem;
	}
	.tip_bottom{
		font-size:0.28rem;
		color:#4c4c4c;
		width:6.9rem;
		margin:0 auto;
		margin-top: 0.35rem;
		line-height:0.4rem;
	}
	.two>td{
		width:1.49rem!important;
		background:none!important;
	}
	tr>td:nth-child(1){
		width:0.69rem;
		background:#eeffee;
	}
	tr>td:nth-child(2){
		width:1.79rem;
	}
	tr>td:nth-child(3){
		width:0.8rem;
		padding-left:0.2rem;
		padding-right:0.2rem;
	}
	table tr:nth-child(1)>td:nth-child(4){
		width:2.29rem!important;
		padding-left:0.35rem;
		padding-right:0.35rem;
	}
	table{
		border-collapse:collapse;
		border-spacing:0;
		border-left:1px solid #f0f0f0;
		border-top:1px solid #f0f0f0;
	}
	
	th,td{
		border-right:1px solid #f0f0f0;
		border-bottom:1px solid #f0f0f0;
		text-align: center;
	}
	table tr{
		width:100%;
	}
	table {
		height: 6.6rem;
		font-size: 0.24rem;
		width: 100%;
	}

	.table_title {
		margin-bottom: 0.15rem;
		font-size: 0.32rem;
		color: #33bb33;
	}

	.tip {
		font-size: 0.28rem;
		color: #333;
		padding: 0.3rem 0;
	}

	.info {
		width: 6.9rem;
		padding: 0 0.3rem;
	}
</style>
