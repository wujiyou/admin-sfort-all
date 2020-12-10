<template>
  <div>
    <el-col :span="24" class="right_top">
      <el-col :span="24" class="btn_s">
        <el-col :span="17" class="dis_flex">
          <div
            v-for="(item,index) in list"
            :key="index"
            @click="tabClick(item,index)"
            class="btn_click"
          >
            <span :class="num==index?'active':'actives'">{{item.title}}</span>
          </div>
        </el-col>
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
    </el-col>
    <el-col :span="24" class="right_bottom">
      <div>
        <template>
          <el-table
            :data="tableData"
            :header-cell-style="{background:'#F5F8FC'}"
            style="width: 97%;margin:20px 20px;padding-bottom:40px"
            :row-style="{height:'70px'}"
            :cell-style="{padding:'0px'}"
          >
            <!--  @selection-change="handleCurrentChanges" -->
            <!-- <el-table-column type="selection" width="50"></el-table-column> -->
            <el-table-column type="index" label="序号" width="50" show-overflow-tooltip>
              <template slot-scope="socpe">
                <p style="cursor:pointer;" @click="showEdituser(socpe.row)">{{socpe.$index+1}}</p>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="流程标题" show-overflow-tooltip></el-table-column>
            <el-table-column prop="address" label="所属流程" show-overflow-tooltip></el-table-column>
            <el-table-column prop="name" label="创建人" show-overflow-tooltip></el-table-column>
            <el-table-column prop="checkName" label="创建日期" show-overflow-tooltip></el-table-column>
            <el-table-column prop="useName" label="未操作者" show-overflow-tooltip></el-table-column>
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
      num: 0,
      pageSize: 8,
      list: [
        {
          title: "全部",
        },
        {
          title: "待处理",
        },
        {
          title: "待阅",
        },
        {
          title: "被退回",
        },
        {
          title: "未读",
        },
      ],
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
      ],
    };
  },
  methods: {
    tabClick(item, index) {
      //菜单点击
      this.num = index;
      console.log(item.title);
      this.titles = item.title;
      this.getUserlist();
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
.right_top {
  background-color: white;
  border-radius: 8px;
  .btn_s {
    margin-top: 20px;
    margin-bottom: 20px;
    .dis_flex {
      display: flex;
      justify-content: space-around;
      .btn_click {
        cursor: pointer;
        font-family: PingFang SC;
        color: rgba(57, 57, 57, 1);
        .active {
          color: white;
          background-color: #0aced4;
          border-radius: 4px;
          padding: 10px 10px;
          font-size: 14px;
        }
        .actives {
          color: #393939;
          font-size: 14px;
        }
      }
    }
  }
}
.right_bottom {
  margin-top: 25px;
  background-color: white;
  border-radius: 8px;
}
</style>