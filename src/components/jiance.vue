<template>
	<div class="jiance">
		<img src="../assets/jiance.png" alt="检测" class="title">
		<div class="btn_list">
			<p>免费获取检测报价方案</p>
			<div class="btn">
				<div class="zaixianzixun">在线咨询</div>
				<div class="dianhuazixun">电话咨询</div>
			</div>
		</div>

		<div class="inp_list">
			<p>预约检测</p>
			<div class="name">
				<span>姓名：</span>
				<input type="text" placeholder="请输入您的姓名" v-model="name">
			</div>
			<div class="phone">
				<span>电话：</span>
				<input type="number" placeholder="请输入您的电话" v-model="phone">
			</div>
			<div class="diqu" @click='diqu'>
				<span>地区：</span>
				<input type="text" readonly="readonly" v-model="diqu_text" placeholder="请输入您的地区">
			</div>
			<div class="dizhi">
				<span>地址：</span>
				<input type="text" placeholder="请输入您的详细地址" v-model="dizhi">
			</div>
			<div class="danjia">
				<span>单价：</span>
				<input type="number" placeholder="请输入单价" v-model="danjia">
				<span>（元）</span>
			</div>
			<div class="caiyangdian">
				<span>采样点：</span>
				<input type="number" placeholder="请输入采样点" v-model="caiyangdian">
				<span>（个）</span>
			</div>
			<div class="zongjine">
				<span>总金额：</span>
				<input type="number" placeholder="总金额" v-model="zongjine" readonly="readonly">
				<span>（元）</span>
			</div>
		</div>
		<div class="pay" @click='pay'>在线支付</div>
		<div class='tip'>
			<span>注：</span>
			<span>1.后期签约治理，检测费退还；</span>
			<span>2.所有检测出具CMA检测报告；</span>
			<span>3.检测内容包括甲醛、苯、氡、Tvoc等5项；</span>
		</div>
		<div class="dianzi"></div>
		
		<mt-popup v-model="popupVisible" position="bottom">
			<div class='chose_picker'>
				<span class='quxiao' @click="quxiao">取消</span>
				<span class='queding' @click="queding">确定</span>
			</div>
			<mt-picker :slots="addr" @change="onValuesChange"></mt-picker>
		</mt-popup>
	</div>
</template>

<script>
	import { Picker,Popup,Toast } from 'mint-ui';
	export default {
		data() {
			return {
				addr: [{
					flex: 1,
					values: ['天津', '北京', '南京', '西京', '东京', '中经'],
					className: 'slot1',
					textAlign: 'right'
				}, {
					divider: true,
					content: '-',
					className: 'slot2'
				}, {
					flex: 1,
					values: ['东丽区', '朝阳区', '南京区', '西京区', '东京区', '中经区'],
					className: 'slot3',
					textAlign: 'left'
				}],
				popupVisible:false,
				diqu_text:'',
				name:'',
				phone:'',
				dizhi:'',
				danjia:'',
				caiyangdian:'',
				zongjine:''
			}
		},
		methods:{
			onValuesChange(picker, values) {
				if (values[0] > values[1]) {
					picker.setSlotValue(1, values[0]);
				}
				this.chose=values
			},
			diqu(){
				this.popupVisible = !this.popupVisible
			},
			quxiao(){
				this.popupVisible = !this.popupVisible
			},
			queding(){
				this.diqu_text = this.chose.join("/")
				this.popupVisible = !this.popupVisible
			},
			pay(){
				let test =  /^[\u4e00-\u9fa5][\u4e00-\u9fa5]{1,5}$/;
				let test1 = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
				if(!test.test(this.name)){
					Toast({
						message:'请填写正确的名字',
						duration:1000
					});
					return
				}
				if(!test1.test(this.phone)){
					Toast({
						message:'请填写正确的手机号',
						duration:1000
					});
					return
				}
				if(this.diqu_text==''){
					Toast({
						message:'请选择您的地区',
						duration:1000
					});
					return
				}
				if(this.dizhi==''){
					Toast({
						message:'请填写您的地址',
						duration:1000
					});
					return
				}
				if(this.danjia==''){
					Toast({
						message:'请填写单价',
						duration:1000
					});
					return
				}
				if(this.caiyangdian==''){
					Toast({
						message:'请填写采样点',
						duration:1000
					});
					return
				}
				this.$router.push({
					path:'/zhifuchenggong'
				})
			}
		},
		watch:{
			danjia:function(){
				if(this.caiyangdian!= ''){
					this.zongjine = (parseFloat(this.caiyangdian) * parseFloat(this.danjia)).toFixed(2)
				}
			},
			caiyangdian:function(){
				if(this.danjia!= ''){
					this.zongjine = (parseFloat(this.caiyangdian) * parseFloat(this.danjia)).toFixed(2)
				}
			}
		}
	}
</script>

<style scoped>
	.queding{
		color:#33BB33;
	}
	.quxiao{
		color:#666;
	}
	.chose_picker{
		width:7.1rem;
		background:white;
		font-size:0.36rem;
		display:flex;
		justify-content: space-between;
		align-items: center;
		padding:0.2rem 0;
		margin:0 0.3rem;
	}
	.dianzi {
		width: 100%;
		height: 0.4rem;
	}

	.tip {
		font-size: 0.28rem;
		color: #666;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
		width: 6.5rem;
		margin: 0 auto;
		line-height: 0.5rem;
	}

	.pay {
		width: 6.5rem;
		height: 0.9rem;
		border-radius: 0.15rem;
		font-size: 0.36rem;
		color: white;
		text-align: center;
		line-height: 0.9rem;
		background: #33BB33;
		margin: 0.25rem auto 0.45rem auto;
	}

	.zongjine>input {
		color: #33BB33;
	}

	.danjia>input,
	.caiyangdian>input,
	.zongjine>input {
		width: 40%;
	}

	.danjia>span:last-child,
	.caiyangdian>span:last-child,
	.zongjine>span:last-child {
		font-size: 0.32rem;
	}

	.inp_list>div {
		width: 6.5rem;
		height: 0.9rem;
		border: 1px solid #e6e6e6;
		border-radius: 0.15rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 0.15rem;
	}

	.inp_list>div>input {
		font-size: 0.28rem;
		height: 80%;
		outline: none;
		border: none;
	}

	.inp_list>div>span:nth-child(1) {
		font-size: 0.32rem;
		display: block;
		width: 1.5rem;
		margin-left: 0.4rem;
	}

	.inp_list>p {
		font-size: 0.4rem;
		padding: 0.5rem 0 0.35rem 0;
	}

	.inp_list {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.zaixianzixun {
		margin-right: 0.15rem;
	}

	.btn>div {
		width: 3.2rem;
		height: 0.9rem;
		text-align: center;
		line-height: 0.9rem;
		background: #33BB33;
		border-radius: 0.1rem;
		font-size: 0.36rem;
		color: white;
	}

	.btn {
		margin-top: 0.35rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.btn_list {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.btn_list p {
		font-size: 0.4rem;
		color: #333;
	}

	.jiance {
		background: white;
		display: flex;
		flex-direction: column;
	}

	.btn_list {
		height: 2.65rem;
		width: 100%;
		background: #effaef;
	}

	.title {
		width: 100%;
		height: 6.22rem;
	}
</style>
