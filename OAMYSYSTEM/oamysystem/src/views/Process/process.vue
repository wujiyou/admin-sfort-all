<template>
  <div>
    <div class="box-card">
      <el-col :span="24" style="border-radius:8px;">
        <el-col class="top" :span="16">
          <el-col :span="24">
            <h5 style="text-align:left;padding:5px 10px;margin-top:20px">新建流程/New process</h5>
          </el-col>

          <el-col :span="24">
            <template>
              <el-tabs style="padding-bottom:20px" :tab-position="tabPosition">
                <el-tab-pane label="全部流程">
                  <div class="xjlc">
                    <div @mouseenter="enters(true)" @mouseleave="leaver(false)" class="xj-box"></div>
                    <div @mouseenter="enters(true)" @mouseleave="leaver(false)" class="xj-box"></div>
                    <div @mouseenter="enters(true)" @mouseleave="leaver(false)" class="xj-box"></div>
                  </div>
                  <div @mouseenter="enters(true)" @mouseleave="leaver(false)" class="xjlc">
                    <div class="xj-box"></div>
                    <div class="xj-box"></div>
                    <div class="xj-box"></div>
                  </div>
                  <div @mouseenter="enters(true)" @mouseleave="leaver(false)" class="xjlc">
                    <div class="xj-box"></div>
                    <div class="xj-box"></div>
                    <div class="xj-box"></div>
                  </div>
                  <div @mouseenter="enters(true)" @mouseleave="leaver(false)" class="xjlc">
                    <div class="xj-box"></div>
                    <div class="xj-box"></div>
                    <div class="xj-box"></div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="我的收藏">我的收藏</el-tab-pane>
                <el-tab-pane label="常用流程">常用流程</el-tab-pane>
              </el-tabs>
            </template>
          </el-col>
        </el-col>
        <el-col :span="1" style="color:#f4f6f8">&nbsp;1</el-col>
        <el-col class="top" :span="6">
          <div v-show="dialog_visible" class="cz_show">
            <el-col :span="24">
              <h5 style="text-align:left;padding:5px 10px;margin-top:20px">流程图/flow chart</h5>
            </el-col>

            <el-col :span="24">
              <p style="text-align: center;margin-top:56px">
                <img style="width:80%;height:80%" src="../../stactic/process/bg_11.jpg" alt />
              </p>
            </el-col>
          </div>
        </el-col>
      </el-col>
    </div>
  </div>
</template>
<script>
export default {
  name: "Portal",
  data() {
    return {
      tabPosition: "top",
       // 控制显示与隐藏的标识，类型为Boolean
      dialog_visible: false
    };
  },
  methods: {
     enters(visible){
        this.dialog_visible = visible;
     },
     leaver(visible){
        this.dialog_visible = visible;
     }
  },
};
</script>
<style scoped>
.box-card {
  margin: 20px 20px 0 20px;
  height: 80vh;
}
.xj-box {
  display: flex;
  justify-content: center;
  flex: 4;
  background: rgba(243, 253, 253, 1);
  border-radius: 8px;
  margin: 10px 15px;
  background-image: url("../../stactic/process/bj_1.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.xj-box:hover {
  cursor: pointer;
  background-image: url("../../stactic/process/bg_2.jpg");
  border-radius: 8px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.xjlc {
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  height: 15vh;
  /* flex: 1; */
}
>>> .el-tabs__active-bar {
  /* width: 126px !important;
    transform: translateX(32px) !important; */
  background-color: #12d0d6 !important;
}
>>> .el-tabs__item {
  padding: 0px 136px !important;
}
>>> .el-tabs__item.is-active {
  color: #12d0d6 !important;
}
>>> .el-tabs__item:hover {
  color: #12d0d6 !important;
}
.top {
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
  height: 80vh;
}
</style>