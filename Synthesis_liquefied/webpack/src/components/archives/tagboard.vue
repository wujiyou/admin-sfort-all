<template>
  <div>
    <el-card class="box-card" style="margin:20px 20px 0 20px;">
      <!-- 面包屑 -->
      <!-- <el-breadcrumb separator-class="el-icon-arrow-right " class="arrow_right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">用户管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>-->

      <!--搜索  -->
      <el-row>
        <el-col :span="24">
          <h5 style="border-bottom:1px solid #ece8e8;padding-bottom:15px;padding-left:15px">查询信息</h5>
        </el-col>

        <el-col style="padding-left:15px" :span="22">
          <el-col :span="4">
            <el-input
              size="small"
              style=" width: 100%;"
              @clear="loadUserList()"
              clearable
              class="input-serach"
              v-model="regId"
              placeholder="请输入登记证号"
            ></el-input>
          </el-col>

          <el-col style="margin-left:30px" :span="4">
            <el-select
              size="small"
              clearable
              style=" width: 100%;"
              v-model="isCard"
              @clear="loadUserList()"
              placeholder="请选择是否发卡"
            >
              <el-option
                v-for="item in optionslei"
                :key="item.id"
                :label="item.lei"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-col>

          <el-col style="margin-left:30px" :span="4">
            <el-input
              size="small"
              style=" width: 100%;"
              @clear="loadUserList()"
              clearable
              class="input-serach"
              v-model="gasId"
              placeholder="请输入气瓶编号"
            ></el-input>
          </el-col>
          <el-col style="margin-left:30px" :span="4">
            <el-input
              size="small"
              style=" width: 100%;"
              @clear="loadUserList()"
              clearable
              class="input-serach"
              v-model="buildingUser"
              placeholder="请输入使用单位"
            ></el-input>
          </el-col>

          <el-col style="padding-left:15px" :span="4">
            <el-button
              size="small"
              style=" width: 100%;"
              @click="searchUser()"
              class="el_button"
              icon="el-icon-search"
            >搜索</el-button>
          </el-col>
        </el-col>
      </el-row>

      <el-col :span="24">
        <p
          style="width:100%;height:1px;background:rgb(236, 232, 232);margin:20px 0px 0px 0px;z-index:999"
        ></p>
      </el-col>

      <el-col style="margin-bottom:15px;margin-top:15px" :span="24">
        <el-col :span="20">&nbsp;</el-col>
        <el-col :span="2">
          <el-button style="font-size:14px;" type="info" @click="Editusertion()" size="small">刷新</el-button>
        </el-col>
        <el-col :span="2">
          <el-button
            style="font-size:13px;"
            type="success"
            @click="showEdituser()"
            size="small"
          >标签卡发卡</el-button>
        </el-col>
      </el-col>

      <!-- 表格 -->
      <template>
        <el-table
          border
          :data="userlist"
          style="width: 100%;margin:20px 0px;padding-bottom:40px"
          :row-style="{height:'40px'}"
          :cell-style="{padding:'0px'}"
        >
          <el-table-column show-overflow-tooltip type="index" label="序号" width="50"></el-table-column>
          <el-table-column show-overflow-tooltip prop="regId" label="登记证号"></el-table-column>
          <el-table-column show-overflow-tooltip prop="gasId" label="气瓶编号"></el-table-column>
          <el-table-column show-overflow-tooltip prop="appid" label="标签号"></el-table-column>
          <el-table-column show-overflow-tooltip prop="inspectName" label="检验单位"></el-table-column>
          <el-table-column show-overflow-tooltip prop="buildingUser" label="使用单位"></el-table-column>
          <el-table-column show-overflow-tooltip prop="checkStatus" label="检验结论">
            <template slot-scope="scope">
              <p v-if="userlist[scope.$index].checkStatus==0">不合格</p>
              <p v-if="userlist[scope.$index].checkStatus==1">合格</p>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="checkStatus" label="是否发卡">
            <template slot-scope="scope">
              <p v-if="userlist[scope.$index].isCard==0">未发卡</p>
              <p v-if="userlist[scope.$index].isCard==1">已发卡</p>
            </template>
          </el-table-column>

          <el-table-column show-overflow-tooltip prop="checkData" label="检验日期">
            <template slot-scope="socpe">{{socpe.row.checkData | fmtdate}}</template>
          </el-table-column>
          <el-table-column show-overflow-tooltip prop="nextCheckData" label="下次检验日期">
            <template slot-scope="socpe">{{socpe.row.nextCheckData | fmtdate}}</template>
          </el-table-column>

          <!-- 表格操作 -->
          <!-- <el-table-column prop="address" width="150" label="操 作">
            <template slot-scope="scope">
              <el-tooltip
                class="item"
                effect="dark"
                content="发卡"
                :enterable="false"
                placement="top"
              >
                <el-button
                  type="primary"
                  size="mini"
                  title="发卡"
                  :disabled="scope.row.isCard != 0 "
                  plain
                  @click="showEdituser(scope.row.id)"
                >发卡</el-button>
              </el-tooltip>
              <el-tooltip
                class="item"
                effect="dark"
                content="补卡"
                :enterable="false"
                placement="top"
              >
                <el-button
                  :disabled="scope.row.isCard != 1"
                  type="success"
                  size="mini"
                  title="补卡"
                  plain
                  @click="showEditusers(scope.row.id)"
                >补卡</el-button>
              </el-tooltip>
            </template>
          </el-table-column>-->
        </el-table>
      </template>

      <el-pagination
        style="padding:5px 15px 15px 15px;display:flex; justify-content: flex-end;"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[10,15,20,25,30]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
      <!-- 修改对话框 -->
      <!-- <el-dialog title="发卡" :visible.sync="dialogFormVisibleEdit">
        <div v-html="html"></div>
   
        
      <iframe src="../html/index.html" style="width: 100%;height: 400px;" frameborder="0"></iframe>-->
      <!-- <el-form :model="editUserForm">
          <el-col :span="24">
            <el-col :span="8">
              <el-form-item label="登记证号" label-width="100px" prop="regId">
                <el-input v-model="editUserForm.regId" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">&nbsp;</el-col>
            <el-col :span="8">
              <el-form-item label="气瓶编号" label-width="100px" prop="cardInformation">
                <el-input v-model="editUserForm.gasId" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
          </el-col>
     
          <el-col :span="24">
            <el-col :span="8">
              <el-form-item label="检验单位" label-width="100px" prop="cardInformation">
                <el-input v-model="editUserForm.name" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">&nbsp;</el-col>
            <el-col :span="8">
              <el-form-item label="使用单位" label-width="100px" prop="cardInformation">
                <el-input v-model="editUserForm.buildingUser" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="24">
            <el-col :span="10">
              <el-form-item label="下次检验日期" label-width="100px" prop="cardInformation">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="editUserForm.nextCheckData"
                  style="width: 100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="4">&nbsp;</el-col>
            <el-col :span="10">
              <el-form-item label="标签号" label-width="100px" prop="cardInformation">
                <el-input v-model="editUserForm.appid" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
          </el-col>
          <el-col :span="24">
            <el-col :span="10"></el-col>
            <el-col :span="4">&nbsp;</el-col>
            <el-col :span="10">
              <el-col :span="10">
              <el-form-item  hidden label="检验结论" label-width="100px" prop="cardInformation">
                <el-input  v-model="editUserForm.checkStatus" autocomplete="off"></el-input>
              </el-form-item>
            </el-col>
             
            </el-col>
          </el-col>
        </el-form>
      </el-dialog>-->

      <el-dialog title="补卡" :visible.sync="dialogFormVisibleCard">
        <p style="text-align:center">
          <el-button @click="dialogFormVisibleCard = false">取消补卡</el-button>
          <el-button type="primary" @click="EditCard()">确认补卡</el-button>
        </p>
      </el-dialog>
    </el-card>
  </div>
