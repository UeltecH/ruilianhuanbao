<template>
	<div class="shenqingtuikuan">
		<p class='tip'>
			<span class='green'>【退款说明】</span>
			<span>1.预约时间前24小时申请退款，可全额退；24小时内申请退款，扣除50%费用；</span>
			<span>2.如果治理，检测费退还；</span>
		</p>
		
		<div class='chose' @click="chose_yuanyin">
			<span>{{yuanyin}}</span>
			<span>选择</span>
		</div>
		<div class="submit" @click='submit'>提交</div>
		
		
		<mt-popup v-model="popupVisible" position="bottom">
			<div class='chose_picker'>
				<span class='quxiao' @click="quxiao">取消</span>
				<span class='queding' @click="queding">确定</span>
			</div>
			<mt-picker :slots="liyou" @change="onValuesChange"></mt-picker>
		</mt-popup>
		
	</div>
</template>

<script>
	import { Picker,Popup,Toast } from 'mint-ui';
	export default{
		data(){
			return{
				popupVisible:false,
				yuanyin:'退款原因',
				liyou: [
					{
					  flex: 1,
					  values: ['理由1','理由2','理由3'],
					  textAlign: 'center',
					  className:'picker'
					}
				],
				xuanze:''
			}
		},
		methods: {
			onValuesChange(picker, values) {
				if (values[0] > values[1]) {
					picker.setSlotValue(1, values[0]);
				}
				this.xuanze = values[0]
			},
			chose_yuanyin:function(){
				this.popupVisible = !this.popupVisible
			},
			quxiao:function(){
				this.popupVisible = !this.popupVisible
			},
			queding:function(){
				this.yuanyin = this.xuanze
				this.popupVisible = !this.popupVisible
			},
			submit:function(){
				if(this.yuanyin == "退款原因"){
					Toast({
						message:'请选择退款原因',
						duration:1000
					});
				}else{
					this.$router.push({
						path:'/tuikuanchenggong'
					})
				}
			}
		 },
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
	.shenqingtuikuan{
		min-height:100%;
		background:white;
	}
	.picker{
		width:7.5rem;
	}
	.submit{
		width:5.9rem;
		padding:0 0.3rem;
		height:1rem;
		margin:0 auto;
		color:white;
		font-size:0.36rem;
		background:#33BB33;
		text-align: center;
		line-height:1rem;
		border-radius: 0.15rem;
		margin-top:0.3rem;
	}
	.chose span:nth-child(2){
		color:#666;
	}
	.chose{
		width:5.9rem;
		padding:0 0.3rem;
		height:1rem;
		margin:0 auto;
		display:flex;
		justify-content: space-between;
		align-items: center;
		font-size:.32rem;
		border:1px solid #e6e6e6;
		border-radius: 0.15rem;
		margin-top:0.8rem;
	}
	.tip{
		width:6.5rem;
		margin:0 auto;
		line-height:0.4rem;
		display:flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
		font-size:0.24rem;
		padding-top:0.3rem;
		color:#666;
	}
	.green{
		margin-bottom:0.1rem;
		color:#33BB33!important;
		font-size:0.32rem;
	}
</style>
