<template>
  <div class="box-card">
    <el-col :span="3" class="left">
      <Emailsider></Emailsider>
    </el-col>
    
    <el-col :span="20" class="right">
      <router-view></router-view>
    </el-col>
  </div>
</template>
<script>
import Emailsider from "../../components/emailside";
export default {
  data() {
    return {

    };
  },
  components:{
      Emailsider
  }
};
</script>
<style lang="less" scoped>
.box-card {
  margin: 15px 20px 0 20px;
  height: 80vh;

  .left {
    background-color: white;
    border-radius: 8px;
  }
  .right {
      margin-left:20px
    // background-color: white;
    // border-radius: 8px;
  }
}
</style>
<style scoped>

</style>