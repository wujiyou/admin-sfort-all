<template>
  <div class="aside_con" style="height: 100%">
    <!--logo栏位-->
    <div class="toggle-button">
      <!-- <span style="display: block;">民用液化气瓶</span> -->
      <img
        style="width:40px;height:40px;margin-bottom:25px; border-radius: 50%;position: relative;top:20px;"
        src="../../../assets/images/touxiang.png"
        alt
      />
      <span
        class="logo_png"
        :style="{display: (getCollapseState == false)?'inline-block':'none'}"
        style="font-size:12px;position: relative;top:-12px;left:10px;display:inline-block"
      >
        <span style="display:block">{{this.username}}</span>
        <span style="display:block;margin-top:8px">{{this.zg}}</span>
      </span>
    </div>
    <!-- <div v-if="nav.LOGO && this.nav.LOGO.id === '1'"
         class="avatar avatar-flex bg"
         :style="{width: (getCollapseState == false)?'200px':'64px'}">
      <div>
        <a href="javascript:;">
          <img :src="require('@/assets'+nav.LOGO.img)" alt="" :style="{width: '50px', height: '50px'}">
          <span>{{nav.LOGO.title}}</span>
        </a>
      </div>
    </div>-->

    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical"
      :collapse="getCollapseState"
      :background-color="getAsideColor"
      :text-color="getATextColor"
      :active-text-color="getActiveColor"
       unique-opened
      ref="menu"
      router
    >
    <!-- :default-openeds="defaultOpen" -->
      <!--动态生成sideItem-->
      <template v-for="(item, parentIndex) in nav">
        <SideNav :item="item" :index="parentIndex" :state="getCollapseState"></SideNav>
      </template>
    </el-menu>
  </div>
</template>

<script>
import SideNav from "./SideNav";
import { mapGetters } from "vuex";
import Axios from "axios";
import style from "@/assets/css/public.css";
import { getNav } from '../../../utils/api'
export default {
  name: "Aside",
  data() {
    return {
      nav: [], //左侧导航数据数组
      // defaultOpen: ["0"],
      zg: "",
    };
  },
  computed: {
    // activeNav() {
    //   //当前激活的导航
    //   return this.$route.path;
    // },
    /*
     * 在VUEX中获得asideColor颜色值
     * */
    ...mapGetters({
      getAsideColor: "globalSetting/AsideColor",
      getATextColor: "globalSetting/ATextColor",
      getActiveColor: "globalSetting/ActiveColor",
      // getDoubleOpen: "globalSetting/DoubleOpen",
      getCollapseState: "header/CollapseState",
    }),
  },
  async created() {
    this.username = sessionStorage.getItem("username");
    const use = await this.$http.get(`unit/findByUnitId`);
    this.zg = use.data.data.name;
    console.log(use);


    //获得导航的json数据
    console.log(location);
    const res = await this.$http.get(`/menu/findAll`);
    this.$store.dispatch("header/setNavs", {
      nav: res.data,
    });
    console.log(res);
    this.nav = res.data;


  },
  components: {
    SideNav,
  },
};
</script>

<style scoped>
@import "~font-awesome/css/font-awesome.min.css";
.bg {
  background-color: #32373d;
}

.toggle-button {
  /* width: 220px; */
  background-color: #263238;
  font-size: 14px;
  line-height: 15px;
  padding-left: 10px;
  padding-right: 10px;
  color: #fff;
}

.el-menu-vertical:not(.el-menu--collapse) {
  /* padding-top: 60px; */
  width: 240px;
  min-height: 400px;
  height: calc(100% - 70px);
}

.aside-show {
  width: 200px;
  max-width: 200px;
  min-height: 400px;
  height: 100%;
}

.aside-hide {
  width: 64px;
  max-width: 64px;
  min-height: 400px;
  height: 100%;
}

.el-menu--collapse {
  height: 100%;
  /* margin-top: 60px; */
}

.el-submenu [class^="fa"] {
  vertical-align: middle;
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 16px;
}
.aside_con {
  /* padding-top:60px ; */

  background-color: #324148 !important;
}
.top1 {
  display: inline-block;
  line-height: 46px;
}
</style>
<style>
.el-table__header-wrapper {
  border-top: 1px solid #ebeef5 !important;
}
.el-menu-item.is-active {
  background-color: #29b0a3 !important;
  color: white !important;
}
</style>