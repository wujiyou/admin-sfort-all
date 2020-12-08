import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const welcome = () => import('../views/Welcome')
const login = () => import('../views/Login')
const home = () => import('../components/Home')

const notPath = () => import('../views/error/NotPath_404')
const change = () =>import('@/views/layout/headerTitle/change') //个人中心
const administration =() => import ('@/components/system/administration')  //角色管理
const hardware = () => import ('@/components/system/hardware') //硬件配置
const username = () =>import('@/components/system/username') //用户管理

const operation = () =>import('@/components/system/operation') //系统管理日志
const update = () =>import('@/components/system/update') //应用更新
const notice = () =>import('@/components/system/notice') //公告管理

//气瓶登记
const cylinder =() =>import('@/components/archives/cylinder')  //液化档案新增
const message =() =>import('@/components/archives/message')  //液化信息查看
const report =() =>import('@/components/archives/report')  //液化检验报告
const tagboard =() =>import('@/components/archives/tagboard')  //液化标签发卡
const cindustrial =() =>import('@/components/cindustrial/cindustrial')  //车用档案新增
const cindustrial1 =() =>import('@/components/cindustrial/cindustrial1')  //车用标签发卡
const cindustrial2 =() =>import('@/components/cindustrial/cindustrial2')  //车用检验报告
const cinmessage =() =>import('@/components/cindustrial/cinmessage')  //车用信息查看
const industrial =() =>import('@/components/industrial/industrial')  //工业档案新增
const bindustrial =() =>import('@/components/industrial/bindustrial')  //工业标签发卡
const jindustrial =() =>import('@/components/industrial/jindustrial')  //工业检验报告
const meges =() =>import('@/components/industrial/meges')  //工业信息查看

//预警管理
 //告警信息
 const warning =() =>import('@/components/gaojingxinxi/warning')  //气瓶超期预警
 const personnel =() =>import('@/components/gaojingxinxi/personnel')  //人员到期预警
 const due =() =>import('@/components/gaojingxinxi/due')  //单位到期预警
 
 //充装记录
 const out =() =>import('@/components/chongzhuang/out')  //超期气瓶扫描记录
 const abnormal =() =>import('@/components/chongzhuang/abnormal')  //异常充装记录
 const unauth =() =>import('@/components/chongzhuang/unauth')  //未授权充装记录

 //系统监管
 const registration =() =>import('@/components/xitongjianguan/registration')  //气瓶登记日志
 const operation1 =() =>import('@/components/xitongjianguan/operation1')  //特权卡使用日志
 const Inspection =() =>import('@/components/xitongjianguan/Inspection')  //气瓶检验日志
 const Hairpin =() =>import('@/components/xitongjianguan/Hairpin')  //气瓶发卡日志
 



const prices =() =>import('@/components/registration/prices')  //充装单位价格查询

const supervise = () => import('@/components/registration/registration1') //监管机构
const manufacture = () =>import('@/components/registration/registration2') //制造单位
const fillingunit =() =>import('@/components/registration/registration3')  //充装单位
const building = () =>import('@/components/registration/registration5')  //使用单位
const inspection = () =>import('@/components/registration/registration4') //检验单位
const Distribution = () =>import('@/components/registration/registration6') //配送单位

const enterpriser = () => import('../views/Transportmanage/enterpriser') //运输企业登记管理
const record = () => import('../views/Transportmanage/record') //运输车辆档案管理

const accomplish = () => import('../views/liquesyne/accomplish') //液化配送完成气瓶
const trace = () => import('../views/liquesyne/trace') //液化气瓶充装记录
const number = () => import('../views/liquesyne/number') //液化气瓶数量状态
const map = () =>import('../views/liquesyne/map') //液化气瓶地图显示
const order =() =>import('../views/liquesyne/order') //液化气瓶客户订单管理
const evaluate =() =>import('../views/liquesyne/evaluate') //液化气瓶客户评价
const portfolio =() =>import('../views/liquesyne/portfolio') //液化气瓶客户档案管理

