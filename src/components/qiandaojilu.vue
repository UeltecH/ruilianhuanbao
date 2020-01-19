<template>
	<div class='qiandaojilu'>
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
				<p>签到总积分</p>
				<p>325</p>
			</div>
		</div>
		<ul class="main">
			<li>
				签到记录
			</li>
			<li class='green'>
				<div class='xuhao'>序号</div>
				<div class='shijian'>签到时间</div>
				<div class='jifen'>获取积分</div>
			</li>
			<li v-for="item in list">
				<div class='xuhao'>{{item.xuhao}}</div>
				<div class='shijian'>{{item.shijian}}</div>
				<div class='jifen'>{{item.jifen}}</div>
			</li>
		</ul>
		<div class="dianzi"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{
						xuhao:1,
						jifen:"+5",
						shijian:'2019.11.22 18:49'
					},
					{
						xuhao:1,
						jifen:"+5",
						shijian:'2019.11.22 18:49'
					},
					{
						xuhao:1,
						jifen:"+5",
						shijian:'2019.11.22 18:49'
					},
					{
						xuhao:1,
						jifen:"+5",
						shijian:'2019.11.22 18:49'
					},
					{
						xuhao:1,
						jifen:"+5",
						shijian:'2019.11.22 18:49'
					},
					{
						xuhao:1,
						jifen:"+5",
						shijian:'2019.11.22 18:49'
					},
					{
						xuhao:1,
						jifen:"+5",
						shijian:'2019.11.22 18:49'
					},
				]
			}
		}
	}
</script>

<style scoped>
	.bottom,.dianzi{
		width:100%;
		height:1.15rem;
	}
	.bottom{
		position: fixed;
		bottom:0;
		left:0;
		background:#33BB33;
		font-size:0.36rem;
		text-align: center;
		line-height:1.1rem;
		z-index:333;
	}
	.bottom a{
		text-decoration-line:none;
		color:white;
	}
	.jifen p{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.jifen img{
		width:0.5rem;
		height:0.5rem;
		border:1px solid #cccccc;
		border-radius: 50%;
		margin-left:0.1rem;
	}
	.green .jifen{
		justify-content:center;
		text-indent: 0rem;
	}
	.jifen{
		width:15%;
		display: flex;
		justify-content:center;
		align-items: center;
	}
	.shijian{
		width:70%;
		text-align: center;
	}
	.xuhao{
		width:15%;
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
		justify-content:space-between;
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
		list-style: none;
		background:white;
		margin-top: 0.2rem;
	}
	.qiandaojilu{
		min-height:100%;
		background:#f5f5f5;
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
