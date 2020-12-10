import Vue from 'vue'
import VueRouter from 'vue-router'

import {
  Message
} from 'element-ui';

Vue.use(VueRouter)
const Login = () => import('../views/Login/Login')
const Home = () => import('../views/main/Home.vue')
const Portal =() => import('../views/Portal/Portal.vue') //个人门户
const Managing =() => import("../views/Managingpeople/Managing.vue") //人事管理
const ygdangan =() => import("../views/dangan/ygdangan.vue")//员工档案
// const Sider = ()=> import("../views/main/side.vue")
const Process =()=>import("../views/Process/process.vue") //流程管理
const Kqbb =()=>import("../views/Managingpeople/Kqbb.vue")//考勤管理
const Transfer =()=>import("../views/Labor/transfer.vue") //员工调岗
const Dimission =()=>import("../views/Labor/dimission.vue") //员工离职
const Ygworker =()=>import("../views/Labor/ygworker.vue") //员工离职
const Hetong =()=>import("../views/Labor/hetong.vue") //签署合同
const Assetgl =()=>import("../views/asset/assetgl.vue") //我的资产
const Assetly =()=>import("../views/asset/assetly.vue") //资产领用
const Processman =()=>import("../views/technological/processman.vue") //待办流程
const Bmzj = ()=>import("../components/bmzj.vue") //部门年度总结
const Chucwsq = ()=>import("../components/chucwsq.vue") //出差外出申请
const Yibanlc = ()=>import("../views/technological/yibanlc.vue")
const Ybbmzj = () =>import("../components/ybbmzj.vue")
const Email = () =>import("../views/E-mail/email.vue")  //电子邮件
const Messages =() =>import("../components/emailzj/message.vue") //收件箱

const Err = () =>import("../views/error/err.vue") //404页面
const Vehicle = () =>import("../views/car/Vehicle.vue") //车辆登记
const Prearrange = () =>import("../views/car/Prearrange.vue") //车辆信息
const Condition = () =>import("../views/car/Condition.vue") //车辆情况
const Storage = () =>import("../views/Warehouse/storage.vue") //出库记录
const entryTime = () =>import("../views/Warehouse/entryTime.vue") //入库记录
const Inventory = () =>import("../views/Warehouse/Inventory.vue") //库存量
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  // {
  //   path: "/Sider",
  //   name: "Sider",
  //   component: Sider
  // },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    children:[
      {
        path:"/Portal",
        name:"Portal",
        component:Portal
      },
      {
        path:"/Managing",
        name:"Managing",
        component:Managing
      },
      {
        path:"/ygdangan",
        name:"ygdangan",
        component:ygdangan
      },
      {
        path:"/Process",
        name:"Process",
        component:Process
      },
      {
        path:"/Kqbb",
        name:"Kqbb",
        component:Kqbb
      },
      {
        path:"/Transfer",
        name:"Transfer",
        component:Transfer
      },
      {
        path:"/Dimission",
        name:"Dimission",
        component:Dimission
      },
      {
        path:"/Ygworker",
        name:"Ygworker",
        component:Ygworker
      },
      {
        path:"/Hetong",
        name:"Hetong",
        component:Hetong
      },
      {
        path:"/Assetgl",
        name:"Assetgl",
        component:Assetgl
      },
      {
        path:"/Assetly",
        name:"Assetly",
        component:Assetly
      },
      {
        path:"/Processman",
        name:"Processman",
        component:Processman,
        redirect: '/Bmzj',
        children:[
          {
            path:"/Bmzj",
            name:"Bmzj",
            component:Bmzj
          },
          {
            path:"/Chucwsq",
            name:"Chucwsq",
            component:Chucwsq
          }
        ]
      },
      {
        path:"/Yibanlc",
        name:"Yibanlc",
        component:Yibanlc,
        redirect: '/Ybbmzj',
        children:[
          {
            path:"/Ybbmzj",
            name:"Ybbmzj",
            component:Ybbmzj
          }
        ]
      },
      {
        path:"/Err",
        name:"Err",
        component:Err
      },
      {
        path:"/Email",
        name:"Email",
        component:Email,
        redirect: '/Messages',
        children:[
          {
            path:"/Messages",
            name:"Messages",
            component:Messages
          }
        ]
      },
      {
        path:"/Prearrange",
        name:"Prearrange",
        meta: {
          title: '车辆信息'
        },
        component:Prearrange
      },
      {
        path:"/Vehicle",
        name:"Vehicle",
        meta:{
          title:"车辆登记"
        },
        component:Vehicle
      },
      {
        path:"/Condition",
        name:"Condition",
        meta:{
          title:"车辆情况"
        },
        component:Condition
      },
      {
        path:"/Storage",
        name:"Storage",
        meta:{
          title:"出库时间"
        },
        component:Storage
      },
      {
        path:"/entryTime",
        name:"entryTime",
        meta:{
          title:"入库时间"
        },
        component:entryTime
      },
      {
        path:"/Inventory",
        name:"Inventory",
        meta:{
          title:"库中存量"
        },
        component:Inventory
      }
    ]
    
  }
  
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {

  if (to.path === '/') {
    next()
  } else {
    const token = sessionStorage.getItem('access_token')
    if (!token) {
     
      Message.warning('请先登录')
      router.push({
        name: 'Login'
      })
      return
    }
    next()
  }
})
export default router


