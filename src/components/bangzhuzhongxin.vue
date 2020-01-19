<template>
	<div class='bangzhuzhongxin'>
		<div class="title">
			<input type="text" class='search' placeholder="请输入关键词搜索">
		</div>
		<ul class='list'>
			<li v-for="item in list">
				<div class="list_left">
					<router-link :to='{path:"/bangzhu_list",query:{id:item.id}}'>
						<img :src="item.img" alt="热门问题">
						<p>
							<span>{{item.yiji}}</span>
							<img src="../assets/heisanjiao.png" alt="三角" class='sanjiao'>
						</p>
					</router-link>
				</div>
				<div class="list_right">
					<ul>
						<li v-for="ite in item.erji">
							<router-link :to='{path:"/bangzhu_list",query:{id:ite.id}}'>{{ite.title}}</router-link>
						</li>
					</ul>
				</div>
			</li>
		</ul>
		
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{
						img:require("../assets/remen.png"),
						yiji:'热门问题',
						id:0,
						erji:[
							{
								id:1,
								title:'素材推送1'
							},
							{
								id:2,
								title:'素材推送2'
							},
							{
								id:3,
								title:'素材推送3'
							},
							{
								id:4,
								title:'素材推送4'
							},
						]
					},
					{
						img:require("../assets/remen.png"),
						yiji:'热门问题',
						id:'0',
						erji:[
							{
								id:1,
								title:'素材推送1'
							},
							{
								id:2,
								title:'素材推送2'
							},
							{
								id:3,
								title:'素材推送3'
							},
							{
								id:4,
								title:'素材推送4'
							},
						]
					},
					{
						img:require("../assets/remen.png"),
						yiji:'热门问题',
						id:0,
						erji:[
							{
								id:1,
								title:'素材推送1'
							},
							{
								id:2,
								title:'素材推送2'
							},
							{
								id:3,
								title:'素材推送3'
							},
							{
								id:4,
								title:'素材推送4'
							},
						]
					},
					{
						img:require("../assets/remen.png"),
						yiji:'热门问题',
						id:0,
						erji:[
							{
								id:1,
								title:'素材推送1'
							},
							{
								id:2,
								title:'素材推送2'
							},
							{
								id:3,
								title:'素材推送3'
							},
							{
								id:4,
								title:'素材推送4'
							},
						]
					},
					{
						img:require("../assets/remen.png"),
						yiji:'热门问题',
						id:0,
						erji:[
							{
								id:1,
								title:'素材推送1'
							},
							{
								id:2,
								title:'素材推送2'
							},
							{
								id:3,
								title:'素材推送3'
							},
							{
								id:4,
								title:'素材推送4'
							},
						]
					},
					
				]
			}
		}
	}
</script>

<style scoped>
	.list_right ul li:nth-child(3){
		border-right:1px solid #f0f0f0;
	}
	.list_right ul li:nth-child(1){
		border-right:1px solid #f0f0f0;
		border-bottom:1px solid #f0f0f0;
	}
	.list_right ul li:nth-child(2){
		border-bottom:1px solid #f0f0f0;
	}
	.list_right ul li a{
		display: inline-block;
		width:100%;
		height:100%;
		text-align: center;
		text-decoration-line:none;
		color:#474747;
	}
	.list_right ul li:nth-child(1),.list_right ul li:nth-child(2){
		margin-top:0.2rem;
		padding-bottom:0.2rem;
		line-height:0.49rem;
	}
	.list_right ul li:nth-child(3),.list_right ul li:nth-child(4){
		margin-bottom:0.2rem;
		padding-top:0.2rem;
		line-height:0.49rem;
	}
	.list_right ul li{
		width:2.34rem;
		height:0.49rem;
		font-size:0.28rem;
	}
	.list_right ul{
		display: flex;
		flex-wrap: wrap;
		list-style: none;
		width:4.7rem;
		padding:0 0.3rem;
		height:100%;
	}
	.list_left>a>img{
		width:0.65rem;
		height:0.65rem;
		margin-bottom:0.1rem;
	}
	.sanjiao{
		width:0.12rem;
		height:0.2rem;
	}
	.list_left>a{
		text-decoration-line:none;
		display: flex;
		flex-direction:column;
		align-items: center;
		justify-content: center;
		font-size: 0.28rem;
		height:100%;
		color:#474747;
		width:2.1rem;
		border-right:1px solid #f0f0f0;
	}
	.list>li{
		display: flex;
		height:1.8rem;
		background:white;
		width:7.5rem;
		margin-bottom:0.2rem;
	}
	.list{
		list-style: none;
	}
	.bangzhuzhongxin{
		background: #f5f5f5;
		min-height:100%;
	}
	.title{
		width:100%;
		height:1.25rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.search{
		width:6.5rem;
		height:0.9rem;
		display: block;
		background-color:white;
		margin: 0 auto;
		border:none;
		border-radius: 0.15rem;
		background-image:url('../assets/search.png');
		background-repeat: no-repeat;
		background-size:5%;
		text-indent: 1.15rem;
		background-position: 10%;
		outline: none;
	}
</style>
