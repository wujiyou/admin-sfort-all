<template>
  <div>
    <el-menu default-active="/Bmzj" router class="el-menu-vertical-demo">
      <el-menu-item index="/Bmzj">
        <span slot="title">部门年度总结</span>
      </el-menu-item>
      <el-menu-item index="/Chucwsq">
        <span slot="title">出差外出申请</span>
      </el-menu-item>
      <el-menu-item index="3">
        <span slot="title">加班申请</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span slot="title">考勤异常申请</span>
      </el-menu-item>
      <el-menu-item index="5">
        <span slot="title">辞职报告</span>
      </el-menu-item>
      <el-menu-item index="6">
        <span slot="title">岗位调动</span>
      </el-menu-item>
      <el-menu-item index="7">
        <span slot="title">人事合同签署</span>
      </el-menu-item>
      <el-menu-item index="8">
        <span slot="title">用工需求申请</span>
      </el-menu-item>
      <el-menu-item index="9">
        <span slot="title">员工离职申请</span>
      </el-menu-item>
      <el-menu-item index="10">
        <span slot="title">员工请假流程</span>
      </el-menu-item>
      <el-menu-item index="11">
        <span slot="title">员工在职证明</span>
      </el-menu-item>
      <el-menu-item index="12">
        <span slot="title">员工收入证明</span>
      </el-menu-item>
      <el-menu-item index="13">
        <span slot="title">人员需求申请</span>
      </el-menu-item>
      <el-menu-item index="14">
        <span slot="title">转正申请流程</span>
      </el-menu-item>
      <el-menu-item index="15">
        <span slot="title">用车申请流程</span>
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
</style>