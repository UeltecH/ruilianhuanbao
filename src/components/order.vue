<template>
	<div class='order'>
		<div class="title">
			<div :class='count==0?"green":""' @click="chose_title(0)">全部</div>
			<div :class='count==1?"green":""' @click="chose_title(1)">已兑换</div>
			<div :class='count==2?"green":""' @click="chose_title(2)">已完成</div>
		</div>
		<ul class='order_list'>
			<li v-for="item in list" v-if="count == 0||count == item.status">
				<div class='list_title'>
					<span>订单号：{{item.order_num}}</span>
					<span class='green'>{{item.status==1?'已兑换':'已完成'}}</span>
				</div>
				<div class="list_main">
					<img :src="item.order_img" alt="商品图片">
					<p>
						<span>{{item.content}}</span>
						<span>兑换时间：{{item.timer}}</span>
						<span>取件人：{{item.name}}   {{item.phone}}</span>
					</p>
				</div>
				<div class="list_bottom" v-if="item.status==1">
					<div class="del_order" @click="del_order(item.id)">删除订单</div>
				</div>
			</li>
		</ul>
		<div class="nohave" v-if="list.length ==0">
			<img src="../assets/lipinkong.png" alt="">
			<span>亲，您还没有兑换过礼品！</span>
			<div class="duihuan" @click='duihuan()'>兑换礼品</div>
		</div>
		<div class="dianzi"></div>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default{
		data(){
			return{
				count:0,
				list:[
					{
						id:"111",
						order_num:'2019320123652',
						status:1,
						order_img:require("../assets/commen.jpg"),
						content:"1",
						timer:'2019-11-22  15:19',
						name:'黑富美',
						phone:'15836598764'
					},
				]
			}
		},
		mounted:function(){
			let status = this.$route.query.status
			this.count = status
		},
		methods:{
			del_order:function(e){
				MessageBox({
				  message: '确定删除该订单?',
				  showCancelButton: true,
				  confirmButtonClass:'green'
				}).then(action => {
				  if (action === 'confirm') {
					let list = this.list
					for(let i in list){
						if(list[i].id==e){
							list.splice(i,1)
						}
					}
					this.list = list
				  }
				});
			},
			chose_title:function(e){
				console.log(e)
				this.count = e
				this.is_show = e
			},
			duihuan:function(){
				this.$router.push({
					path:'/lipinduihuan'
				})
			}
		}
	}
</script>

<style scoped>
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
	.dianzi{
		height:1.2rem;
		width:100%;
	}
	.del_order{
		width:1.7rem;
		height:0.6rem;
		text-align: center;
		line-height:0.6rem;
		color:white;
		font-size:0.28rem;
		background: #33BB33;
		border-radius: 0.1rem;
	}
	.list_bottom{
		border-top:1px solid #f0f0f0;
		height:1.2rem;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.list_main p{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		width:78%;
	}
	.list_main img{
		width:1.2rem;
		height:1.2rem;
		border-radius: 0.1rem;
		border:1px solid #ccc;
		margin-right:0.2rem;
	}
	.list_main p span{
		display: block;
		width:100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: normal;
	}
	.list_main p span:first-child{
		font-size:0.28rem;
		color:#333;
	}
	.list_main{
		height:1.8rem;
		width:100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.list_main p span:nth-child(2){
		margin:0.06rem 0;
	}
	.list_main p span{
		font-size:0.24rem;
		color:#666;
	}
	.list_title{
		font-size:0.28rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height:0.9rem;
		border-bottom:1px solid #f0f0f0;
	}
	.order_list li{
		margin-top: 0.2rem;
		background:white;
		width:6.9rem;
		padding:0 0.3rem;
	}
	.order_list{
		list-style: none;
	}
	.order{
		min-height: 100%;
		background:#f5f5f5;
	}
	.title{
		width:100%;
		height:1rem;
		display:flex;
		justify-content: flex-start;
		align-items: center;
		background:white;
	}
	.title div{
		width:33.3333%;
		height:100%;
		text-align: center;
		line-height:1rem;
		font-size:0.32rem;
		color:#666;
	}
	.green{
		color:#33BB33!important;
	}
	.title .green{
		font-weight: bold;
	}
</style>
