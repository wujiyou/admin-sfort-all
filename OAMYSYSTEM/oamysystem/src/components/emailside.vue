<template>
  <div style="margin-top:40px;margin-bottom:40px">
    <el-menu default-active="/Messages" router class="el-menu-vertical-demo">
      <el-menu-item index="/Messages">
        <span slot="title">收件箱</span>
      </el-menu-item>
      <el-menu-item index="121">
        <span slot="title">已发送</span>
      </el-menu-item>
      <el-menu-item index="3">
        <span slot="title">草稿箱</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span slot="title">垃圾箱</span>
      </el-menu-item>
      <el-menu-item index="5">
        <span slot="title">待办邮件</span>
      </el-menu-item>
      <el-menu-item index="6">
        <span slot="title">内部邮件</span>
      </el-menu-item>
      <el-menu-item index="7">
        <span slot="title">我的文件夹</span>
      </el-menu-item>
      <el-menu-item index="8">
        <span slot="title">我的标签</span>
      </el-menu-item>
      <el-menu-item index="9">
        <span slot="title">联系人</span>
      </el-menu-item>
      <el-menu-item index="10">
        <span slot="title">附件中心</span>
      </el-menu-item>
      <el-menu-item index="11">
        <span slot="title">邮件设置</span>
      </el-menu-item>
      
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
</style>
<style scoped>
 >>>.el-menu-item.is-active {
 background:rgba(235, 251, 251, 1) !important;
 color: #0ACDD3 !important;
}

>>> .el-menu {
  border-radius: 8px;
  text-align: left;
}
>>> .el-menu li {
 /* padding:20px 48px 20px 0 !important; */
  padding-left: 48px !important;
}
>>>.el-menu-item{
  height: 68px;
  line-height: 68px;
}
</style>

