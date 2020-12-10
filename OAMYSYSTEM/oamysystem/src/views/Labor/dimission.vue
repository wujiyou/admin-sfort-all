<template>
  <div class="box-card">
    <el-col :span="24" class="topkq">
      <div class="top_text">
        <span
          style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px;font-weight:300;color:black"
        >部&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;门：</span>
        <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
          <el-checkbox v-model="zhi" label="总经办"></el-checkbox>
        </span>
        <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
          <el-checkbox v-model="zhi" label="人事部"></el-checkbox>
        </span>
        <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
          <el-checkbox v-model="zhi" label="法务部"></el-checkbox>
        </span>
        <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
          <el-checkbox v-model="zhi" label="运营部"></el-checkbox>
        </span>
        <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
          <el-checkbox v-model="zhi" label="行政部"></el-checkbox>
        </span>
        <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
          <el-checkbox v-model="zhi" label="财务部"></el-checkbox>
        </span>
        <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
          <el-checkbox v-model="zhi" label="硬件部"></el-checkbox>
        </span>
        <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
          <el-checkbox v-model="zhi" label="软件部"></el-checkbox>
        </span>
        <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
          <el-checkbox v-model="zhi" label="研发部"></el-checkbox>
        </span>
        <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
          <el-checkbox v-model="zhi" label="客服部"></el-checkbox>
        </span>
        <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
          <el-checkbox v-model="zhi" label="请假"></el-checkbox>
        </span>
      </div>
      <div class="top_text">
        <span
          style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px;font-weight:300;color:black"
        >职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位：</span>
        <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
          <el-checkbox v-model="zhi" label="设计部"></el-checkbox>
        </span>
        <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
          <el-checkbox v-model="zhi" label="前端码农"></el-checkbox>
        </span>
        <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
          <el-checkbox v-model="zhi" label="后端码农"></el-checkbox>
        </span>
        <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
          <el-checkbox v-model="zhi" label="测试"></el-checkbox>
        </span>
        <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
          <el-checkbox v-model="zhi" label="移动端"></el-checkbox>
        </span>
        <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
          <el-checkbox v-model="zhi" label="产品经理"></el-checkbox>
        </span>
      </div>
      <div class="top_text">
        <span
          style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px;font-weight:300;color:black"
        >时间范围：</span>
        <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
          <el-date-picker v-model="value1" size="mini" type="date" placeholder="指定日期范围-起始"></el-date-picker>
        </span>
        <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
          <el-date-picker v-model="value2" size="mini" type="date" placeholder="指定日期范围-结束"></el-date-picker>
        </span>
      </div>
    </el-col>

    <el-col class="box_table" :span="24">
      <el-col :span="24" class="btn_s">
        <el-col :span="2">
          <el-button type="primary" size="small">新增</el-button>
        </el-col>
        <el-col :span="15" style="color:white">&nbsp;1</el-col>
        <el-col style="margin-left:20px" :span="4">
          <el-input
            size="small"
            style=" width: 100%;"
            @clear="loadUserList()"
            clearable
            class="input-serach"
            placeholder="请输入评价人姓名"
            suffix-icon="el-icon-search"
            v-model="name"
          ></el-input>
        </el-col>
        <el-col :span="2">
          <el-button style="width:90%" type="primary" size="small">搜索</el-button>
        </el-col>
      </el-col>
      <div>
        <template>
          <el-table
            :data="tableData"
            :header-cell-style="{background:'#F5F8FC'}"
            style="width: 97%;margin:20px 20px;padding-bottom:10px"
            :row-style="{height:'60px'}"
            :cell-style="{padding:'0px'}"
          >
            <!--  @selection-change="handleCurrentChanges" -->
            <!-- <el-table-column type="selection" width="50"></el-table-column> -->
            <el-table-column type="index" label="序号" width="50" show-overflow-tooltip>
              <!-- <template slot-scope="socpe">
                <p style="cursor:pointer;" @click="showEdituser(socpe.row)">{{socpe.$index+1}}</p>
              </template>-->
            </el-table-column>
            <el-table-column prop="name" label="申请人" show-overflow-tooltip></el-table-column>
            <el-table-column prop="departmentName" label="部门" show-overflow-tooltip></el-table-column>
            <el-table-column prop="positionName" label="岗位" show-overflow-tooltip></el-table-column>
            <!-- <el-table-column prop="checkName" label="原部门上级领导" show-overflow-tooltip></el-table-column> -->
            <el-table-column prop="superior" label="上级领导" show-overflow-tooltip></el-table-column>

            <el-table-column
              prop="fillingDate"
              label="申请日期"
              :formatter="dateFormat"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column prop="leaveCategory" label="离职类别" show-overflow-tooltip>
              <template slot-scope="scope">
                <span v-if="tableData[scope.$index].leaveCategory==0">辞职</span>
                <span v-if="tableData[scope.$index].leaveCategory==1">辞退</span>
                <span v-if="tableData[scope.$index].leaveCategory==2">自动离职</span>
                <span v-if="tableData[scope.$index].leaveCategory==3">协议离职</span>
                <span v-if="tableData[scope.$index].leaveCategory==4">合同期满</span>
                <span v-if="tableData[scope.$index].leaveCategory==5">其他</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="expectTakeEffectDate"
              label="希望离职生效日"
              :formatter="dateFormat"
              show-overflow-tooltip
            ></el-table-column>
            <el-table-column prop="processState" label="流程状态" show-overflow-tooltip>
              <template slot-scope="scope">
                <span
                  style="background-color:#FBF4E6;display:inline-block;color:#E6A699;padding: 5px 10px;border-radius:5px; text-align: center;width:5vw"
                  v-if="tableData[scope.$index].processState==0"
                >审核中</span>
                <span
                  style="background-color:#D9F6E5;color:#8CCDBE;display:inline-block;padding: 5px 10px;border-radius:5px; text-align: center;width:5vw"
                  v-if="tableData[scope.$index].processState==1"
                >审核通过</span>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <el-pagination
          style="padding:5px 15px 15px 15px;display:flex; justify-content: flex-end;"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="rows"
          :page-sizes="[8,16,24,32,40]"
          :page-size="8"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>
    </el-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      zhi: "",
      value1: "",
      value2: "",
      name: "",
      total: -1,
      rows: 8,
      page: 1,
      tableData: [],
    };
  },
  methods: {
    //分页功能
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      // 1.每页显示条数的改变
      this.rows = val;
      // 回到第一页
      this.page = 1;
      // 希望当页条数改变时 从第一页开始显示 this.pagenum = 1 -》currPage=1?
      this.getUserlist();
    },
    handleCurrentChange(val) {
      //页码改变时
      console.log(`当前页: ${val}`);
      this.page = val;
      this.getUserlist();
    },
    async getUserlist() {
      const res = await this.$http.get(
        `/departure/all?pageSize=${this.rows}&currPage=${this.page}&startTime=&endTime=&departmentId=&positionId=&name=`
      );
      console.log(res);
      this.tableData = res.data.data.list;
      this.total = res.data.data.totalCount;
    },
    dateFormat(row, column) {
      var moment = require("moment");
      var date = row[column.property];
      return moment(date).format("YYYY-MM-DD");
    },
  },
  created() {
    this.getUserlist();
  },
};
</script>
<style lang="less" scoped>
.box-card {
  margin: 20px 20px 0 20px;
  height: 80vh;
  .topkq {
    background-color: white;
    border-radius: 8px;
    .top_text {
      display: flex;
      justify-content: flex-start;
    }
  }
  .box_table {
    margin-top: 20px;

    // margin-left: 20px;
    // margin-right: 20px;
    background-color: white;
    .btn_s {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>
<style scoped>
>>> .el-button--primary {
  color: #fff;
  background-color: #27d3d9 !important;
  border-color: #27d3d9 !important;
}
>>> .el-table th,
>>> .el-table td {
  text-align: center !important;
  border: 0;
}
/* >>>.el-button--primary :hover {
    color: #FFF;
    background-color: #a7f4f7 !important;
    border-color: #a7f4f7 !important;
    padding: 9px 15px;
} */
</style>