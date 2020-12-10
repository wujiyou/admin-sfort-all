<template>
  <div>
    <div class="box-card">
      <el-col :span="24" style="border-radius:8px;">
        <el-col class="top" :span="14">
          <el-col :span="24">
            <el-col class="c_top c_top1" :span="5">
              <el-col class="ygzs" :span="12">
                <p>员工总数</p>
                <h4>4032</h4>
              </el-col>
              <el-col :span="12">1</el-col>

              <el-col :span="24">
                <span class="size_1" style="color:#3A3A3A">-4%</span>
                <span
                  class="size_1"
                  style="color:#B0B3C1;dispaly:inline-block;margin-left:10px"
                >较上月减少168人</span>
              </el-col>
            </el-col>

            <el-col class="c_top" :span="5">
              <el-col class="ygzs" :span="12">
                <p>员工总数</p>
                <h4>4032</h4>
              </el-col>
              <el-col :span="12">1</el-col>

              <el-col :span="24">
                <span class="size_1" style="color:#3A3A3A">-4%</span>
                <span
                  class="size_1"
                  style="color:#B0B3C1;dispaly:inline-block;margin-left:10px"
                >较上月减少168人</span>
              </el-col>
            </el-col>
            <el-col class="c_top" :span="5">
              <el-col class="ygzs" :span="12">
                <p>员工总数</p>
                <h4>4032</h4>
              </el-col>
              <el-col :span="12">1</el-col>

              <el-col :span="24">
                <span class="size_1" style="color:#3A3A3A">-4%</span>
                <span
                  class="size_1"
                  style="color:#B0B3C1;dispaly:inline-block;margin-left:10px"
                >较上月减少168人</span>
              </el-col>
            </el-col>
            <el-col class="c_top" :span="5">
              <el-col class="ygzs" :span="12">
                <p>员工总数</p>
                <h4>4032</h4>
              </el-col>
              <el-col :span="12">1</el-col>

              <el-col :span="24">
                <span class="size_1" style="color:#3A3A3A">-4%</span>
                <span
                  class="size_1"
                  style="color:#B0B3C1;dispaly:inline-block;margin-left:10px"
                >较上月减少168人</span>
              </el-col>
            </el-col>
          </el-col>
          <el-col :span="24">
            <h5 style="text-align:left;padding:5px 10px;margin-top:20px">流程中心/Process center</h5>
          </el-col>

          <el-col :span="24">
            <template>
              <el-tabs style="padding-bottom:20px" :tab-position="tabPosition">
                <el-tab-pane label="待办">
                  <el-table
                    :row-style="{height:'30px'}"
                    :cell-style="{padding:'0px'}"
                    ref="table"
                    :data="tableData"
                    style="width: 100%;"
                    :height="tableHeight"
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
        </el-col>
        <el-col :span="1" style="color:#f4f6f8">&nbsp;1</el-col>
        <el-col class="top" :span="9">
          <h5 style="text-align:left;padding:5px 10px;margin-top:20px">常用工具/Common tools</h5>
          <el-col :span="24">
            <el-col style="margin-left:26px;margin-top:10px" :span="7">
              <div class="hov_img">
                <p class="p_img">
                  <img src="../../stactic/plemage/tc@2x.png" alt />
                  <span class="r_cai">人才库</span>
                </p>
                
              </div>
            </el-col>
            <el-col :span="7">
              <div class="hov_img">
                <p class="p_img">
                  <img src="../../stactic/plemage/rycx@2x.png" alt />
                  <span class="r_cai">人员查询</span>
                </p>
                
              </div>
            </el-col>
            <el-col :span="7">
              <div class="hov_img">
                <p class="p_img">
                  <img src="../../stactic/plemage/ht@2x.png" alt />
                   <span class="r_cai">合同到期</span>
                </p>
               
              </div>
            </el-col>
          </el-col>
          <el-col :span="24">
            <el-col style="margin-left:26px;" :span="7">
              <div class="hov_img">
                <p class="p_img">
                  <img src="../../stactic/plemage/kaoqin@2x.png" alt />
                   <span class="r_cai">考勤查询</span>
                </p>
               
              </div>
            </el-col>
            <el-col :span="7">
              <div class="hov_img">
                <p class="p_img">
                  <img src="../../stactic/plemage/kaoqin@2x.png" alt />
                   <span class="r_cai">培训管理</span>
                </p>
               
              </div>
            </el-col>
            <el-col :span="7">
              <div class="hov_img">
                <p class="p_img">
                  <img src="../../stactic/plemage/xc2x.png" alt />
                   <span class="r_cai">薪酬指标</span>
                </p>
               
              </div>
            </el-col>
          </el-col>
          <el-col :span="24">
            <el-col style="margin-left:26px;" :span="7">
              <div class="hov_img">
                <p class="p_img">
                  <img src="../../stactic/plemage/yzgl@2x.png" alt />
                   <span class="r_cai">印章管理</span>
                </p>
               
              </div>
            </el-col>
            <el-col :span="7">
              <div class="hov_img">
                <p class="p_img">
                  <img src="../../stactic/plemage/tjbb@2x.png" alt />
                   <span class="r_cai">统计报表</span>
                </p>
               
              </div>
            </el-col>

            <el-col :span="7">
              <div class="hov_img">
                <p class="p_img">
                  <img src="../../stactic/plemage/tc@2x.png" alt />
                  <span class="r_cai">人才库</span>
                </p>
                
              </div>
            </el-col>
          </el-col>
        </el-col>
      </el-col>

      <el-col style="margin-top:20px;border-radius:8px;" :span="24">
        <el-col class="bottom" :span="9">
          <h5
            style="text-align:left;padding:5px 10px;margin-top:20px;margin-bottom:20px"
          >岗位知识地图/Job knowledge map</h5>
          <p
            style="text-align:center;color:rgba(179,181,194,1);line-height:18px;"
          >了解公司的考勤制度，并严格遵守制度，维护公司的工作环境</p>
          <p
            style="text-align:center;color:rgba(179,181,194,1);line-height:18px;"
          >Strictly abide by the system</p>

          <el-col :span="24">
            <el-carousel :interval="4000" type="card" height="180px">
              <el-carousel-item v-for="item in 6" :key="item">
                <h3 class="medium">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </el-col>
        </el-col>
        <el-col :span="1" style="color:#f4f6f8">&nbsp;1</el-col>
        <el-col class="bottom" :span="14">
          <h5
            style="text-align:left;padding:5px 10px;margin-top:20px;margin-bottom:20px"
          >新员工入职/Entry of new employees</h5>

          <div class="heigth-botm">
            <p style="cursor: pointer;width:56px;height:56px; border-radius: 20px;">
              <img
                style="width:56px;height:56px;border-radius: 50%;"
                src="../../assets/img/touxiang.png"
                alt
              />
            </p>
            <p style="margin-left:10px">
              <span
                style="font-size:16px;font-family:PingFang SC;font-weight:800;color:rgba(58,58,58,1);display: block;"
              >木村拓哉</span>
              <span
                style="font-size:14px;font-family:PingFang SC;font-weight:bold;color:rgba(179,181,194,1);display: block;"
              >UI设计师</span>
            </p>
          </div>

          <div style="padding-bottom:40px;padding-top:20px">
            <p
              style="text-align:left;text-indent:2em;font-size:14px;font-family:PingFang SC;font-weight:bold;color:rgba(52,52,52,1);line-height:26px;padding:5px 30px"
            >我深信我是幸运的，很庆幸能够加入长劲鹿这个温暖的大家庭，庆幸遇到了对我们关怀备至的领导，庆幸得到了这么多亲切热情、 可爱可亲的同事，更庆幸自我初来乍到就参加这次“OA内控系统”的科技活动。人生就好像一场旅行，因为沿途美丽的风景，我们走走 停停；人生就好像一列行驶的列车，因为沿途连续的站点，我们来来往往。进入长劲鹿网络科技有限公司，是我人生一段新的旅程，开启 了我的新站点。</p>
          </div>
        </el-col>
      </el-col>
    </div>
  </div>
