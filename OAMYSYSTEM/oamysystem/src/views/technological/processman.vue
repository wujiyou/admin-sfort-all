<template>
  <div class="box-card">
    <el-col :span="3" class="left">
       <Smallsider></Smallsider>
    </el-col>
    <el-col :span="1" style="color:white">1</el-col>
    <el-col :span="20" class="right">
      <router-view></router-view>
    </el-col>
  </div>
</template>
<script>
import Smallsider from "../../components/smallsider";

export default {
  name: "processman",
  data() {
    return {};
  },
  methods: {
    
  },
  components: {
    Smallsider,
  },
};
</script>
<style lang="less">
.box-card {
  margin: 15px 20px 0 20px;
  height: 80vh;

  .left {
    background-color: white;
    border-radius: 8px;
  }
  .right {
    // background-color: white;
    // border-radius: 8px;
  }
}
</style>
<style scoped>

>>> .el-menu {
  border-radius: 8px;
  text-align: left;
}
>>> .el-menu li {
  padding-left: 48px !important;
}
</style>