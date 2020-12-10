<template>
  <div class="box-card">
    <el-col :span="24" class="bg-top">
      <div class="title_s">
        <div class="tanx" v-for="(item,index) in list" :key="index" @click="tabClick(item,index)">
          <img class="imgs" :src="num==index?item.imgs1:item.imgs" alt />
          <span :class="num==index?'active':'actives'">{{item.title}}</span>
        </div>
      </div>
    </el-col>
    <el-col :span="24" class="bg-btom">
      <el-col :span="24" style="margin:30px 0px;">
        <el-col :span="12">
          <el-button style="width:6vw;" @click="searchUser()" class="el_button left-s">新增</el-button>
        </el-col>
        <el-col :span="12">
          <div class="right-s">
            <el-input
              class="inputs"
              placeholder="搜索员工名字"
              prefix-icon="el-icon-search"
              v-model="input2"
            ></el-input>
            <el-button @click="searchUser()" class="el_button">搜索</el-button>
          </div>
        </el-col>
      </el-col>
      <template>
        <el-table
          :data="unlist"
          style="width: 100%;margin:10px 0px;padding: 0px 30px;"
          :row-style="{height:'60px'}"
          :cell-style="{padding:'0px'}"
        >
          <!-- <el-table-column show-overflow-tooltip prop="code" label="角色编号"></el-table-column> -->
          <el-table-column width="125" prop="name" label="姓名" show-overflow-tooltip></el-table-column>
          <el-table-column width="125" prop="account" label="工号" show-overflow-tooltip></el-table-column>
          <el-table-column width="145" prop="departmentName" label="部门" show-overflow-tooltip></el-table-column>
          <el-table-column width="145" prop="positionName" label="岗位" show-overflow-tooltip></el-table-column>
          <el-table-column width="145" prop="phone" label="手机号码" show-overflow-tooltip></el-table-column>
          <el-table-column width="145" prop="email" label="邮箱" show-overflow-tooltip></el-table-column>
          <el-table-column
            width="145"
            prop="createTime"
            label="入职日期"
            :formatter="dateFormat"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column width="145" prop="signState" label="签署状态" show-overflow-tooltip>
            <template slot-scope="scope">
              <span
                style="background-color:#FBF4E6;display:inline-block;color:#E6A699;padding: 5px 10px;border-radius:5px; text-align: center;width:5vw"
                v-if="unlist[scope.$index].signState==0"
              >未签</span>
              <span
                style="background-color:#D9F6E5;color:#8CCDBE;display:inline-block;padding: 5px 10px;border-radius:5px; text-align: center;width:5vw"
                v-if="unlist[scope.$index].signState==1"
              >已签</span>
            </template>
          </el-table-column>
          <el-table-column
            width="145"
            prop="startTime"
            label="合同开始时间"
            :formatter="dateFormat"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column
            width="145"
            prop="endTime"
            label="合同结束时间"
            :formatter="dateFormat"
            show-overflow-tooltip
          ></el-table-column>
          <el-table-column width="145" prop="betweenDay" label="到期提醒" show-overflow-tooltip>
            <template slot-scope="scope">
              <span
                style="background-color:#f00;display:inline-block;color:#fff;padding: 5px 10px;border-radius:5px; text-align: center;width:5vw"
                v-if="unlist[scope.$index].betweenDay==30"
              >还有30天</span>
              <span
                v-if="unlist[scope.$index].betweenDay!==30"
              >还有{{unlist[scope.$index].betweenDay}}天</span>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <el-pagination
        style="padding:5px 15px 15px 15px;display:flex; justify-content: flex-end;"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[8,16,24,32,40]"
        :page-size="8"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-col>
  </div>
</template>
<script>
export default {
  name: "ygdangan",
  data() {
    return {
      list: [
        {
          title: "全部",
          imgs: require("../../stactic/image/quanbu.png"),
          imgs1: require("../../stactic/image/quanbu1.png"),
        },
        {
          title: "未签",
          imgs: require("../../stactic/image/weiqy.png"),
          imgs1: require("../../stactic/image/weiqy1.png"),
        },
        {
          title: "已签",
          imgs: require("../../stactic/image/yiqian.png"),
          imgs1: require("../../stactic/image/yiqian1.png"),
        },
      ],
      unlist: [],
      num: 0,
      total: -1,
      rows: 10,
      page: 1,
      title: "",
      input2: "",
    };
  },
  methods: {
    tabClick(item, index) {
      //菜单点击
      this.num = index;
      if (index == 0) {
        this.title = "";
      } else if (index == 1) {
        this.title = 0;
      } else if (index == 2) {
        this.title = 1;
      }
      this.getUserlist();
    },
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
        `/contract/all?pageSize=${this.rows}&currPage=${this.page}&signState=${this.title}&name=`
      );
      console.log(res);
      this.unlist = res.data.data.list;
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
<style scoped>
.left-s {
  margin-left: 30px;
  float: left;
}
.right-s {
  margin-right: 30px;
  float: right;
}
.inputs {
  width: 17vw;
}
.box-card {
  margin: 20px 20px 0 20px;
  height: 97%;
}
.bg-top {
  background-color: white;
  height: 13vh;
  border-radius: 8px;
}
.bg-btom {
  margin-top: 30px;
  background-color: white;
  height: 71vh;
  border-radius: 8px;
}
.title_s {
  display: flex;
  justify-content: space-around;
}
.tanx {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-top: 20px;
}
.imgs {
  margin-bottom: 10px;
  width: 3vw;
  height: 6vh;
}
.active {
  color: #0aced4;
  font-size: 14px;
}
.actives {
  color: #c0c4cd;
  font-size: 14px;
}
>>> .el-table th {
  background-color: rgba(246, 249, 253, 1);
}
>>> .el-table::before {
  height: 0;
}

>>> .el-table th,
>>> .el-table td {
  text-align: center !important;
  border: 0;
}
>>> .el-table .el-table__body tr:hover td {
  color: #37d7dc;
}
>>> .el-table tbody tr:hover > td {
  background-color: rgba(236, 251, 252, 1);
}
.el_button {
  background-color: #0aced4;
  color: #fff;
  outline: none;
}
</style>