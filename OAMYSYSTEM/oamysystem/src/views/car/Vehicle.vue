<template>
  <div class="box-card">
    <!-- 车辆登记 -->
    <el-col :span="24" class="topkq">
      <div class="top_text">
        <span
          style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px;font-weight:300;color:black"
        >时间范围：</span>
        <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
          <el-date-picker v-model="value3" type="year" size="mini" placeholder="年份选择"></el-date-picker>
        </span>
        <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
          <el-date-picker v-model="value4" type="month" size="mini"   placeholder="月份选择"></el-date-picker>
        </span>
        <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
          <el-date-picker v-model="value5" type="dates" size="mini"  placeholder="日选择"></el-date-picker>
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
            placeholder="搜索车辆"
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
            <el-table-column prop="name" label="车辆车牌" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" label="车辆购买时间" show-overflow-tooltip></el-table-column>
            <el-table-column prop="num" label="公里数" show-overflow-tooltip></el-table-column>
            <!-- <el-table-column prop="checkName" label="原部门上级领导" show-overflow-tooltip></el-table-column> -->
            <el-table-column prop="useName" label="维修情况" show-overflow-tooltip></el-table-column>

            <el-table-column prop="certification" label="维修日期" show-overflow-tooltip></el-table-column>
            <el-table-column prop="useName" label="保养情况" show-overflow-tooltip></el-table-column>
            <el-table-column prop="certification" label="保养情况" show-overflow-tooltip></el-table-column>
            <el-table-column prop="useName" label="保养日期" show-overflow-tooltip></el-table-column>
            <el-table-column prop="certification" label="年检情况" show-overflow-tooltip></el-table-column>
            <el-table-column prop="useName" label="年检日期" show-overflow-tooltip></el-table-column>
          </el-table>
        </template>
        <el-pagination
          style="padding:5px 15px 15px 15px;display:flex; justify-content: flex-end;"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currpage"
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
      value3:"",
      value4:"",
      value5:"",
      name: "",
      total: -1,
      currpage: 1,
      page: 1,
      pageSize: 8,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          status: 1,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          status: 1,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          status: 1,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          status: 0,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          status: 1,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          status: 0,
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          status: 1,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          status: 0,
        },
      ],
    };
  },
  methods: {
    //分页功能
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      // 1.每页显示条数的改变
      this.pageSize = val;
      // 回到第一页
      this.currpage = 1;
      // 希望当页条数改变时 从第一页开始显示 this.pagenum = 1 -》currPage=1?
      this.getUserlist();
    },
    handleCurrentChange(val) {
      //页码改变时
      console.log(`当前页: ${val}`);
      this.currpage = val;
      this.getUserlist();
    },
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
      padding:20px 15px;
    }
  }
  .box_table {
    margin-top: 20px;
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
</style>