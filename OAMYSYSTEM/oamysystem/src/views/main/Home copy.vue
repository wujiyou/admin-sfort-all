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
      <!-- <el-aside></el-aside> -->
      <div>
        <div class="toggle-button">
          <p style="text-align: center;">
            <img @click="togleCollapse" src="../../stactic/image/qh.png" alt />
          </p>
        </div>

        <!-- <el-menu
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          :default-active="$route.path"
          text-color="#44DADE"
          active-text-color="#44DADE"
          background-color="white"
          @select="handleSelect"
          router
        >
          text-color="#3A3A3A"
          active-text-color="#44DADE"  background-color="#263238"
          text-color="#fff"
          active-text-color="#409FFF"

          <el-menu-item :index="item1.path" v-for="(item1,index) in menus" :key="index">
            <i :class="iconObj[item1.id]"></i>
            <span
              style="padding-left:5px;font-size:14px;font-weight:SourceHanSansCN-;color:#3A3A3A !important;"
            >{{item1.name}}</span>
          </el-menu-item>
        </el-menu>-->
        <div class="wrap">
          <ul>
            <li
              v-for="(index,i) in list"
              :key="i"
              class="wrapper"
              @mouseenter="enter(i)"
              @mouseleave="leave(i)"
            >
              <router-link :to="index.path" class="wrapper_a">
                <span style="margin-left:5px;font-size:14px;color:#393939">
                  <i style="color:#393939" :class="iconObj[index.id]"></i>
                  {{index.name}}
                </span>
              </router-link>
              <ul v-show="index.show" class="er_pos">
                <li v-for="(index,i) in index.children" :key="i" class="details_wrap">
                  <router-link :to="index.path" class="details">
                    <span style="font-size:12px">{{index.name}}</span>
                  </router-link>

                  <ul v-show="index.show" class="er_poss">
                    <li v-for="(index,i) in index.children" :key="i" class="detailss_wrap">
                      <router-link :to="index.path" class="details">
                        <span style="font-size:12px">{{index.name}}</span>
                      </router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
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
      // isCollapse: false,
      list: [
        {
          id: "1",
          name: "个人门户",
          children: "",
          path: "/Portal",
          show: false,
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
              path: "role",
              name: "员工档案",
              children: "",
            },
            {
              path: "resgtions",
              name: "劳动关系",
              children: [
                {
                  path: "/asdsd",
                  name: "签署合同",
                },
                {
                  path: "/retret",
                  name: "员工转正",
                },
                {
                  path: "/dfdssdfd",
                  name: "员工调岗",
                },
                {
                  path: "/sdsdfd",
                  name: "员工离职",
                },
              ],
              show: false,
            },
            {
              path: "/roless",
              name: "绩效考核",
              children: "",
            },
            {
              path: "/Kqbb",
              name: "考核管理",
              children: "",
            },
          ],
          show: false,
        },
        {
          id: "3",
          path: "/aa",
          name: "财务管理",
          children: "",
          show: false,
        },
        {
          id: "4",
          name: "仓库管理",
          path: "/as",
          children: [
            {
              path: "/zxccvb",
              name: "入库记录",
              children: "",
            },
            {
              path: "10",
              path: "/zxcasd",
              name: "出库记录",
              children: "",
            },

            {
              path: "101",
              path: "/zxceret",
              name: "库中存量",
              children: "",
            },
          ],
          show: false,
        },
        {
          id: "5",
          path: "/ass",
          name: "电子邮件",
          children: "",
          show: false,
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
              path: "/zxcmbvbnv",
              name: "新建流程",
              children: "",
            },
            {
              id: "54",
              path: "/zxcmn",
              name: "代办流程",
              children: "",
            },
            {
              id: "544",
              path: "/zxcwqewqe",
              name: "已办流程",
              children: "",
            },
          ],
          show: false,
        },
        {
          id: "7",
          path: "/asd",
          name: "资产管理",
          children: [
            {
              id: "54441",
              name: "我的资产",
              path: "/zxcwqewqe",
              children: "",
            },
            {
              id: "533",
              name: "资产领用",
              path: "/zxcdf",
              children: "",
            },
          ],
          show: false,
        },
        {
          id: "8",
          path: "/awe",
          name: "车辆管理",
          children: [
            {
              id: "544413432",
              name: "车辆信息",
              path: "/zxc",
              children: "",
            },
            {
              id: "5333234",
              name: "车辆情况",
              path: "/zxcd",
              children: "",
            },
          ],
          show: false,
        },
      ],
      show: false,
    };
  },

  methods: {
    enter(index) {
      console.log(index);
      this.list.forEach((e) => {
        console.log(e);
        e.show = false;
      });
      this.list[index].show = true;
      console.log(this.list[index]);
      console.log(index);
    },
    leave(index) {
      console.log(index);
      this.list.forEach((e) => {
        e.show = false;
      });
      this.list[index].show = false;
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
  position: relative !important;
  z-index: 0 !important;
}
.el-aside {
  background: rgba(255, 255, 255, 1);
  color: #333;
  text-align: center;
  position: relative !important;
  z-index: 1 !important;
}
.er_pos {
  position: absolute;
  left: 80%;
  top: 0px;
  z-index: 10;
}
.er_poss {
  position: absolute;
  left: 100%;
  top: 0px;
  z-index: 10;
}
.wrap {
  width: 150px;
  position: relative;
  z-index: 2;
}
.wrapper {
  list-style: none;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  position: relative;
  margin: 10px 0;
  padding: 10px 0;
}
.wrapper_a {
  text-decoration: none;
  color: #000000;
}
.wrap ul li a {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.wrap ul li a span:hover {
  color: #44d9de;
}
.details_wrap {
  width: 100px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  /* padding-left: 5px; */
  /* z-index: 2; */
  list-style: none;
}
.detailss_wrap {
  width: 100px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  /* padding-left: 5px; */
  /* z-index: 2; */
  list-style: none;
}
.details_wrap a {
  text-decoration: none;
  text-align: center;
  color: #393939;
}
.wrapper_a span:hover {
  color: #09cdd3 !important;
}
.details_wrap :hover {
  background-color: #f3fdfd;
}
.details_wrap a :hover {
  color: #09cdd3;
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
.el-menu-item.is-active {
  /* background-color: #44DADE !important;
  opacity:0.1 !important; */
  color: #0bced4 !important;
}
</style>