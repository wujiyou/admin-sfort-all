<template>
  <div>
    <div class="box-card">
      <el-col :span="24" class="topkq">
        <div class="top_text">
          <span
            style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px;font-weight:300;color:black"
          >展 示 列：</span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="部门"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="岗位"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="应出勤天数"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="应工作时长"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="实际出勤天数"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="实际工作时长"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="迟到"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="早退"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="旷工"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="漏签"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="请假"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="加班"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="出差"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="公出"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="考勤日历"></el-checkbox>
          </span>
        </div>
        <div class="top_text">
          <span
            style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px;font-weight:300;color:black"
          >时间范围：</span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="今天"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="本周"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="本月"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="上个月"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="本季"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="本年"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="上一年"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="指定日期范围："></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-date-picker v-model="value1" size="mini" type="date" placeholder="指定日期范围-起始"></el-date-picker>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-date-picker v-model="value2" size="mini" type="date" placeholder="指定日期范围-结束"></el-date-picker>
          </span>
        </div>
        <div class="top_text">
          <span
            style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px;font-weight:300;color:black"
          >查看范围：</span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="部门"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="人员"></el-checkbox>
          </span>
          <span style="display:inline-block;margin-left:10px;margin-top:10px;margin-bottom:10px">
            <el-checkbox v-model="zhi" label="我的下属"></el-checkbox>
          </span>
        </div>
      </el-col>
      <el-col :span="24" class="bottomkq">
        <div>
          <template>
            <el-table
              :data="tableData"
              :row-class-name="tableRowClassName"
              :header-cell-style="{background:'#F5F8FC'}"
              style="width: 97%;margin:10px 20px;padding-bottom:10px"
              :row-style="{height:'60px'}"
              :cell-style="{padding:'0px'}"
            >
              <!--  @selection-change="handleCurrentChanges" -->
              <!-- <el-table-column type="selection" width="50"></el-table-column> -->
              <el-table-column type="index" label="序号" width="50" show-overflow-tooltip>
                <!-- <template slot-scope="socpe">
                  <p style="cursor:pointer;" @click="showEdituser(socpe.row)">{{socpe.$index+1}}</p>
                </template> -->
              </el-table-column>
              <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
              <el-table-column prop="address" label="部门" show-overflow-tooltip></el-table-column>
              <el-table-column prop="num" label="编号" show-overflow-tooltip></el-table-column>
              <el-table-column prop="checkName" label="应出勤天数（天）" show-overflow-tooltip></el-table-column>
              <el-table-column prop="useName" label="应出工作时长（小时）" show-overflow-tooltip></el-table-column>

              <el-table-column prop="certification" label="实际出勤天数（天）" show-overflow-tooltip></el-table-column>
              <el-table-column prop="cretificationDate" label="实际出勤时长（小时）" show-overflow-tooltip>
                <template slot-scope="socpe">{{socpe.row.cretificationDate | fmtdate}}</template>
              </el-table-column>
              <el-table-column prop="cretificationDate" label="实际工作时长（小时）" show-overflow-tooltip>
                <template slot-scope="socpe">{{socpe.row.cretificationDate | fmtdate}}</template>
              </el-table-column>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      zhi: "",
      value1: "",
      value2: "",
      total: -1,
      currpage: 1,
      page: 1,
      pageSize: 8,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        }
      ],
    };
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 1) {
        return "warning-row";
      } else {
        return "success-row";
      }
    },
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
    }
  }
  .bottomkq {
    margin-top: 20px;
    background-color: white;
    border-radius: 8px;
  }
}
</style>
<style>
.el-table .success-row {
  background: white !important;
}
.el-table .warning-row {
  background: rgba(235, 251, 251, 1) !important;
}
</style>
