<template>
  <div>
    <div class="box-card">
      <el-col :span="24" style="border-radius:8px;">
        <el-col class="top" :span="14">
          <div class="wpto">
            <div class="span-left">流程中心/Process center</div>
            <el-col :span="24">
              <el-col :span="19">
                <template>
                  <el-tabs style="padding-bottom:20px" :tab-position="tabPosition">
                    <el-tab-pane label="待办">
                      <el-table
                        :row-style="{height:'30px'}"
                        :cell-style="{padding:'0px'}"
                        ref="table"
                        :data="tableData"
                        style="width: 100%;"
                        
                      >
                        <el-table-column prop="date" label="日期"></el-table-column>
                        <el-table-column prop="name" label="姓名"></el-table-column>
                        <el-table-column prop="province" label="省份"></el-table-column>
                        <el-table-column prop="city" label="市区"></el-table-column>
                      </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="已办">配置管理</el-tab-pane>
                    <el-tab-pane label="办结">角色管理</el-tab-pane>
                    <el-tab-pane label="抄送">定时任务补偿</el-tab-pane>
                  </el-tabs>
                </template>
              </el-col>
              <el-col style="margin-left:20px;" :span="2">
                <div class="cheai"></div>
                <div class="cheai mar_top"></div>
                <div class="cheai mar_top"></div>
                <div class="cheai mar_top"></div>
              </el-col>
            </el-col>
          </div>
        </el-col>
        <el-col :span="1" style="color:#f4f6f8">&nbsp;1</el-col>
        <el-col class="top" :span="9">
          <div class="wptos">
            <div class="span-left">常用工具/Common tools</div>
            <el-col style="margin-top:30px;" :span="24">
              <el-col :span="8">
                <p class="p_img">
                  <img src="../../stactic/portal/baoxiao.png" alt />
                </p>
                <p class="r_cai">费用报销</p>
              </el-col>
              <el-col :span="8">
                <p class="p_img">
                  <img src="../../stactic/portal/hetong.png" alt />
                </p>
                <p class="r_cai">合同起草</p>
              </el-col>
              <el-col :span="8">
                <p class="p_img">
                  <img src="../../stactic/portal/fawen.png" alt />
                </p>
                <p class="r_cai">发文拟稿</p>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="8">
                <p class="p_img">
                  <img src="../../stactic/portal/anjian.png" alt />
                </p>
                <p class="r_cai">内部请示</p>
              </el-col>
              <el-col :span="8">
                <p class="p_img">
                  <img src="../../stactic/portal/crm.png" alt />
                </p>
                <p class="r_cai">CRM</p>
              </el-col>
              <el-col :span="8">
                <p class="p_img">
                  <img src="../../stactic/portal/ziyuan.png" alt />
                </p>
                <p class="r_cai">人力资源</p>
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-col :span="8">
                <p class="p_img">
                  <img src="../../stactic/portal/caiwu.png" alt />
                </p>
                <p class="r_cai">财务系统</p>
              </el-col>
              <el-col :span="8">
                <p class="p_img">
                  <img src="../../stactic/portal/xiaoshou.png" alt />
                </p>
                <p class="r_cai">销售系统</p>
              </el-col>
            </el-col>
          </div>
        </el-col>
      </el-col>
      <el-col style="margin-top:20px;border-radius:8px;" :span="24">
        <el-col class="bottom" :span="9">
          <div class="wpts">
            <div class="span-left">重要通知/Important notice</div>
            <el-col :span="24">
              <div class="tanxing" v-for="(item,i) in list" :key="i">
                <span>{{item.title}}</span>
                <span>{{item.gime}}</span>
              </div>
            </el-col>
          </div>
        </el-col>
        <el-col :span="1" style="color:#f4f6f8">&nbsp;1</el-col>
        <el-col class="bottom" :span="14">
          <div class="yxjp" :span="24">
            <el-col :span="24" style="margin-left:10px;">
              <div class="span-left">个人日程/Personal schedule</div>
              <div class="span-right">
                <img src="../../stactic/portal/jia.png" alt />
              </div>
            </el-col>
            <el-col :span="8" style="margin-left:20px;">
              <el-calendar v-model="value"></el-calendar>
            </el-col>
            <el-col :span="14" style="margin-top:10px;margin-left:20px;">
              <div class="borx-shode">
                <!-- 头部 -->
                <div class="paiban">
                  <span class="span1 left_1">时间</span>
                  <span class="span1 left_2">任务</span>
                  <span class="span1 left_3">设置任务日期</span>
                </div>
                <!-- 内容 -->
                <div style="margin-top:10px;">
                  <div v-for="(item,i) in last" :key="i" class="paiban heights">
                    <div class="aties left_1">{{item.data}}</div>
                    <div class="bingp left_2">
                      <div class="yuanquan"></div>
                      <span class="span2 left_s2" style="margin-left:5px;">{{item.index}}</span>
                    </div>
                    <div class="span2 left_3">{{item.date}}</div>
                  </div>
                </div>
                <!-- 详细信息 -->
                <div class="div2">
                  <div class="fext_left">
                    <div>PM 4:00</div>
                    <div>让前端解决问题</div>
                    <div>
                      I am trapped in a lonely island. I am used to loneliness, and I am not afraid to be disturbed
                      by others
                    </div>
                  </div>
                </div>
              </div>
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
      activeName: "second",
      value: new Date(),
      tabPosition:"top",
      tableData:[],
      list: [
        { title: "开会", gime: "2020-11-21" },
        { title: "明天下午三点放假", gime: "2020-11-01" },
        { title: "国庆假期请注意安全", gime: "2020-10-01" },
        {
          title: "由于老板彩票中了一个亿，全公司带薪放假一年",
          gime: "2020-09-31",
        },
        { title: "今晚的消费由祥公子买单", gime: "2020-08-01" },
        { title: "今天裁员一半", gime: "2020-07-11" },
        { title: "今天晚上不加班", gime: "2020-05-01" },
        { title: "今天公司团建", gime: "2020-01-01" },
      ],
      last: [
        { data: "PM  4:00", index: "让前端解决问题", date: "2020-07-11" },
        {
          data: "PM  3:30",
          index: "前端没有问题了，得给他们整点问题",
          date: "2020-06-31",
        },
        { data: "AM  9:00", index: "检查前端有没有问题", date: "2020-06-31" },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  methods: {
    handleClick() {},
  },
};
</script>
<style scoped>
.div2 {
  width: 29vw;
  height: 12vh;
  margin: 0 auto;
  margin-top: 10px;
  background: #14d0d6;
  opacity: 0.8;
  border-radius: 16px;
}
.fext_left {
  width: 25vw;
  text-align: left;
  padding-top: 5px;
  margin: 0 auto;
  font-size: 15px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #ffffff;
}
.left_1 {
  width: 6vw;
  text-align: left;
}
.left_2 {
  width: 20vw;
  text-align: left;
}
.left_3 {
  text-align: right;
  width: 6vw;
}
.left_s2 {
  flex: 0.8;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
.heights {
  height: 40px;
  align-items: center;
  border-bottom: 1px solid #d2d7e2;
}
.span2 {
  font-size: 15px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #393939;
}
.bingp {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.yuanquan {
  width: 8px;
  height: 8px;
  background: #0aced4;
  opacity: 0.32;
  border-radius: 50%;
}
.aties {
  font-size: 15px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #0aced4;
}
.paiban {
  display: flex;
  flex-direction: row;
}
.borx-shode {
  width:30vw;
  display: flex;
  flex-direction: column;
}
.span1 {
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #b2b5c2;
}
>>> .el-calendar {
  width: 300px;
}
>>> .el-calendar-table .el-calendar-day {
  height: 36px;
}
>>> .el-calendar__body {
  padding: 0;
}
>>> .el-calendar__header {
  padding: 6px 5px;
}
>>> .el-calendar-table thead th {
  padding: 5px 0;
}
/* 左上角排版 */
.wpto {
  padding-top: 20px;
  width: 49.3vw;
  height: 48vh;
  margin: 0 auto;
}
/* 右上角排版 */
.wptos {
  padding-top: 20px;
  width: 30.3vw;
  height: 47vh;
  margin: 0 auto;
}
/* 左下角排版 */
.wpts {
  padding-top: 20px;
  width: 30.3vw;
  height: 38vh;
  margin: 0 auto;
}
/* 右下角排版 */
.yxjp {
  padding-top: 20px;
  width: 49.3vw;
  height: 35vh;
  margin: 0 auto;
}
.tanxing {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
}
.tanxing span {
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: bold;
  color: rgba(178, 180, 193, 1);
}
.mar_top {
  margin-top: 20px;
}
.cheai {
  border: 1px solid #f00;
  width: 9vw;
  height: 9vh;
}
.span-left {
  display: block;
  float: left;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 800;
  color: rgba(57, 57, 57, 1);
}
.span-right {
  float: right;
  margin-right: 20px;
}
>>> .el-tabs__item {
  padding: 0px 78px !important;
}
.box-card {
  margin: 20px 20px 0 20px;
  height: 100%;
}
.top {
  background-color: white;
  height: 50vh;
}
.bottom {
  background-color: white;
  height: 36vh;
}
@media screen and (max-height: 940px) {
  .top {
    height: 48vh;
  }
  .bottom {
    height: 38vh;
  }
}
@media screen and (max-height: 900px) {
  .top {
    height: 47vh;
  }
  .bottom {
    height: 36vh;
  }
}
@media screen and (max-height: 850px) {
  .top {
    height: 47vh;
  }
  .bottom {
    height: 36vh;
  }
}

@media screen and (max-height: 800px) {
  .top {
    height: 47vh;
  }
  .bottom {
    height: 36vh;
  }
}
@media screen and (max-height: 750px) {
  .top {
    height: 47vh;
  }
  .bottom {
    height: 35vh;
  }
}
@media screen and (max-height: 700px) {
  .top {
    height: 45vh;
  }
  .bottom {
    height: 35vh;
  }
}
@media screen and (max-height: 650px) {
  .top {
    height: 45vh;
  }
  .bottom {
    height: 35vh;
  }
}
</style>