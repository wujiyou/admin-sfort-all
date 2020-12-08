<template>
  <div>
    <!-- <div style="background:white;width:99.1%;padding-left:15px">
      <my-bread level1="系统管理" level2="硬件配置"></my-bread>
    </div> -->
    <el-card class="box-card" style="margin:20px 20px 0 20px;">
      <!--搜索  -->
      <el-row>
        <el-col style="padding-left:15px" :span="24">
          <h5 style="border-bottom:1px solid #ece8e8;padding-bottom:30px;"></h5>
        </el-col>

        <el-col>
          <!-- <el-col style="padding-left:15px" :span="22">
            <el-col :span="4">
              <el-select
                disabled
                size="small"
                style=" width: 100%;"
                @clear="loadUserList()"
                @change="function3()"
                clearable
                v-model="bottleType"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in getgoodcate"
                  :key="item.id"
                  :label="item.label"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-col>
          </el-col> -->

        </el-col>
      </el-row>
      <!-- 液化气瓶表格 -->
      <template>
        <el-table
          border
          :data="userlist"
          style="width: 100%;margin:20px 0px;padding-bottom:40px"
          :row-style="{height:'40px'}"
          :cell-style="{padding:'0px'}"
        >
          <el-table-column type="index" label="序号" width="50" show-overflow-tooltip>
            <template slot-scope="socpe">
              <p style="cursor:pointer;" @click="showEdituser(socpe.row)">{{socpe.$index+1}}</p>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip label="单位名称" prop="name"></el-table-column>

          <el-table-column show-overflow-tooltip label="地址" prop="address"></el-table-column>
  

          <el-table-column show-overflow-tooltip label="加气总次数" prop="count"></el-table-column>
        </el-table>
  
      </template>

      <el-pagination
        style="padding:5px 15px 15px 15px;display:flex; justify-content: flex-end;"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[10,15,20,25,30]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>

      <!-- 对话框 -->

      <!-- 液化修改对话框 -->
      <el-dialog
        title="硬件appid配置"
        v-dialogDrag
        :close-on-click-modal="false"
        width="90%"
        :visible.sync="dialogFormVisibleEdit"
      >
        <el-form :model="form">
          <!-- isDelete -->

          <el-form-item label="control(控制器)：" label-width="200px" prop="email">
            <el-input v-model="form.controlId" autocomplete="off"></el-input>
            <span>(多个控制器用英文逗号隔开)</span>
          </el-form-item>

          <el-form-item label="手持机编号：" label-width="200px" prop="userId">
            <el-input v-model="form.userId" autocomplete="off"></el-input>
            <span>（多个手持机用英文逗号隔开）</span>
          </el-form-item>

          <el-form-item label="*手持机MEID：" label-width="200px" prop="macId">
            <el-input v-model="form.macId" autocomplete="off"></el-input>
            <span>（多个手持机用英文逗号隔开）</span>
          </el-form-item>

          <el-form-item label="gunId(加气枪号(1-32)：" label-width="200px" prop="gunId">
            <el-input v-model="form.gunId" autocomplete="off"></el-input>
            <span>（一个控制器对应两把枪用英文逗号隔开,不同控制器的枪号用分号隔开）</span>
          </el-form-item>

          <el-form-item class="dlete" label="是否禁用：" label-width="200px" prop="isDelete">
            <el-switch
              v-model="form.isDelete"
              @change="changeMgStatus()"
              active-color="#13ce66"
              inactive-color="#ff4949"
            ></el-switch>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisibleEdit = false">取 消</el-button>
          <el-button type="primary" @click="EditUser()">确 定</el-button>
        </div>
      </el-dialog>

    </el-card>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "list",
  data() {
    return {
      bottleType: 1,
      userlist: [],
      //分页相关数据
      total: -1,
      currPage: 1,
      page: 1,
      rows: 10,

      dialogFormVisibleEdit: false,
      //添加用户的表单的数据
      form: {
        controlId: "",
        departId: "",
        // name: "",
        gunId: "",
        macId: "",
        userId: "",
        id: "",
        unitId: "",
        form: "",
        isDelete: "",
      },
      
      idss: "",
      id: "",
      idsss: "",
      idssss: "",
      isDisable: 0,
    };
  },

  methods: {
  
 
    // 液化
    async changeMgStatus(val) {
      if (this.isDelete == 1) {
        // hardware/enabled
        const res = await this.$http.put(`hardware/enabled/${this.unitId}`);
        console.log(res);
        if (res.data.code == 1) {
          this.$message({
            type: "warning",
            message: res.data.msg,
          });
        } else if (res.data.code == 0) {
          this.$message({
            type: "success",
            message: res.data.msg,
          });
          this.dialogFormVisibleEdit = false;
        }
        // this.$message({
        //   type: "success",
        //   message: "启用成功",
        // });
        // this.getUserlist();
        // console.log(res);
      } else if (this.isDelete == 0) {
        const res = await this.$http.put(`hardware/disable/${this.unitId}`);
        console.log(res);
        this.$message({
          type: "warning",
          message: res.data.msg,
        });
        this.dialogFormVisibleEdit = false;
        // this.getUserlist();
        // console.log(res);
      }
    },

    // 液化对话框打开
    async showEdituser(user) {
      this.form = {};
      this.id = user.id;
      this.dialogFormVisibleEdit = true;
      const res = await this.$http.get(`hardware/findByUnitId/${this.id}`);
      console.log(res);
      //  this.form.name=user.name
      if (res.data.code == 0) {
        if (res.data.data == null) {
           this.form.isDelete=""
          $(".dlete").hide();
        } else {
          $(".dlete").show();
          this.unitId = res.data.data.id;
          this.form = res.data.data;
          this.isDelete = res.data.data.isDelete;
          console.log(this.isDelete);
          if (res.data.data.isDelete == 0) {
            this.form.isDelete = true;
          } else if (res.data.data.isDelete == 1) {
            this.form.isDelete = false;
          }
        }
      }
    },

    // 液化发送请求
    async EditUser() {
      //   users/:id
      this.form.unitId = this.unitId; //硬件id
      this.form.id = this.id; //单位id
      if (this.form.isDelete == true) {
        this.form.isDelete = 0;
      } else if (this.form.isDelete = false) {
        this.form.isDelete = 1;
      }else if(this.form.isDelete==""){
        this.form.isDelete=""
      }
      const res = await this.$http.post(`hardware/save`, this.form);
      // 2.关闭对话框
      // this.dialogFormVisibleEdit = false;

      console.log(res);
      if (res.data.code === 0) {
        this.$message.success(res.data.msg);

        this.dialogFormVisibleEdit = false;
        this.function3();
      } else if (res.data.code === 1) {
        this.$message.warning(res.data.msg);
      }
    },

    //清空搜索框搜索数据 点击清楚按钮清除数据重新发送请求
    loadUserList() {
      this.function3();
    },
    // 搜索用户 给搜索框绑定query v-model="query"
    searchUser() {
      this.function3();
      // console.log("aaaaaa");
    },
    // 选择不同模块
    async function3() {
        const res = await this.$http.get(
          `unit/findUnitHardware?page=${this.page}&rows=${this.rows}&bottleType=1`
        );
        console.log(res);
        this.userlist = res.data.data.list;
        this.total = res.data.data.totalCount;

    },
    //分页功能
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      // 1.每页显示条数的改变
      this.rows = val;
      // 回到第一页
      this.page = 1;
      // 希望当页条数改变时 从第一页开始显示 this.pagenum = 1 -》currPage=1?
      this.function3();
    },
    handleCurrentChange(val) {
      //页码改变时
      console.log(`当前页: ${val}`);
      this.page = val;
      this.function3();
    },
    // async getUserlist() {

    // }
  },
  created() {
    this.function3();
  },
};
</script>
<style scoped>
.dlete {
  display: none;
}
.dletes {
  display: none;
}
.dletess {
  display: none;
}
.arrow_right {
  padding: 10px 0px;
  margin-bottom: 10px;
}
.input-serach {
  width: 300px;
}
</style>
<style>
.el-table td,
.el-table th {
  text-align: center !important;
}
</style>