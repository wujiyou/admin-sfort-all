<template>
  <div class="container" :style="bg">
    <header class="headTitle">
      <div class="left" @click="lefts()">
        <!-- <img src="../../../static/images/mobilefilling/a.png" alt /> -->
      </div>
      <div class="center">{{ proAdress }}移动充装大数据中心</div>
      <div class="right">{{ date | formatDate }}</div>
    </header>
    <div class="content">
      <!-- 头部 -->
      <div class="content_top">
        <div class="content_top_left">
           <div>
              <div style="flex:4;display: flex;justify-content: center;margin-left:90px;margin-bottom:10px">
                 <div class="content_top_left_box">
                     <div class="box_1">
                        <mobiletopbar :barChartSty="barChartSty"></mobiletopbar>
                     </div>
                     <div class="box_2">
                       <moblietopzexian :barChartSty="barChartSty"></moblietopzexian>
                     </div>
                 </div>
              </div>
           </div>
        </div>
        <div class="content_top_right">

        </div>
      </div>

      <!-- 底部 -->
      <div class="content_bottom">
        <div class="bottom_content">
          <div class="box_bottom">
            <!-- <mobilebottom class="box_bottom"></mobilebottom> -->
          </div>
        </div>
        <div class="bottom_content">
          <!-- table_box -->
          <div class="box_bottom">
            <!-- <horseRaces :liNum="liNum"></horseRaces> -->
          </div>
        </div>
        <div class="bottom_content">
          <div class="box_bottom">
            <!-- <czatlas :heis="heis"></czatlas> -->
          </div>
        </div>
        <div class="bottom_content">
          <div class="box_bottom">
            <!-- <horses :liNum="liNum"></horses> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mobilebottom from "@/components/liquefied/mobliemodule/mobliebottom";
import horseRaces from "@/components/liquefied/mobliemodule/horseRaces";
import horses from "@/components/liquefied/mobliemodule/horses";
import czatlas from "@/components/liquefied/mobliemodule/czatlas"
import mobiletopbar from "@/components/liquefied/mobliemodule/mobiletopbar";
import moblietopzexian from "@/components/liquefied/mobliemodule/moblietopzexian";
const padDate = function (value) {
  return value < 10 ? `0${value}` : value;
};
export default {
  name: "mobilefilling",
  data() {
    return {
      liNum: 0,
      date: new Date(),
      heis:"height:30vh",
      isnorMal: true,
      barChartSty: "width: 100%;height:22vh;",
       
    };
  },
  components: {
    mobilebottom,
    horseRaces,
    horses,
    czatlas,
    mobiletopbar,
    
  },
  props: {
    bg: {
      type: String,
      default:
        "background: url('/bgcolor.png') no-repeat;background-size: 100% 100%;",
    },
  },

  filters: {
    formatDate: function (value) {
      const date = new Date(value);
      const year = date.getFullYear();
      const month = padDate(date.getMonth() + 1);
      const day = padDate(date.getDate());
      const hours = padDate(date.getHours());
      const minutes = padDate(date.getMinutes());
      const seconds = padDate(date.getSeconds());
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
  },

  created() {
    this.provincesAdress = sessionStorage.getItem("proName");
    this.proAdresss = sessionStorage.getItem("proName");
    if (sessionStorage.getItem("proName") == "兰州新区") {
      this.isShowProAdress = true;
    }
    console.log(this.proAdress);
    console.log(this.isShowProAdress);
    this.type = sessionStorage.getItem("type");
    this.code = sessionStorage.getItem("areCode");
    this.citCode = sessionStorage.getItem("citCode");

    this.proAdress = sessionStorage.getItem("proName");
    // this.danweij();
    const _this = this;
    this.timer = setInterval(function () {
      _this.date = new Date();
    }, 1000);
    if (this.$route.path == "/allMap") {
      // this.bg = "height:49vh";
      this.liNum = 3;
      this.barChartSty = "width: 100%;height:20vh;";
      // this.fanjian = "font-size:14px;color:white";
      // this.fanxianxian = "position: absolute;top:-0.8%;color: white;";
      // this.fanxian = "position: absolute;top:-1%;color: white;";
      // this.imgNone = "display:none";
      this.isnorMal = false;
      this.heis = "height:15vh";
      // this.barChartSty = "width: 100%;height:20vh;";
      // this.heig="height:10vh"
      // this.y="50%"
      // this.barChartSty="width: 100%;height:20vh;"
      // this.doFontSize="font-size:16px !important"
      // this.isnorMal=false
    }
    console.log(this.$route.path);
  },
  methods: {},
};
</script>


<style scoped>
.container {
  /* overflow-y: hidden; */
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 86vh;
  position: relative;
}

.headTitle {
  width: 100%;
  height: 7vh;
  background: url("../../../static/images/mobilefilling/head.png") no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.headTitle div {
  flex: 1;
  color: white;
}
.headTitle .left {
  padding-left: 15px;
}
.headTitle .center {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  background: linear-gradient(to right, #00afff, #295aaa);
  -webkit-background-clip: text;
  color: transparent;
}
.headTitle .right {
  text-align: right;
  padding-right: 15px;
  color: white;
}

.content {
  width: 100%;
  height: 50%;
  padding-bottom: 10px;
  position: relative;
}
.content_top {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 80%;
  /* margin-top:-20px; */
  padding-bottom: 10px;
  position: relative;
}
.content_top_left {
  margin: 10px 10px;
  flex: 4;
  background: url("../../../static/images/mobilefilling/c.png") no-repeat;
  margin-bottom: 10px;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.content_top_right {
  flex: 4;
  margin: 10px 10px;
  background: url("../../../static/images/mobilefilling/c.png") no-repeat;
  margin-bottom: 10px;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content_bottom {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 92%;
  margin-top: 20px;
  padding-bottom: 10px;
  position: relative;
}
.bottom_content {
  flex: 4;
  margin: 5px 10px;
  background: url("../../../static/images/mobilefilling/7.png") no-repeat;
  margin-bottom: 10px;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box_bottom {
  display: flex;
  justify-content: center;
  align-items: center;
}
.table_box {
  margin-left: 15px;
  margin-right: 15px;
}
</style>

