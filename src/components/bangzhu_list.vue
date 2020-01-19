<template>
	<div class='bangzhu_list'>
		<ul>
			<li v-for="(item,index) in list" :key="index">
				<router-link :to="{path:'/fuwenben',query:{id:item.url}}">
					<span>
						<span class='green'>{{index+1}}.</span>
						{{item.content}}
					</span>
					<img src="../assets/huisanjiao.png" alt="三角">
				</router-link>
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
						url:0,
						content:"推荐人级别及收入说明",
					},
					{
						url:1,
						content:"推荐人级别及收入说明",
					},
					{
						url:0,
						content:"推荐人级别及收入说明",
					},
					{
						url:0,
						content:"推荐人级别及收入说明",
					},
					{
						url:0,
						content:"推荐人级别及收入说明",
					},
					{
						url:0,
						content:"推荐人级别及收入说明",
					},
					
				]
			}
		}
	}
</script>

<style scoped>
	.bangzhu_list{
		min-height:100%;
		background:white;
	}
	ul{
		width:6.9rem;
		margin:0 auto;
	}
	li{
		height:1rem;
		border-bottom:1px solid #f0f0f0;
		width:100%;
		display:flex;
	}
	.green{
		color:#33BB33!important;
	}
	li>a{
		width:100%;
		height:1rem;
		
		text-decoration-line:none;
		color:#4c4c4c;
		font-size:0.32rem;
		display:flex;
		justify-content: space-between;
		align-items: center;
	}
	li img{
		width:0.14rem;
		height:0.29rem;
		margin-right:0.15rem;
	}
</style>
