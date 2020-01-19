<template>
	<div class='sucaizhongxin'>
		<div class='list' v-for="(item,index) in list" :key="index">
			<div class="list_main">
				<div class="li_title">
					<div class="title_left">
						<img :src="item.img" alt="头像">
						<div>
							<p>{{item.name}}</p>
							<p>{{item.date}}</p>
						</div>
					</div>
					<div class="title_right" v-if="index == 0">
						<img src="../assets/zhiding.png" alt="置顶">
						<span>置顶</span>
					</div>
				</div>
				<div class="list_content">
					<p ref="content" class='item_content' :id="'count'+index">{{item.content}}</p>
				</div>
				<div class="copy">
					<div class='copy_left'  data-clipboard-action="copy" :data-clipboard-target="'#count'+index" :id="'copy_btn'+index" @click="copy_val($event)">
						<img src="../assets/copy.png" alt="复制">
						<span>复制文字</span>
					</div>

					<div class="copy_right" @click="zhankai($event)">
						<span class='green'>展开</span>
						<img src="../assets/zhankai.png" alt="展开">
					</div>
				</div>
				<div class="img_list">
					<img v-for='ite in item.commen_img' :src="ite" alt="图片">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	//引入复制包
	import Clipboard from 'clipboard';
	import { Toast } from 'mint-ui';
	export default {
		data() {
			return {
				list: [{
						img: require("../assets/logo.jpg"),
						name: '睿联环保',
						date: "刚刚",
						content: '1睿联环保科技有限公司是一家集科研、生产、销售、服务于一体的专业除甲醛及室内空气净化的公司、生产、销售、服务于一体的专业除甲醛及室内空气净化的公司',
						commen_img: [
							require("../assets/commen.jpg"),
							require("../assets/commen.jpg"),
							require("../assets/commen.jpg"),
							require("../assets/commen.jpg"),
							require("../assets/commen.jpg"),
							require("../assets/commen.jpg")
						],
					},
					{
						img: require("../assets/logo.jpg"),
						name: '睿联环保',
						date: "刚刚",
						content: '2睿联环保科技有限公司是一家集科研、生产、销售、服务于一体的专业除甲醛及室内空气净化的公司、生产、销售、服务于一体的专业除甲醛及室内空气净化的公司',
						commen_img: [
							require("../assets/commen.jpg"),
							require("../assets/commen.jpg"),
							require("../assets/commen.jpg"),
							require("../assets/commen.jpg"),
							require("../assets/commen.jpg"),
							require("../assets/commen.jpg")
						]
					},
					{
						img: require("../assets/logo.jpg"),
						name: '3睿联环保',
						date: "刚刚",
						content: '睿联环保科技有',
						commen_img: [
							require("../assets/commen.jpg"),
							require("../assets/commen.jpg"),
							require("../assets/commen.jpg"),
							require("../assets/commen.jpg"),
							require("../assets/commen.jpg"),
							require("../assets/commen.jpg")
						]
					}
				]
			}
		},
		mounted: function() {
			let list = this.list
			let item_content = document.getElementsByClassName("item_content")
			for (let j = 0; j < item_content.length; j++) {
				if (item_content[j].scrollHeight > item_content[j].offsetHeight) {
					item_content[j].parentNode.nextElementSibling.childNodes[2].style.display = 'flex'
					list[j].is_show = 'true'
				} else {
					list[j].is_show = 'false'
				}
			}
			this.$set(this, "list", list)
		},
		methods: {
			zhankai: function(e) {
				let count = document.getElementsByClassName("copy_right");
				let list = this.list
				let idx = ''
				for (let i in count) {
					if (e.currentTarget == count[i]) {
						idx = i
					}
				}
				if (list[idx].is_show == 'true') {
					document.getElementsByClassName("list_content")[idx].style.display = 'block'
					document.getElementsByClassName("copy_right")[idx].childNodes[0].innerText = "收起"
					document.getElementsByClassName("copy_right")[idx].childNodes[2].style.transform = "rotateZ(180deg)"
					list[idx].is_show = 'false';
				} else {
					document.getElementsByClassName("list_content")[idx].style.display = '-webkit-box'
					document.getElementsByClassName("copy_right")[idx].childNodes[0].innerText = "展开"
					document.getElementsByClassName("copy_right")[idx].childNodes[2].style.transform = "rotateZ(0deg)"
					list[idx].is_show = 'true'
				}
				this.list = list
			},
			copy_val: function(e) {
				let count = document.getElementsByClassName("copy_left");
				let list = this.list
				let idx = ''
				for (let i in count) {
					if (e.currentTarget == count[i]) {
						idx = i
					}
				}
				var clipboard = new Clipboard('#copy_btn'+idx);
				clipboard.on('success', function(e) {
					Toast({
						message:'内容复制成功',
						duration:1000
					});
					e.clearSelection();
				});
			}
		}
	}
</script>

<style scoped>
	.xuanzhuan {
		transform: rotateZ(180deg);
	}

	.copy img {
		width: 0.3rem;
		height: 0.3rem;
		margin-right: 0.1rem;
	}

	.copy {
		margin-top: 0.2rem;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.24rem;
		color: #666;
	}

	.copy_right img {
		width: 0.23rem;
		height: 0.13rem;
		margin-left: 0.05rem;
	}

	.copy_left,
	.copy_right {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.copy_right {
		display: none;
	}

	.img_list img:nth-child(3n-1) {
		margin: 0 0.18rem;
		margin-bottom: 0.1rem;
	}

	.img_list {
		margin-top: 0.3rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}

	.img_list img {
		margin-bottom: 0.1rem;
		width: 1.92rem;
		height: 1.92rem;
		border: 1px solid #f0f0f0;
		border-radius: 0.15rem;
	}

	.green {
		color: #999;
		float: right;
		font-weight: 700;
	}

	.list_content {
		font-size: 0.28rem;
		color: #333333;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		margin-top: 0.3rem;
	}

	.list_main {
		border-radius: 0.15rem;
		padding: 0.3rem 0.35rem;
	}

	.title_right img {
		width: 0.21rem;
		height: 0.22rem;
	}

	.title_right {
		font-size: 0.28rem;
		align-self: flex-start;
		color: #33BB33;
	}

	.title_left {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.title_left p:nth-child(2) {
		font-size: 0.28rem;
		color: #666;
	}

	.title_left p:nth-child(1) {
		font-size: 0.32rem;
	}

	.li_title {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.title_left>img {
		margin-right: 0.2rem;
		width: 0.95rem;
		height: 0.95rem;
		border-radius: 50%;
		border: 1px solid #f0f0f0;
	}

	.list:first-child {
		padding-top: 0.15rem;
	}

	.list {
		background: f5f5f5;
		padding: 0 0.3rem;
		list-style: none;
		width: 6.9rem;
		margin: 0 auto;
		paddin-top: 0.15rem;
		margin-bottom: 0.2rem;
	}

	.list>div {
		background: white;
	}

	.sucaizhongxin {
		min-height: 100%;
		background: #f5f5f5;
	}
</style>
