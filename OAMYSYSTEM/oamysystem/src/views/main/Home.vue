<template>
  <el-container style="height:100%">
    <el-header class="header">
      <el-row>
        <el-col :span="3">
          <p class="toptext">
            <!-- <i style="font-size:18px;margin-right:10px;" class="el-icon-help"></i> -->
            公司内部OA管理系统
          </p>
        </el-col>
        <el-col :span="19">
          <div class="grid-content bg-purple-light light">
            <span style="color:white;">1</span>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple purple">
            <el-col :span="24" class="heigth-botm">
              <span style="cursor: pointer;width:40px;height:30px; border-radius: 20px;">
                <img
                  style="width:30px;height:30px;border-radius: 50%;position:relative;top:-1px"
                  src="../../assets/img/touxiang.png"
                  alt
                />
              </span>
              <span class="qxin">
                青芯草原
                <el-dropdown>
                  <span class="el-dropdown-link" trigger="click">
                    <i class="el-icon-caret-bottom"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-coordinate">个人中心</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-video-play">
                      <span @click="handlesSingle()">退出登录</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </span>
            </el-col>
          </div>
        </el-col>
      </el-row>
    </el-header>

    <el-container>
     <el-aside class="aside" :width="isCollapse ? '64px' : '200px'">
          <div class="toggle-button">
          <p style="text-align: center;">
            <img @click="togleCollapse" src="../../stactic/image/qh.png" alt />
          </p>
        </div>

        <el-menu
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          :default-active="$route.path"
          router
         
        >
          <!--  text-color="#fff"
          active-text-color="#409FFF" -->
          <el-menu-item
            :index="item1.path"
            v-for="(item1,index) in list"
            :key="index"
            v-if="item1.children==''"
          >
            <i :class="iconObj[item1.id]"></i>
            <span
              style="padding-left:5px;font-size:14px;"
            >{{item1.name}}</span>
          </el-menu-item>

          <!-- 判断一级菜单是否有的情况  (有的情况) -->
          <el-submenu
            :index="item1.id"
            v-for="(item1,index) in list"
            :key="index"
            v-if="item1.children!=''"
          >
              <template slot="title" v-if="item1.children">
              <i :class="iconObj[item1.id]"></i>
              <span
                style="padding-left:5px;font-size:14px;font-weight:SourceHanSansCN-;"
              >{{item1.name}}</span>
            </template>

            <!-- 判断二级菜单是否有子节点  (没有的这种情况) -->
            <el-menu-item
              :index="item2.path"
              v-for="(item2,index) in item1.children"
              :key="index"
              v-if="item2.children==''"
              class="menu_item"
            >
              <!-- <i class="el-icon-menu"></i> -->
              <span style="margin-left:10px;"><i class="el-icon-menu"></i>{{item2.name}}</span>
            </el-menu-item>

          
            <!-- 判断二级菜单是否有子节点  (有的这种情况) -->
            <el-submenu
              :index="item2.path"
              v-for="(item2,index) in item1.children"
              :key="index"
              v-if="item2.children!=''"
              class="menu_item"
            >
              <!-- <template slot="title"> -->
                <span style="margin-left:23px;" slot="title"><i class="el-icon-menu"></i>{{item2.name}}</span>
              <!-- </template> -->

              <!-- 判断是否有三级菜单 (有的情况)-->
              <el-menu-item
                v-for="(item3,index) in item2.children"
                :key="index"
                class="menu_item"
                :index="item3.path"
              >
                <!-- <i class="el-icon-menu"></i> -->
                {{item3.name}}
              </el-menu-item>
            </el-submenu>


          </el-submenu>
        </el-menu>
      </el-aside>


      <el-main style="background-color:#F4F6F8;">
        
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import $ from "jquery";
export default {
  name: "home",
  data() {
    return {
      iconObj: {
        "1": "iconfont icon-gerencanshu",
        "2": "iconfont icon-fl-renshi",
        "3": "iconfont icon-jurassic_law-deal",
        "4": "iconfont icon-cangkuguanli",
        "5": "iconfont icon-youjian2",
        "6": "iconfont icon-guanli2",
        "7": "iconfont icon-qunfengcaiwuguanli",
        "8": "iconfont icon-shezhi_gaoliang",
      },
      to: 0,
      // 默认不折叠
      isCollapse: false,
      list: [
        {
          id: "1",
          name: "个人门户",
          children: "",
          path: "/Portal",
         
        },
        {
          path: "/Managing",
          id: "2",
          name: "人事管理",
          children: [
            {
              path: "/Managing",
              name: "人事首页",
              children: "",
            },
            {
              path: "/ygdangan",
              name: "员工档案",
              children: "",
            },
            {
              path: "/resgtions",
              name: "劳动关系",
              children: [
                {
                  path: "/Hetong",
                  name: "签署合同",
                },
                {
                  path: "/Ygworker",
                  name: "员工转正",
                },
                {
                  path: "/Transfer",
                  name: "员工调岗",
                },
                {
                  path: "/Dimission",
                  name: "员工离职",
                },
              ],
             
            },
            {
              path: "/Err",
              name: "绩效考核",
              children: "",
            },
            {
              path: "/Kqbb",
              name: "考核管理",
              children: "",
            },
          ],
       
        },
        {
          id: "3",
          path: "/Err",
          name: "财务管理",
          children: "",
        
        },
        {
          id: "4",
          name: "仓库管理",
          path: "/as",
          children: [
            {
              id:"23213",
              path: "/entryTime",
              name: "入库记录",
              children: "",
            },
            {
              id: "10",
              path: "/Storage",
              name: "出库记录",
              children: "",
            },

            {
              path: "101",
              path: "/Inventory",
              name: "库中存量",
              children: "",
            },
          ],
        },
        {
          id: "5",
          path: "/Email",
          name: "电子邮件",
          children: "",
        
        },
        {
          id: "6",
          path: "/ad",
          name: "流程管理",
          children: [
            {
              id: "5444",
              path: "/Process",
              name: "流程首页",
              children: "",
            },
            {
              id: "53",
              path: "/Err",
              name: "新建流程",
              children: "",
            },
            {
              id: "54",
              path: "/Processman",
              name: "待办流程",
              children: "",
            },
            {
              id: "544",
              path: "/Yibanlc",
              name: "已办流程",
              children: "",
            },
          ],
         
        },
        {
          id: "7",
          path: "/asd",
          name: "资产管理",
          children: [
            {
              id: "54441",
              name: "我的资产",
              path: "/Assetgl",
              children: "",
            },
            {
              id: "533",
              name: "资产领用",
              path: "/Assetly",
              children: "",
            },
          ],
        
        },
        {
          id: "8",
          path: "/awe",
          name: "车辆管理",
          children: [
            {
              id: "544413432",
              name: "车辆信息",
              path: "/Prearrange",
              children: "",
            },
            {
              id: "5333234",
              name: "车辆情况",
              path: "/Condition",
              children: "",
            },
            {
              id: "5333234111",
              name: "车辆登记",
              path: "/Vehicle",
              children: "",
            }
          ],
        
        },
      ],
     
    };
  },

  methods: {
   // 点击侧边栏菜单 添加到头部
      addAside(data, key) {
        console.log("----------------");
        console.log(data);
        console.log(key);
        // 判断添加的是否存在如果不存在添加
        const has = this.headerData.find(item => item.name == data.name);
        if (!has) {
          data.key = key;
          this.headerData.push(data);
        }
        this.headerSelected = data.name;
      },
      // 新增加的数组删除
      deleteAside(key) {
        this.headerData.splice(key, 1);
      },
      // 点击头部菜单 反向选中 侧边栏menu
      selectedAsideMenu(selected) {
        this.asideDefaultSelected = selected.key
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    handleSelect(key, keyPath) {
      console.log("-------------");
      console.log(key, keyPath);
      // $(".sss").show()
    },
    togleCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    handlesSingle() {
      //  清除token
      // debugger;
      console.log(11);
      this.$message.success("退出成功");
      this.$router.push({ name: "Login" });
      sessionStorage.clear();
    },
  },
};
</script>
<style scoped>
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
.el-aside {
  background: rgba(255, 255, 255, 1);
  color: #333;
  text-align: center;
}

>>>.el-menu-item.is-active {
 background:rgba(235, 251, 251, 1) !important;
 color: #0ACDD3 !important;
}

.el-icon-s-operation {
  font-size: 20px;
}

.toggle-button {
  /* width: 220px; */
  background-color: white;
  font-size: 14px;
  line-height: 15px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 1vh;
  padding-top: 1vh;
  color: #263238;
  opacity: 0.5;
  cursor: pointer;
  border-bottom: 1px solid #d2d8e2;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 50px;
}

.container {
  height: 100%;
}
.header {
  height: 55px !important;
  background: rgba(255, 255, 255, 1);
  color: #333;
  z-index: 999;
}
section {
  padding: 0 !important;
}
.qxin {
  color: black;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  cursor: pointer;
}
.toptext {
  color: #44d9de;
  line-height: 46px;
  font-weight: bold;
  text-align: left;
  font-size: 16px;
}
@media screen and (max-width: 1280px) {
  .el-header {
    line-height: 0px !important;
  }
  .toptext {
    margin-top: 5px;
  }
}
@media screen and (max-width: 1024px) {
  .toptext {
    font-size: 15px;
  }
  .qxin {
    font-size: 12px;
  }
}

</style>

<style>
.menu_item div{
  padding-left: 0 !important;
}
/* .el-menu-item:focus, .el-menu-item:hover {
    outline: 0 !important;
    background-color: #EBFBFB !important;
    color: #0ACDD3 !important;
} */

.el-submenu__title:hover{
   background-color: #EBFBFB !important;
    color: #0ACDD3 !important;
}


.el-menu-item i:hover{
    color: #0ACDD3 !important;
}

.el-submenu__title i:hover{
   color: #0ACDD3 !important;
}


.el-menu-item:hover{
   background-color: #EBFBFB !important;
    color: #0ACDD3 !important;
}
.el-menu{
  border-right:0 !important;
}
</style>