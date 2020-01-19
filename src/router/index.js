import Vue from 'vue'
import Router from 'vue-router'
import Wode from '../components/wode'
import Xianjinzhanghu from '../components/xianjinzhanghu'
import Tixian from '../components/tixian'
import Tixianchenggong from '../components/tixianchenggong'
import Chuangyejiangjin from '../components/chuangyejiangjin'
import Lipinduihuan from '../components/lipinduihuan'
import Commendetail from '../components/commendetail'
import Duihuanxinxi from '../components/duihuanxinxi'
import Duihuanchenggong from '../components/duihuanchenggong'
import Wodetuandui from '../components/wodetuandui'
import Jifenzhanghu from '../components/jifenzhanghu'
import Shouyiguanli from '../components/shouyiguanli'
import Sucaizhongxin from '../components/sucaizhongxin'
import Bangzhuzhongxin from '../components/bangzhuzhongxin'
import BangzhuList from '../components/bangzhu_list'
import Order from '../components/order'
import Hongbao from '../components/hongbao'
import Chaxunzhongxin from "../components/chaxunzhongxin"
import Chaxunliebiao from "../components/chaxunliebiao"
import Chaxundetail from "../components/chaxundetail"
import Shenqingtuikuan from "../components/shenqingtuikuan"
import Tuikuanchenggong from '../components/tuikuanchenggong'
import Jiance from '../components/jiance'
import Zhifuchenggong from '../components/zhifuchenggong'
import Zhili from '../components/zhili'
import Yaoqinghaoyou from '../components/yaoqinghaoyou'
import Shouquan from '../components/shouquan'
import Qiandao from '../components/qiandao'
import Qiandaojilu from '../components/qiandaojilu'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path:'/',
			name:"wode",
			component:Wode,
			meta:{
				title:"个人中心"
			}
		},
		{
			path: '/xianjinzhanghu',
			name: "xianjinzhanghu",
			component: Xianjinzhanghu,
			meta: {
				title: "现金账户"
			}
		},
		{
			path:'/tixian',
			name:'tixian',
			component:Tixian,
			meta:{
				title:"提现"
			}
		},
		{
			path:"/tixianchenggong",
			name:'tixianchenggong',
			component:Tixianchenggong,
			meta:{
				title:'提现成功'
			}
		},
		{
			path:"/chuangyejiangjin",
			name:'chuangyejiangjin',
			component:Chuangyejiangjin,
			meta:{
				title:'创业奖金'
			}
		},
		{
			path:'/lipinduihuan',
			name:'lipinduihuan',
			component:Lipinduihuan,
			meta:{
				title:'礼品兑换'
			}
		},
		{
			path:'/commendetail',
			name:'commendetail',
			component:Commendetail,
			meta:{
				title:'商品详情'
			}
		},
		{
			path:'/duihuanxinxi',
			name:'duihuanxinxi',
			component:Duihuanxinxi,
			meta:{
				title:'兑换信息'
			}
		},
		{
			path:'/duihuanchenggong',
			name:'duihuanchenggong',
			component:Duihuanchenggong,
			meta:{
				title:'兑换成功'
			}
		},
		{
			path:'/wodetuandui',
			name:'wodetuandui',
			component:Wodetuandui,
			meta:{
				title:'我的团队'
			}
		},
		{
			path:'/jifenzhanghu',
			name:'jifenzhanghu',
			component:Jifenzhanghu,
			meta:{
				title:'积分账户'
			}
		},
		{
			path:'/shouyiguanli',
			name:'shouyiguanli',
			component:Shouyiguanli,
			meta:{
				title:'收益管理'
			}
		},
		{
			path:'/sucaizhongxin',
			name:'sucaizhongxin',
			component:Sucaizhongxin,
			meta:{
				title:'素材中心'
			}
		},
		{
			path:'/bangzhuzhongxin',
			name:'bangzhuzhongxin',
			component:Bangzhuzhongxin,
			meta:{
				title:'帮助中心'
			}
		},
		{
			path:'/bangzhu_list',
			name:'bangzhu_list',
			component:BangzhuList,
			meta:{
				title:'帮助中心'
			}
		},
		{
			path:'/order',
			name:'order',
			component:Order,
			meta:{
				title:'我的积分礼品订单'
			}
		},
		{
			path:'/hongbao',
			name:'hongbao',
			component:Hongbao,
			meta:{
				title:'领取红包'
			}
		},
		{
			path:'/chaxunzhongxin',
			name:'chaxunzhongxin',
			component:Chaxunzhongxin,
			meta:{
				title:'查询中心'
			}
		},
		{
			path:'/chaxunliebiao',
			name:'chaxunliebiao',
			component:Chaxunliebiao,
			meta:{
				title:'查询中心'
			}
		},
		{
			path:'/chaxundetail',
			name:'chaxundetail',
			component:Chaxundetail,
			meta:{
				title:'查询中心'
			}
		},
		{
			path:'/shenqingtuikuan',
			name:'shenqingtuikuan',
			component:Shenqingtuikuan,
			meta:{
				title:'申请退款'
			}
		},
		{
			path:'/tuikuanchenggong',
			name:'tuikuanchenggong',
			component:Tuikuanchenggong,
			meta:{
				title:'申请成功'
			}
		},
		{
			path:'/jiance',
			name:'jiance',
			component:Jiance,
			meta:{
				title:'“0”元检测'
			}
		},
		{
			path:'/zhifuchenggong',
			name:'zhifuchenggong',
			component:Zhifuchenggong,
			meta:{
				title:'支付成功'
			}
		},
		{
			path:'/zhili',
			name:'zhili',
			component:Zhili,
			meta:{
				title:'“0”元治理'
			}
		},
		{
			path:'/yaoqinghaoyou',
			name:'yaoqinghaoyou',
			component:Yaoqinghaoyou,
			meta:{
				title:'邀请好友'
			}
		},
		{
			path:'/shouquan',
			name:'shouquan',
			component:Shouquan,
			meta:{
				title:'授权'
			}
		},
		{
			path:'/qiandao',
			name:'qiandao',
			component:Qiandao,
			meta:{
				title:'签到'
			}
		},
		{
			path:'/qiandaojilu',
			name:'qiandaojilu',
			component:Qiandaojilu,
			meta:{
				title:'每周签到'
			}
		},
	]
})
