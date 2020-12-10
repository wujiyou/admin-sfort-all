<template>
  <div class="box-card">
    <!-- 出库记录 -->
    <el-col class="box_table" :span="24">
      <el-col :span="24" class="btn_s">
        <el-col :span="2">
          <el-button type="primary" size="small">新建</el-button>
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
            :row-style="{height:'70px'}"
            :cell-style="{padding:'0px'}"
          >
            <!--  @selection-change="handleCurrentChanges" -->
            <!-- <el-table-column type="selection" width="50"></el-table-column> -->
            <el-table-column type="index" label="序号" width="50" show-overflow-tooltip>
              <!-- <template slot-scope="socpe">
                <p style="cursor:pointer;" @click="showEdituser(socpe.row)">{{socpe.$index+1}}</p>
              </template> -->
            </el-table-column>
            <el-table-column prop="name" label="产品名称" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" label="型号" show-overflow-tooltip></el-table-column>
            <el-table-column prop="num" label="入库时间" show-overflow-tooltip></el-table-column>
            <el-table-column prop="checkName" label="入库数量" show-overflow-tooltip></el-table-column>
            <el-table-column prop="useName" label="经办人" show-overflow-tooltip></el-table-column>
            <el-table-column prop="cretificationDate" label="备注" show-overflow-tooltip></el-table-column>
           
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
      total: -1,
      currpage: 1,
      page: 1,
      pageSize: 8,
      name: "",
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
        }
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
/* >>>.has-gutter{
  background-color:#F5F8FC !important;
} */
</style>
<style>

</style>