</template>
<script>
export default {
  name: "Managing",
  data() {
    return {
      tabPosition: "top",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
      ],
      tableHeight: 100,
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      this.tableHeight =
        window.innerHeight - this.$refs.table.$el.offsetTop - 790;

      // 监听窗口大小变化
      let self = this;
      window.onresize = function () {
        self.tableHeight =
          window.innerHeight - self.$refs.table.$el.offsetTop - 790;
      };
    });
    //this.$refs.table.$el.offsetTop：表格距离浏览器的高度 //50表示你想要调整的表格距离底部的高度（你可以自己随意调整），因为我们一般都有放分页组件的，所以需要给它留一个高度
  },

  methods: {},
};
</script>
<style scoped>
.hov_img{
   padding: 5px 0;
}
.hov_img :hover {
  cursor: pointer;
  background-color: #d7f8f8;
   border-radius: 10px;
   /* padding: 5px 0; */
}
.heigth-botm {
  display: flex;
  justify-content: flex-start;
  margin-left: 10px;
}
.qxin {
  color: black;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  cursor: pointer;
  display: inline-block;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  /* line-height: 150px; */
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #44dade;
  border-radius: 8px;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #6beef3;
  border-radius: 8px;
}

>>> .el-table th {
  padding: 0 !important;
}
>>> .el-tabs__active-bar {
  /* width: 126px !important;
    transform: translateX(32px) !important; */
  background-color: #12d0d6 !important;
}
>>> .el-tabs__item {
  padding: 0px 74px !important;
}
>>> .el-tabs__item.is-active {
  color: #12d0d6 !important;
}
>>> .el-tabs__item:hover {
  color: #12d0d6 !important;
}
.p_img img {
  width: 42%;
  height: 42%;
}
.r_cai{
  display: block;
  padding:5px 0;
 
}
.box-card {
  margin: 20px 20px 0 20px;
  height: 100%;
}
.c_top {
  /* background: rgba(12, 206, 212, 1);
  opacity: 0.05; */
  border-radius: 4px;
  position: relative;
  color: black;
  background: rgba(12, 206, 212, 0.05);
  margin: 15px 8px 10px 10px;
  padding-bottom: 20px;
}
.ygzs > p {
  color: #3a3a3a;
  text-align: left;
  margin-top: 18px;
  margin-bottom: 10px;
  padding-left: 18px;
  /* padding: 10px 10px; */
  font-size: 16px;
}
h4 {
  color: #0bced4;
}

