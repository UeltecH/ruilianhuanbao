<template>
	<div class='tixian'>
		<user_title ref="user_title"></user_title>
		<dianzi></dianzi>
		<ul>
			<li>
				<p>
					<span>提现金额</span>
					<span>￥</span>
				</p>
				<input type="number" placeholder="请输入提现金额(最低100元)" v-model="edu">
				<span @click="all()">全部</span>
			</li>
			<li>
				<p>
					<span>卡号</span>
				</p>
				<input type="number" class="inp" placeholder="请输入银行卡号" v-model="card_num"></input>
			</li>
			<li>
				<p>
					<span>户名</span>
				</p>
				<input type="text" class="inp" placeholder="请输入户名" v-model="name"></input>
			</li>
			<li>
				<p>
					<span>开户行</span>
				</p>
				<input type="text" class="inp" placeholder="请输入开户行" v-model="bank_name"></input>
			</li>
		</ul>
		
		<div class="submit" @click="submit()">申请提现</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import dianzi from '../temp/dianzi';
	import user_title from '../temp/user_title';
	export default{
		// 引入dianzi
		components:{dianzi:dianzi,user_title:user_title},
		data(){
			return{
				edu:'',
				card_num:'',
				name:'',
				bank_name:''
			}
		},
		mounted:function(){
			this.yue = this.$refs.user_title.yue
		},
		methods:{
			all:function(){
				this.edu = this.yue
			},
			submit:function(){
				if(this.edu == ''){
					this.$options.methods.tip_money()
					return
				}
				if(parseFloat(this.edu)>parseFloat(this.yue)){
					this.$options.methods.tip_money()
					return
				}
				if(parseFloat(this.edu)<parseFloat(100)){
					this.$options.methods.tip_money()
					return
				}
				if(this.card_num == ''){
					this.$options.methods.tip_card_num()
					return
				}
				let test1 = /^([1-9]{1})(\d{15}|\d{18})$/
				if(!test1.test(this.card_num)){
					this.$options.methods.tip_card_num()
					return
				}
				if(this.name == ''){
					this.$options.methods.tip_name()
					return
				}
				let test2 =  /^[\u4e00-\u9fa5][\u4e00-\u9fa5]{1,5}$/;
				if(!test2.test(this.name)){
					this.$options.methods.tip_name()
					return
				}
				if(this.bank_name == ''){
					this.$options.methods.tip_bank_name()
					return
				}
				let test3 =  /^[\u4e00-\u9fa5][\u4e00-\u9fa5]{1,50}$/;
				if(!test3.test(this.bank_name)){
					this.$options.methods.tip_bank_name()
					return
				}
				
				this.$router.push({
					path:'/tixianchenggong'
				})
			},
			tip_money:function(){
				Toast({
					message:'请填写正确的金额',
					duration:1000
				});
			},
			tip_card_num:function(){
				Toast({
					message:'请填写正确的银行卡号',
					duration:1000
				});
			},
			tip_name:function(){
				Toast({
					message:'请填写正确的名字',
					duration:1000
				});
			},
			tip_bank_name:function(){
				Toast({
					message:'请填写正确的开户行',
					duration:1000
				});
			}
		}
	}
</script>

<style scoped>
	.submit{
		width:6.5rem;
		height:0.95rem;
		background:#33bb33;
		text-align: center;
		line-height:0.95rem;
		color:white;
		font-size:0.36rem;
		border-radius: 0.15rem;
		margin:0 auto;
		margin-top:0.4rem;
	}
	.tixian{
		width:100%;
		height:100%;
		background:#f5f5f5;
	}
	li input{
		margin-left:2%;
		width:55%;
		height:90%;
		border:none;
		outline: none;
		font-size: 0.28rem;
	}
	li>span{
		font-size:0.28rem;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width:15%;
	}
	ul li:last-child{
		border-bottom:0!important;
	}
	ul li p{
		font-size: 0.32rem;
		width:28%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	ul li{
		color:#333;
		width:6.9rem;
		margin:0 auto;
		height:1rem;
		border-bottom:1px solid #f0f0f0;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	ul{
		list-style: none;
		width:7.5rem;
		background:white;
	}
	.title{
		background:url(../assets/xianjinzhanghu_title.png) 100% 100% no-repeat;
		background-size:cover;
		width:7.5rem;
		height:2.2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction:column;
	}
	.title p:nth-child(1){
		font-size:0.28rem;
		color:white;
	}
	.title p:nth-child(2){
		font-size: 0.56rem;
		color:white;
	}
</style>
