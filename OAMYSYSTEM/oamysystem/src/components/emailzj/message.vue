<template>
  <div>
    <el-col :span="24">
      <el-col :span="8" class="email_center">
        <div class="em_mes_top">
          <el-input size="medium" placeholder="输入发件人、邮件内容、联系人进行搜索" suffix-icon="el-icon-search" v-model="input2"></el-input>
        </div>
        <div class="em_mes_content">
        <div class="em_mes_text1">

        </div>
        <div class="em_mes-text2">
            
        </div>
        </div>
      </el-col>
      <el-col :span="15" class="email_box">
        <div class="email_right">
          <div class="heigth-botm">
            <p style="cursor: pointer;width:77px;height:77px; border-radius: 20px;">
              <img
                style="width:77px;height:77px;border-radius: 50%;"
                src="../../assets/img/touxiang.png"
                alt
              />
            </p>
            <p style="margin-left:10px">
              <span
                style="font-size:20px;font-family:PingFang SC;font-weight:800;color:rgba(58,58,58,1);display: block;margin-top:10px"
              >木村拓哉</span>
              <span
                style="font-size:16px;font-family:PingFang SC;font-weight:bold;color:rgba(179,181,194,1);display: block;"
              >UI设计师</span>
            </p>
          </div>
          <div class="right_text">
            <p class="time_left">2020-07-09 16:38:52</p>
          </div>
        </div>
        <div class="email_content">
          <p class="email_content_text">
            设计师喜欢把世界想象得很美好，社会很和谐，但是这些都只是愿望，真实情况是，设计师在个人成长和职业发展中
            总会遇到很多客观问题，而面对问题的时候,个人的Q和EQ就变得很重要。
            <br />关于公司:
            <br />好的公司只有那几个，剩下的大多数都是不怎么样的，但好在有-些不错的人让你支持下去;
            <br />公司的性质取决于客户的性质，客户的性质取诀于市场的需求，因此设计师必须先了解市场的需求;公司中别有用心的
            人很多，当有人质疑你能力的时候，你也应该有能力让他闭嘴;
            <br />千万不要相信猎头会给你介绍最好的工作，好和不好只有自己试过才知道;
            <br />你的设计很棒，对于公司看来就是个美工，但是公司会虚伪的称呼你为“设计师”，“工程师”，“艺术家”。我们的期望
            是这个情祝正在改变中，但是没有看到改变的成果。
          </p>

          <div class="email_img">
            <div class="email_img1">
              <img src="../../stactic/image/bjemail.png" alt />
            </div>
            <div class="email_img1">
              <img src="../../stactic/image/bjemail.png" alt />
            </div>
          </div>
          <div class="email_img">
            <div class="email_img1">
              <img src="../../stactic/image/bjemail.png" alt />
            </div>
            <div class="email_img1">
              <img src="../../stactic/image/bjemail.png" alt />
            </div>
          </div>

          <div class="email_footer">
            <div class="email_footer_left">
              <span class="span_img">
                <img class="span_img_i" src="../../stactic/image/xx.png" alt />
              </span>
              <span class="span_img">
                <img class="span_img_i" src="../../stactic/image/sc.png" alt />
              </span>
              <span class="span_img">
                <img class="span_img_i" src="../../stactic/image/zf.png" alt />
              </span>
              <span class="span_img">
                <img class="span_img_i" src="../../stactic/image/zjb.png" alt />
              </span>
            </div>
            <div class="email_footer_right">
              <span class="span_img">
                <img class="span_img_is" src="../../stactic/image/fb.png" alt />
              </span>
            </div>
          </div>
        </div>
      </el-col>
    </el-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
        input2:""
    };
  },
};
</script>
<style lang="less">
.email_center {
  //   background-color: white;
}
.email_box {
  background-color: white;
  margin-left: 20px;
  border-radius: 8px;
  .email_right {
    display: flex;
    justify-content: space-between;
    .heigth-botm {
      display: flex;
      justify-content: flex-start;
      margin-left: 30px;
      margin-top: 20px;
    }
    .right_text {
      margin-right: 30px;
      .time_left {
        color: #a0a0ac;
        margin-top: 40px;
      }
    }
  }
  .email_content {
    width: 80%;
    margin: 0px auto;
    padding: 0px 20px;
    .email_footer {
      display: flex;
      justify-content: space-around;
      .email_footer_left {
        width: 80%;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 20px;
        .span_img {
          display: inline-block;
          .span_img_i {
            width: 50%;
            cursor: pointer;
          }
        }
      }
      .email_footer_right {
        display: flex;
        justify-content: flex-end;
        width: 20%;
        margin-bottom: 20px;
        .span_img {
          display: inline-block;
          display: flex;
          justify-content: flex-end;
          .span_img_is {
            width: 35%;
            cursor: pointer;
          }
        }
      }
    }
    .email_content_text {
      //   text-indent: 1em;
      text-align: left;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #a0a0ac;
      line-height: 30px;
    }
    .email_img {
      display: flex;
      justify-content: space-between;
      .email_img1 img {
        width: 95%;
        height: 90%;
      }
      // flex-flow: wrap;
    }
  }
}
</style>