@media \0screen\, screen\9 {
  .c_top {
    background-color: #fff;
    filter: Alpha(opacity=5);
    *zoom: 1; /* 激活IE6、7的haslayout属性，让它读懂Alpha */
  }
  .c_top p {
    position: relative; /* 设置子元素为相对定位，可让子元素不继承Alpha值 */
  }
}
.top {
  background-color: white;
  height: 50vh;
  min-height: 200px;
}
.bottom {
  background-color: white;
  height: 36vh;
  min-height: 200px;
}
.c_top1 {
  margin-left: 40px;
}
@media screen and (max-height: 940px) {
  .top {
    /* height: 48vh; */
  }
  .bottom {
    /* height: 38vh; */
  }
}
@media screen and (max-height: 900px) {
  .top {
    /* height: 47vh; */
  }
  .bottom {
    /* height: 36vh; */
  }
}
@media screen and (max-height: 850px) {
  .top {
    /* height: 47vh; */
  }
  .bottom {
    /* height: 36vh; */
  }
}

@media screen and (max-height: 800px) {
  .top {
    /* height: 47vh; */
  }
  .bottom {
    /* height: 36vh; */
  }
}
@media screen and (max-height: 750px) {
  .top {
    /* height: 47vh; */
  }
  .bottom {
    /* height: 35vh; */
  }
}
@media screen and (max-height: 700px) {
  /* .top {
    height: 45vh;
  }
  .bottom {
    height: 35vh;
  } */
  .ygzs > p {
    color: #3a3a3a;
    text-align: left;
    margin-top: 9px;
    margin-bottom: 5px;
    padding-left: 16px;
    /* padding: 10px 10px; */
    font-size: 14px;
  }
  h4 {
    color: #0bced4;
    font-size: 16px;
  }
  >>> .el-tabs__item {
    padding: 0px 54px !important;
  }
}
@media screen and (max-height: 650px) {
  .top {
    /* height: 45vh; */
  }
  .bottom {
    /* height: 35vh; */
  }
}

@media screen and (max-width: 1600px) {
  .ygzs p {
    font-size: 12px;
  }
  h4 {
    font-size: 15px;
  }
  .size_1 {
    font-size: 12px;
  }
  .p_img img {
    width: 30%;
    height: 30%;
  }
  .r_cai {
    font-size: 14px;
    display: block;
    
  }
}
@media screen and (max-width: 1366px) {
  .c_top {
    margin: 10px 15px 3px 10px;
    padding-bottom: 2px;
  }
}
@media screen and (max-width: 1280px) {
  .c_top1 {
    margin-left: 24px !important;
  }
  .c_top {
    margin: 10px 5px 3px 5px;
  }
  .ygzs p {
    font-size: 10px;
    transform: scale(0.9);
  }
  .size_1 {
    font-size: 12px;
    transform: scale(0.9);
  }
}
</style>