</template>
<script>
import jwtDecode from "jwt-decode";
// import "../../assets/jquery-1.12.4.min.js";

// import { wsrProxy } from "./wsrProxy.min.js";
export default {
  name: "tagboard",

  data() {
    return {
      // query: "",
      // select: "",
      url1: "",
      faka: "",
      regId: "",
      isCard: "",
      gasId: "",
      buildingUser: "",
      userlist: [],
      token: [],
      //分页相关数据
      total: -1,
      page: 1,
      rows: 10,
      // 添加对话框的属性
      // dialogFormVisibleAdd: false,
      dialogFormVisibleEdit: false,
      dialogFormVisibleCard: false,
      // dialogFormVisibleRoleshow: false,
      //添加用户的表单的数据
      userId: -1,
      cardId: -2,

      // editUserForm: {
      //   regId: "", //登记证号
      //   gasId: "", //气瓶编号
      //   name: "", //检验单位
      //   buildingUser: "", //使用单位
      //   checkStatus: "",//检验结论
      //   appid:"", //标签号
      //   nextCheckData:"", //下次检验日期
      //   checkData:"" //checkData
      // },
      optionslei: [
        {
          id: 1,
          lei: "已发卡",
        },
        {
          id: 0,
          lei: "未发卡",
        },
      ],
    };
  },
  // mounted () {
  //    this.url1 = 'http://192.168.0.126:8081/send/tuckComb?id=8a9a54aa-6dfb-4802-a3c5-6612e57f5c31'
  //   },
  methods: {
    Editusertion() {
      this.getUserlist();
    },
    // 发卡发送请求
    // async EditUser() {
    //   //   users/:id
    //   this.dialogFormVisibleEdit = false;
    //   const res = await this.$http.get(`/send/card?id=${this.userId}`);
    //   console.log(res);
    //   if (res.data.code == 201) {
    //     this.$message({
    //       type: "error",
    //       message: res.data.msg
    //     });
    //   } else if (res.data.code == 200) {
    //     this.$message({
    //       type: "success",
    //       message: res.data.msg
    //     });
    //     this.getUserlist();
    //   }
    // },
    // 发卡对话框打开
    async showEdituser(userId) {
      let tokens = this.token;
      let token = sessionStorage.getItem("access_token");
      let unitId = sessionStorage.getItem("unitId");
      const res = await this.$http.post(`send/sendService`, tokens);
      console.log(res);
      if (res.data.code == 201) {
        this.$message({
          type: "error",
          message: res.data.msg,
        });
      } else {
        let http = res.data.data;
        window.open(`${http}/send/tuckComb?unitId=${unitId}`, "_blank");
      }
    },
    // 补卡对话框
    async showEditusers(cardId) {
      this.cardId = cardId;
      this.dialogFormVisibleCard = true;
    },
    // 补卡发送请求

    async EditCard() {
      const res = await this.$http.get(`/send/card?id=${this.userId}`);
      console.log(res);
    },

    qingshowAddUserDia() {
      console.log(1);
    },

    //清空搜索框搜索数据 点击清楚按钮清除数据重新发送请求
    loadUserList() {
      this.getUserlist();
    },
    // 搜索用户 给搜索框绑定query v-model="query"
    async searchUser() {
      console.log(this.page);
      const res = await this.$http.get(
        `/cylinder-card/findPage?page=1&rows=${this.rows}&regId=${this.regId}&isCard=${this.isCard}&gasId=${this.gasId}&buildingUser=${this.buildingUser}`
      );
      console.log(res);
      this.userlist = res.data.data.list;
      this.total = res.data.data.totalCount;
      // console.log("aaaaaa");
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
      let access_token = sessionStorage.getItem("access_token");
      let decode = jwtDecode(access_token);
      this.token = decode.authorities;
      const res = await this.$http.get(
        `/cylinder-card/findPage?page=${this.page}&rows=${this.rows}`
      );
      console.log(res);
      this.userlist = res.data.data.list;
      this.total = res.data.data.totalCount;
    },
  },
  created() {
    this.getUserlist();
  },
};
</script>
<style scoped>
.el-tooltip__popper {
  max-width: 0%;
}
.arrow_right {
  padding: 10px 0px;
  margin-bottom: 10px;
}
[class*="el-col-"] {
  margin-top: 5px;
}
/* .pp{
   justify-content: flex-end;
} */
.input-serach {
  width: 400px;
}
.el_button {
  background-color: #66b1ff !important;
  border-color: #66b1ff !important;
  color: #fff !important;
}
</style>