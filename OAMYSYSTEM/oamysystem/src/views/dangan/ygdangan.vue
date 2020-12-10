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
          <el-table-column width="205" prop="name" label="姓名" show-overflow-tooltip></el-table-column>
          <el-table-column width="205" prop="account" label="工号" show-overflow-tooltip></el-table-column>
          <el-table-column width="205" prop="departmentName" label="部门" show-overflow-tooltip></el-table-column>
          <el-table-column width="205" prop="positionName" label="职务" show-overflow-tooltip></el-table-column>
          <el-table-column width="205" prop="phone" label="联系电话" show-overflow-tooltip></el-table-column>
          <el-table-column width="205" prop="telephone" label="办公室电话" show-overflow-tooltip></el-table-column>
          <el-table-column width="205" prop="superior" label="直属上级" show-overflow-tooltip></el-table-column>
          <!-- 表格操作 -->
          <el-table-column prop="address" width="150" label="操 作">
            <template slot-scope="scope">
              <el-tooltip
                class="item"
                effect="dark"
                content="授权管理"
                :enterable="false"
                placement="top"
              >
                <el-button
                  type="success"
                  size="mini"
                  title="授权管理"
                  plain
                  icon="el-icon-s-order"
                  @click="userNewRole(scope.row)"
                  circle
                ></el-button>
              </el-tooltip>
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
          title: "总经办",
          imgs: require("../../stactic/dangan/zongjin.png"),
          imgs1: require("../../stactic/dangan/zongjin1.png"),
        },
        {
          title: "人事部",
          imgs: require("../../stactic/dangan/renshi.png"),
          imgs1: require("../../stactic/dangan/renshi1.png"),
        },
        {
          title: "法务部",
          imgs: require("../../stactic/dangan/fawu.png"),
          imgs1: require("../../stactic/dangan/fawu1.png"),
        },
        {
          title: "运营部",
          imgs: require("../../stactic/dangan/yunying.png"),
          imgs1: require("../../stactic/dangan/yunying1.png"),
        },
        {
          title: "行政部",
          imgs: require("../../stactic/dangan/renli.png"),
          imgs1: require("../../stactic/dangan/renli1.png"),
        },
        {
          title: "财务部",
          imgs: require("../../stactic/dangan/caiwu.png"),
          imgs1: require("../../stactic/dangan/caiwu1.png"),
        },
        {
          title: "硬件部",
          imgs: require("../../stactic/dangan/yingjian.png"),
          imgs1: require("../../stactic/dangan/yingjian1.png"),
        },
        {
          title: "软件部",
          imgs: require("../../stactic/dangan/ruanjian.png"),
          imgs1: require("../../stactic/dangan/ruanjian1.png"),
        },
        {
          title: "研发部",
          imgs: require("../../stactic/dangan/yanfa.png"),
          imgs1: require("../../stactic/dangan/yanfa1.png"),
        },
        {
          title: "客服部",
          imgs: require("../../stactic/dangan/kefu.png"),
          imgs1: require("../../stactic/dangan/kefu1.png"),
        },
      ],
      unlist: [],
      num: 0,
      input2: "",
      titles: "",
      total: -1,
      rows: 8,
      page: 1,
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
        `/personnel/consumer/all?pageSize=${this.rows}&currPage=${this.page}&departmentName=${this.titles}&name=`
      );
      console.log(res);
      this.unlist=res.data.data.list;
      this.total=res.data.data.totalCount;
    },
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
  margin-top: 15px;
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