const carfilling =() =>import('../views/zhcarengineering/carfilling') //车用气瓶气瓶充装记录
const privilegefilling =() =>import('../views/zhcarengineering/privilegefilling') //车用气瓶特权卡充装记录

const demand = ()=>import('../views/mobilefilling/demand')  //移动充装档案查询
const mobilerecord = ()=>import('../views/mobilefilling/mobilerecord') //移动充装记录
const scannogram = () =>import('../views/mobilefilling/scannogram')  //充装扫描记录
const verify =()=>import('../views/mobilefilling/verify') //检验变更记录

const  gyatlas = () =>import('../views/Industrialcylinders/gyatlas') //工业气瓶地图显示
const gynumber = () =>import('../views/Industrialcylinders/gynumber') //工业气瓶数量状态
const gyorder = () =>import('../views/Industrialcylinders/gyorder') //工业气瓶客户订单管理
const gypeisong = () =>import('../views/Industrialcylinders/gypeisong') //工业气瓶配送完成气瓶
const gytrace = () =>import('../views/Industrialcylinders/gytrace') //工业气瓶充装记录
const bigIndustrial = () =>import('../components/bigIndustrial/gdata')  //工业气瓶数据界面
const mobilefilling = () =>import('../components/liquefied/mobilefilling') //移动充装数据界面

const liquefied =() => import('../components/liquefied/liquefied') //液化大数据界面

