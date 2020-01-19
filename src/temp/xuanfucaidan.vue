<template>
	<div class="xuanfucaidan">
		<img @click="is_show()" :class='show_menu?"is_rotate rotate":"no_rotate rotate"' src="../assets/yinyingsanjiao.png">
		<div :class="show_menu?'show btn_list':'btn_list hide'">
			<img src="../assets/kefu.png" alt="客户会话" v-if="show_menu">
			<img src="../assets/dianhua.png" alt="打电话" v-if="show_menu">
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				show_menu:false
			}
		},
		methods:{
			is_show:function(){
				this.show_menu = !this.show_menu
			}
		}
	}
</script>

<style scoped>
	.btn_list img{
		width:0.69rem;
		height:0.69rem;
		border-radius: 50%;
	}
	.xuanfucaidan{
		position:fixed;
		right:0;
		bottom: 2rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		z-index: 999;
	}
	.btn_list{
		width:0rem;
		height:2.15rem;
		background:rgba(0,0,0,.5);
		border-radius: 0.05rem;
		display: flex;
		flex-direction:column;
		align-items: center;
		justify-content: space-around;
	}
	.hide{
		width:0rem;
		animation: hide 0.5s forwards;
	}
	.show{
		width:1.05rem;
		animation: show 0.5s forwards;
	}
	
	.rotate{
		width:0.3rem;
		height:0.48rem;
		transform: rotateZ(180deg);
	}
	
	.is_rotate{
		animation: is_rotate 0.5s linear forwards;
	}
	.no_rotate{
		animation: no_rotate 0.5s linear forwards;
	}
	
	@keyframes is_rotate{
		from{transform: rotateY(180deg)}
		to{transform: rotateY(0deg)}
	}
	@keyframes no_rotate{
		from{transform: rotateY(0deg)}
		to{transform: rotateY(180deg)}
	}
	
	
	@keyframes show{
		from{
			width:0rem
		}
		to{
			width:1.05rem
		}
	}
	
	@keyframes hide{
		from{width:1.05rem}
		to{width:0rem}
	}
</style>
