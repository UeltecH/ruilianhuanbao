<template>
	<div class='wodetuandui'>
		<div class='user_title'>
			<div class="user_title_left">
				<img src="../assets/user.png" alt="头像">
				<p>
					<span>黑富美</span>
					<span>享受待遇：无忧创业</span>
					<span>会员等级：金牌合伙人</span>
				</p>
			</div>
			<div class="user_title_right">
				<p>团队总人数</p>
				<p>{{renshu}}人</p>
			</div>
		</div>
		<div class="middle">
			<div :class="title==1?'middle_left chosed':'middle_left'" @click="zhijie($event)" data-count=1>
				<span>137人</span>
				<span>直接好友</span>
			</div>
			<div :class="title==2?'middle_right chosed':'middle_right'" @click="zhijie($event)" data-count=2>
				<span>137人</span>
				<span>间接好友</span>
			</div>
		</div>
		<ul class='list'>
			<li v-for="item in list" v-if="title == 0 || title==item.status">
				<div class="list_left">
					<img :src="item.user_img" alt="用户头像">
					<div>
						<span>{{item.username}}</span>
						<span>关注时间：{{item.timer}}</span>
					</div>
				</div>
				<div class="list_right">{{item.status==1?'直接好友':'间接好友'}}</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				renshu:"362",
				title:'0',
				list:[
					{
						user_img:require("../assets/user.png"),
						username:"姓名",
						timer:'2019.11.22 18:49',
						status:"2"
					},
					{
						user_img:require("../assets/user.png"),
						username:"姓名",
						timer:'2019.11.22 18:49',
						status:"1"
					},
					{
						user_img:require("../assets/user.png"),
						username:"姓名",
						timer:'2019.11.22 18:49',
						status:"1"
					},
					{
						user_img:require("../assets/user.png"),
						username:"姓名",
						timer:'2019.11.22 18:49',
						status:"2"
					},
					{
						user_img:require("../assets/user.png"),
						username:"姓名",
						timer:'2019.11.22 18:49',
						status:"2"
					},
				]
			}
		},
		methods:{
			zhijie:function(e){
				let count = e.currentTarget.dataset.count;
				if(this.title == count){
					this.title =0
				}else{
					this.title = count
				}
			}
		}
	}
</script>

<style scoped>
	.chosed span{
		color:#33BB33!important;
	}
	.wodetuandui{
		min-height:100%;
		background:#f5f5f5;
	}
	.list_left div>span:first-child{
		margin-bottom:0.05rem;
	}
	.list_right{
		font-size:0.24rem;
		color:#666;
		align-self: flex-start;
	}
	.list_left div{
		display: flex;
		align-items:flex-start;
		justify-content: center;
		flex-direction: column;
	}
	.list_left{
		display: flex;
		align-items: center;
	}
	.list li div{
		height:100%;
	}
	.list_left div span:nth-child(2){
		font-size:0.24rem;
		color:#595959;
	}
	.list_left div span:nth-child(1){
		font-size:0.28rem;
		font-weight:700;
		color:#4c4c4c;
	}
	.list li img{
		margin-right:0.15rem;
		width:0.8rem;
		height:0.8rem;
		border:1px solid #f0f0f0;
		border-radius: 50%;
	}
	.list li{
		margin-bottom:0.12rem;
		padding:0.237rem 0.3rem;
		display: flex;
		justify-content: space-between;
		width:100%;
		align-items: center;
		background:white;
	}
	.list{
		width:6.9rem;
	}
	.middle>div:nth-child(1){
		border-right:1px solid #e6e6e6;
	}
	.middle>div{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width:50%;
	}
	.middle{
		background:white;
		margin:0.2rem 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width:100%;
	}
	.middle>div{
		margin:0.2rem 0;
	}
	.middle>div>span:nth-child(2){
		font-size:0.24rem;
		color:#666;
	}
	.middle>div>span:nth-child(1){
		font-size:0.4rem;
		color:#666;
	}
	.user_title_right p:last-child{
		font-size: 0.48rem!important;
	}
	.user_title_right{
		font-size: 0.32rem;
		padding-left:0.25rem;
		color:white;
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
		border-right:1px solid #dedede;
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