const vehicle =() => import('../views/vehicle/vehicle') //车用液化大数据界面
const allMap =() => import('../components/allMap/allMap') //综合四合一大数据平台
const routes = [
  {
    path: '/',
    meta: {
      title: '登录页面'
    },
    component: login
  },
  {
    path:"/allMap",
    meta:{
      title:"综合四合一大数据平台"
    },
    component:allMap
  },
  {
    path: '/404',
    meta: {
      title: '错误页面-404'
    },
    component: notPath
  },
  {
    path: '/home',
    redirect: '/welcome',
    component: home,
    children: [
      { //首页
        path: '/welcome',
        meta: {
          title: '首页'
        },
        component: welcome,
        
      },
      { //首页
        path: '/change',
        meta: {
          title: '个人中心'
        },
        component: change,
        
      },
      {
        path:"/unit/unit/supervise",
        name:"supervise",
        meta:{
          title:"监管机构"
        },
        component:supervise
      },
      {
        path:"/unit/unit/made",
        name:"manufacture",
        meta:{
          title:"制造单位"
        },
        component:manufacture
      },
      {
        path:"/unit/unit/filling",
        name:"fillingunit",
        meta:{
          title:"充装单位"
        },
        component:fillingunit
      },
      {
        path:"/unit/unit/use",
        name:"building",
        meta:{
          title:"使用单位"
        },
        component:building
      },
      {
        path:"/unit/unit/checkout",
        name:"inspection",
        meta:{
          title:"检验单位"
        },
        component:inspection
      },
      {
        path:"/unit/unit/delivery",
        name:"Distribution",
        meta:{
          title:"配送单位"
        },
        component:Distribution
      },
      {
        path: "/system/role",
        name: "administration",
        meta: {
          title: '角色管理'
        },
        component: administration
      },
      {
        path: '/system/hardware',
        name: "hardware",
        meta: {
          title: '硬件配置'
        },
        component:hardware
      },
      {
       path:"/system/user",
       name:"username",
       meat:{
         title:"用户管理"
       },
       component:username
      },
      {
        path:"/warning/system/operate",
        name:"operation",
        meta:{
          title:"系统操作日志"
        },
        component:operation
      },
      {
        path:"/system/version",
        name:"update",
        meta:{
          title:"应用更新"
        },
        component:update
      },
      {
        path:"/system/announcement",
        name:"notice",
        meta:{
          title:"公告管理"
        },
        component:notice
      },
      //气瓶登记
      //档案新增
      {
        path:"/bottle/archives/liquefied",
        name:"cylinder",
        meta:{
          title:"液化档案新增"
        },
        component:cylinder
      },
      {
        path:"/bottle/labelCard/liquefied",
        name:"tagboard",
        meta:{
          title:"液化标签发卡"
        },
        component:tagboard
      },
      {
        path:"/bottle/report/liquefied",
        name:"report",
        meta:{
          title:"液化检验报告"
        },
        component:report
      },
      {
        path:"/message",
        name:"message",
        meta:{
          title:"液化信息查看"
        },
        component:message
      },
      {
        path:"/bottle/archives/car",
        name:"cindustrial",
        meta:{
          title:"车用档案新增"
        },
        component:cindustrial
      },
      {
        path:"/bottle/labelCard/car",
        name:"cindustrial1",
        meta:{
          title:"车用标签发卡"
        },
        component:cindustrial1
      },
      {
        path:"/bottle/report/car",
        name:"cindustrial2",
        meta:{
          title:"车用检验报告"
        },
        component:cindustrial2
      },
      {
        path:"/cinmessage",
        name:"cinmessage",
        meta:{
          title:"车用信息查看"
        },
        component:cinmessage
      },
      {
        path:"/bottle/archives/industrial",
        name:"industrial",
        meta:{
          title:"工业档案新增"
        },
        component:industrial
      },
      {
        path:"/bottle/labelCard/industrial",
        name:"bindustrial",
        meta:{
          title:"工业标签发卡"
        },
        component:bindustrial
      },
      {
        path:"/bottle/report/industrial",
        name:"jindustrial",
        meta:{
          title:"工业检验报告"
        },
        component:jindustrial
      },
      {
        path:"/meges",
        name:"meges",
        meta:{
          title:"工业信息查看"
        },
        component:meges
      },
     //预警管理
     //告警信息
      {
        path:"/warning/msg/bottle",
        name:"warning",
        meta:{
          title:"气瓶超期预警"
        },
        component:warning
      },
      {
        path:"/warning/msg/personnel",
        name:"personnel",
        meta:{
          title:"人员到期预警"
        },
        component:personnel
      },
      {
        path:"/warning/msg/unit",
        name:"due",
        meta:{
          title:"单位到期预警"
        },
        component:due
      },

      //充装记录
      {
        path:"/warning/filling/out",
        name:"out",
        meta:{
          title:"超期气瓶扫描记录"
        },
        component:out
      },
      {
        path:"/warning/filling/exception",
        name:"abnormal",
        meta:{
          title:"异常充装记录"
        },
        component:abnormal
      },
      {
        path:"/warning/filling/unauth",
        name:"unauth",
        meta:{
          title:"未授权充装记录"
        },
        component:unauth
      },


     //系统监管
     {
      path:"/warning/system/bottleLogin",
      name:"registration",
      meta:{
        title:"气瓶登记日志"
      },
      component:registration
    },
    {
      path:"/warning/system/operation",
      name:"operation1",
      meta:{
        title:"特权卡使用日志"
      },
      component:operation1
    },
    {
      path:"/warning/system/bottleReport",
      name:"Inspection",
      meta:{
        title:"气瓶检验日志"
      },
      component:Inspection
    },
    {
      path:"/warning/system/bottleCard",
      name:"Hairpin",
      meta:{
        title:"气瓶发卡日志"
      },
      component:Hairpin
    },


      {
        path:"/prices",
        name:"prices",
        meta:{
          title:"价格查询"
        },
        component:prices
      },
      {
        path:"/unit/car/company",
        name:"enterpriser",
        meta:{
          title:"运输企业登记管理"
        },
        component:enterpriser
      },
      {
        path:"/unit/car/car",
        name:"record",
        meta:{
          title:"运输车辆档案管理"
        },
        component:record
      },
      {
        path:"/data/liquefied/delivery",
        name:"accomplish",
        meta:{
          title:"配送完成气瓶"
        },
        component:accomplish
      },
      {
        path:"/query/liquefied/filling",
        name:"trace",
        meta:{
          title:"液化气瓶充装记录"
        },
        component:trace
      },
      {
        path:"/query/liquefied/bottleNumber",
        name:"number",
        meta:{
          title:"液化气瓶数量状态"
        },
        component:number
      },
      {
        path:"/query/liquefied/map",
        name:"map",
        meta:{
          title:"液化气瓶位置显示"
        },
        component:map
      },
      {
        path:"/query/liquefied/order",
        name:"order",
        meta:{
          title:"液化气瓶客户订单管理"
        },
        component:order
      },
      {
        path:"/query/liquefied/evaluation",
        name:"evaluate",
        meta:{
          title:"液化气瓶客户评价"
        },
        component:evaluate
      },
      {
        path:"/query/liquefied/client",
        name:"portfolio",
        meta:{
          title:"液化气瓶客户档案管理"
        },
        component:portfolio
      },
      {
        path:"/query/car/bottleFilling",
        name:"carfilling",
        meta:{
          title:"车用气瓶气瓶充装记录"
        },
        component:carfilling
      },
      {
        path:"/query/car/tq",
        name:"privilegefilling",
        meta:{
          title:"车用气瓶特权卡充装记录"
        },
        component:privilegefilling
      },
      {
        path:"/query/phone/dangan",
        name:"demand",
        meta:{
          title:"移动充装档案查询"
        },
        component:demand
      },
      {
        path:"/query/phone/fill",
        name:"mobilerecord",
        meta:{
          title:"移动充装记录"
        },
        component:mobilerecord
      },
      {
        path:"/query/phone/fillscan",
        name:"scannogram",
        meta:{
          title:"充装扫描记录"
        },
        component:scannogram
      },
      {
        path:"/query/phone/check",
        name:"verify",
        meta:{
          title:"检验变更记录"
        },
        component:verify
      },
      {
        path:"/query/industrial/map",
        name:"gyatlas",
        meta:{
          title:"工业气瓶地图显示"
        },
        component:gyatlas
      },
      {
        path:"/query/industrial/bottleNumber",
        name:"gynumber",
        meta:{
          title:"工业气瓶数量状态"
        },
        component:gynumber
      },
      {
        path:"/query/industrial/client",
        name:"gyorder",
        meta:{
          title:"工业气瓶充装记录"
        },
        component:gyorder
      },
      {
        path:"/query/industrial/delivery",
        name:"gypeisong",
        meta:{
          title:"工业气瓶配送完成气瓶"
        },
        component:gypeisong
      },
      {
       path:"/query/industrial/bottleFilling",
       name:"gytrace",
       meta:{
         title:"工业气瓶充装记录"
       },
       component:gytrace
      },
      {
        path:"/data/industrial",
        name:"bigIndustrial",
        meta:{
          title:"工业气瓶大数据界面"
        },
        component:bigIndustrial
      },
      {
        path:"/data/phone",
        name:"mobilefilling",
        meta:{
          title:"移动充装数据界面"
        },
        component:mobilefilling
      },
      {
        path:"/data/liquefied",
        name:"liquefied",
        meta:{
          title:"液化大数据界面"
        },
        component:liquefied
      },
      {
        path:"/data/car",
        name:"vehicle",
        meta:{
          title:"车用大数据界面"
        },
        component:vehicle
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/*
* 全局前置路由
* */
// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title
//   if (to.matched.length === 0) {
//     next('/404')
//   }
//   //校验是否登录，防止不登录，直接进入其他页面
//   if ((to.path == '/login' && from.path === '/') || (to.path == '/welcome' && from.path === '/login')) {
//     next()
//   } else {
//     if (sessionStorage.getItem('profile') === null) {
//       next('/login')
//     } else {
//       next()
//     }
//   }
// })


//重写路由的push方法
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

export default router
