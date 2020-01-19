<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import Mint from 'mint-ui';
Vue.use(Mint);


export default {
  
}
</script>

<style>
	.mint-msgbox{
		width:5.4rem!important;
		border-radius: 0.15rem;
	}
	.mint-msgbox-btns .green{
		border-left:0.5px solid #ddd;
	}
	.green{
		color:#33BB33;
	}
	#app,html,body{
		height:100%;
		width:100%;
		overflow-y:auto;
	}
	
</style>
