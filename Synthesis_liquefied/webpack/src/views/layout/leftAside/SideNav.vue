<template>
  <div class="side_con" :class="{'menu-wrapper':state}">
    <!--没有子导航-->
    <el-menu-item v-if="item.children==''" :index="item.path">
      <i :class="iconObj[item.id]"></i>
      <span v-show="!getCollapseState" style="color:#d1d1d1 !important;">{{item.name}}</span>
    </el-menu-item>

    <!-- 判断一级菜单是否有的情况  (有的情况) -->
    <el-submenu :index="item.id" :key="index" v-if="item.children!=''">
      <!-- 判断二级菜单是否有子节点  (没有的这种情况) -->
      <el-menu-item
        :index="item2.path"
        v-for="(item2,index) in item.children"
        :key="index"
        v-if="item2.children==''"
        class="menu_item"
      >
        <i class="el-icon-menu"></i>
        <span v-show="!getCollapseState" style="margin-left:15px;color:#d1d1d1">{{item2.name}}</span>
      </el-menu-item>
      <template slot="title" v-if="item.children">
        <i :class="iconObj[item.id]"></i>
        <span
          v-show="!getCollapseState"
          style="padding-left:15px;font-size:14px;font-weight:SourceHanSansCN-;"
        >{{item.name}}</span>
      </template>

      <el-submenu
        v-for="(item2,index) in item.children"
        :index="item2.id"
        :key="index"
        v-if="item2.children!=''"
      >
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span
            style="padding-left:15px;font-size:14px;font-weight:SourceHanSansCN-;color:#d1d1d1;"
          >{{item2.name}}</span>
        </template>

        <el-menu-item
          v-for="(item3,index) in item2.children"
          :key="index"
          class="menu_item"
          :index="item3.path"
        >
          <!-- <i class="el-icon-menu"></i> -->
          <span style="font-size:14px;color:#d1d1d1;">{{item3.name}}</span>
        </el-menu-item>
      </el-submenu>
    </el-submenu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SideNav",
  data() {
    return {
      iconObj: {
        "8b24656c-e8ab-4585-a80f-d939b8295b6c": "iconfont icon-huabanfuben",
        "2d2ea8e9-d8ca-46ee-89ce-d93612b2cc35": "iconfont icon-guanli2",
        "09778566-88aa-4b69-9de5-3d4830cee319": "iconfont icon-jinggao",
        "0edfffe5-b0eb-4ac5-b25e-481eca795fc3":
          "iconfont icon-renyuanguanli-copy",
        "fac5d57c-7bf3-4925-b937-6fe6a3d138f5": "iconfont icon-dangan2",
        "88f2e9a5-a44e-4891-9798-e0d5cb86cd03": "iconfont icon-nav_user ",
        "408f56a8-fef3-4b0d-8d9f-b99a47f40bb3": "iconfont icon-dangan2",
        "2a5b822f-64bd-49f8-b0e0-3de4bceff94c": "iconfont icon-huabanfuben",
        "b13269b3-c840-4c2b-921d-f7b056ab625c": "iconfont icon-huabanfuben",
        "51608d1e-c58b-4016-9463-81c289922993": "iconfont icon-huabanfuben",
      },
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    state: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      getCollapseState: "header/CollapseState",
    }),
    getTextColor() {
      //图标颜色 对应文字的颜色
      return this.$store.state.globalSetting.aTextColor;
    },
  },
};
</script>

<style scoped>
.el-submenu [class^="fa"] {
  vertical-align: middle;
  /* margin-right: 5px; */
  width: 24px;
  text-align: center;
  font-size: 16px;
}

.menu-wrapper span[slot="title"] {
  display: none;
}

.el-menu-item {
  /* padding: 0 !important; */
}
.side_con {
  background-color: black !important;
}
</style>