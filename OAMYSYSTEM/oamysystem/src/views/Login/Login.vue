<template>
  <div class="page login-page">
    <div class="login_img">
      <transition-group style="margin: 0px;padding: 0px;" tag="ul" name="img">
        <li v-for="(im,index) in list" :key="index" v-show="index==mark">
          <!--  -->
          <div class="divImg" :style="{backgroundImage: 'url('+im.images+')'}"></div>
        </li>
      </transition-group>
    </div>
    <!-- <img class="imgs" :src="list[last].images" alt /> -->
    <Vcode :show="isShow" @success="success" :imgs="[Img1,Img2,Img3,Img4,Img5]" />
    <div class="container d-flex align-items-center">
      <div class="form-holder has-shdow">
        <div class="row rows">
          <div class="col-lg-6 bg-whites">
            <div class="form d-flex align-items-center">
              <div class="content">
                <h1 style="color:rgba(66,225,79);text-align: center;">HI.</h1>
                <h1 style="color:white;text-align: center;">湖南长劲鹿网络科技</h1>

                <el-form
                  :label-position="labelPosition"
                  :model="formdata"
                  :rules="loginFormRules"
                  class="loginer_from"
                >
                  <el-form-item class="input_margin" prop="username">
                    <!-- label="账号:" -->
                    <el-input
                      prefix-icon="el-icon-user"
                      placeholder="请输入账号"
                      class="input_border"
                      v-model="formdata.username"
                    >
                      <i class="el-icon-user"></i>
                    </el-input>
                  </el-form-item>

                  <el-form-item class="input_margin" prop="password">
                    <!-- <el-col :span="22">label="密码:" -->
                    <el-input
                      prefix-icon="el-icon-s-cooperation"
                      placeholder="请输入密码"
                      class="input_border"
                      v-model="formdata.password"
                      type="password"
                    ></el-input>
                    <!-- </el-col> -->
                    <!-- <el-col :span="2">&nbsp;</el-col> -->
                  </el-form-item>

                  <el-button
                    style="width:100%;text-align: center;margin-top:25px"
                    @click.prevent="handLogin()"
                    type="primary"
                  >登录</el-button>

                  <div class="rad">
                    <el-checkbox v-model="checked">记住密码</el-checkbox>
                  </div>

                  <div class="footer_text">
                    <p
                      style="text-align: center;font-size:12px;line-height:30px;margin-top:30px;color:white"
                    >本公司声明：本网站数据非内部人员禁止使用，一经发现后果自负</p>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import "../../assets/css/login.css";
import "../../assets/css/login.css";
import Vcode from "vue-puzzle-vcode";
import Img1 from "../../assets/img/i0.jpg";
import Img2 from "../../assets/img/timg.jpg";
import Img3 from "../../assets/img/timg1.jpg";
import Img4 from "../../assets/img/timg2.jpg";
import Img5 from "../../assets/img/timg3.jpg";

export default {
  name: "login",
  components: {
    Vcode,
  },
  data() {
    return {
      labelPosition: "left",
      isShow: false, // 验证码模态框是否出现
      mark: 0,
      show: true,
      last: 0,
      Img1,
      Img2,
      Img3,
      Img4,
      Img5,
      list: [
        {
          images: require("@/assets/img/1.jpg"),
        },
        {
          images: require("@/assets/img/2.jpg"),
        },
        {
          images: require("@/assets/img/3.jpg"),
        },
        {
          images: require("@/assets/img/4.jpg"),
        },
      ],
      formdata: {
        username: "",
        password: "",
      },
      checked: false,
      radio: "",
      radios: "",
      loginFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
          {
            min: 6,
            max: 18,
            message: "长度在 6 到 18 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    this.play();
    if (localStorage.getItem("checked")) {
      this.checked = true;
      this.formdata.username = localStorage.getItem("username");
      this.formdata.password = localStorage.getItem("password");
    }
  },
  mounted() {
    // setInterval(() => {
    //   this.last++;
    //   if (this.last >= this.list.length) {
    //     this.last = 0;
    //   }
    // }, 6000);
  },
  methods: {
    autoPlay() {
      if (this.mark < this.list.length - 1) {
        this.mark++;
      } else {
        this.mark = 0;
      }
    },
    play() {
      setInterval(this.autoPlay, 6000);
    },

    // 验证码

    async handLogin() {
      // console.log(this.checked);
      // if (
      //   this.formdata.username == "740102139" &&
      //   this.formdata.password == "123456"
      // ) {
      //   this.isShow = true;
      // } else {
      //   alert("登录失败");
      // }

      const res = await this.$http.post(
        "/user/login",
        this.formdata
      );
      console.log(res);
      let data = res.data;
      if (res.data.code === 1) {
        // debugger
        this.$message({
          message: res.data.msg,
          type: "warning",
        });
      } else if (res.data.code == 0) {
        this.isShow = true;
       
        sessionStorage.setItem(
          "access_token",
          "bearer " + data.data.access_token
        );
      }
    },
    success(msg) {
      this.isShow = false; // 通过验证后，需要手动隐藏模态框

      this.$message.success("登录成功");

      this.$router.push("/Home");
      console.log(this.checked);
      if (this.checked) {
        localStorage.setItem("checked", this.checked);
        localStorage.setItem("username", this.formdata.username);
        localStorage.setItem("password", this.formdata.password);
      } else {
        localStorage.removeItem("checked");
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }
      // console.log(localStorage.getItem("password"));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginer_from {
  margin-top: 30px;
}
.input_border {
  margin-top: 10px;
}
.rows {
  display: flex;
  justify-content: center;
}

.login_img {
  width: 100vw;
  height: 100vh;
}
* {
  list-style-type: none;
}
.login_img ul li {
  position: absolute;
}
.login_img .divImg {
  background-position: 0px;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
}
.img-enter-active,
.img-leave-active {
  transition: all 4s;
}
.img-enter,
.img-leave-to {
  opacity: 0;
}
.img-enter-to,
.img-leave {
  opacity: 1;
}
/* .codes_code {
  cursor: pointer;
  color: rgb(143, 142, 142);
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  background-color: #e2ccd9;
  border-radius: 5px;
  text-align: center;
  display: inline-block;
  padding: 2px 8px;
 
} */
.meds {
  width: 78%;
}
@media only screen and (min-width: 320px) {
  .meds {
    width: 48%;
  }
}
@media only screen and (min-width: 375px) {
  .meds {
    width: 65%;
  }
}

@media screen and (min-width: 414px) {
  .meds {
    width: 70%;
  }
}
/* @media only screen and (max-height: 812px) {
    .meds {
        width:66%;
    }
} */
/* @media only screen and (max-width: 768px) {
    .meds {
        width:78%;
    }
} */
@media only screen and (min-width: 1024px) {
  .meds {
    width: 78%;
  }
}
</style>
<style>
.el-input__icon {
  color: white !important;
  font-size: 20px;
}
.input_margin .el-input__inner {
  border: none !important;
  background: rgba(0, 0, 0, 1) !important;
  opacity: 0.6 !important;
  border-bottom: 1px solid rgba(186, 205, 224, 1) !important;
  border-radius: 0 !important;
}
.rad {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  margin-bottom: 10px;

  /* margin: 15px 0; */
}
.el-input--prefix .el-input__inner {
  padding-left: 49px;
}
</style>