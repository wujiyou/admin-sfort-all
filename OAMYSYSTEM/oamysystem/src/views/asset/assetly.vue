<template>
  <div class="box-card">
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
            placeholder="搜索员工名字"
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
            :row-style="{height:'70px'}"
            :cell-style="{padding:'0px'}"
          >
            <!--  @selection-change="handleCurrentChanges" -->
            <!-- <el-table-column type="selection" width="50"></el-table-column> -->
            <el-table-column prop="index" label="姓名" show-overflow-tooltip></el-table-column>
            <el-table-column prop="name" label="部门" show-overflow-tooltip></el-table-column>
            <el-table-column prop="account" label="物品名称" show-overflow-tooltip></el-table-column>
            <el-table-column prop="departmentName" label="物品用途" show-overflow-tooltip></el-table-column>
            <el-table-column prop="positionName" label="需求日期" show-overflow-tooltip></el-table-column>
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
      total: -1,
      rows: 8,
      page: 1,
      name: "",
      tableData: [
        {
          index: "贺全鑫",
          name: "研发部",
          account: "红酒",
          departmentName: "洗澡",
          positionName: "2020-08-29",
        },
        {
          index: "刘洋",
          name: "研发部",
          account: "洗衣粉",
          departmentName: "洗发服",
          positionName: "2020-08-30",
        },
        {
          index: "陈宇",
          name: "研发部",
          account: "红烧牛肉",
          departmentName: "吃喝",
          positionName: "2020-08-31",
        },
        {
          index: "马涛",
          name: "研发部",
          account: "耳机",
          departmentName: "听歌",
          positionName: "2020-08-28",
        },
        {
          index: "吴积友",
          name: "研发部",
          account: "键盘",
          departmentName: "敲代码",
          positionName: "2020-08-29",
        },
        {
          index: "李健",
          name: "研发部",
          account: "槟榔",
          departmentName: "嚼",
          positionName: "2020-09-01",
        },
      ],
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
    // async getUserlist() {
    //   const res = await this.$http.get(
    //     `/positive/all?pageSize=${this.rows}&currPage=${this.page}&name=`
    //   );
    //   console.log(res);
    //   this.tableData = res.data.data.list;
    //   this.total = res.data.data.totalCount;
    // },
    // dateFormat(row, column) {
    //   var moment = require("moment");
    //   var date = row[column.property];
    //   return moment(date).format("YYYY-MM-DD");
    // },
  },
  created() {
    this.getUserlist();
  },
};
</script>
<style scoped>
.btn_s {
  margin-top: 20px;
  margin-bottom: 20px;
}
.box-card {
  margin: 20px 20px 0 20px;
  height: 80vh;
}
.box_table {
  background-color: white;
  /* // margin: 5px 10px; */
  width: 95% !important;
}
>>> .el-table th,
>>> .el-table td {
  text-align: center !important;
  border: 0;
}
/* >>>.has-gutter{
  background-color:#F5F8FC !important;
} */
</style>
<style>
</style>