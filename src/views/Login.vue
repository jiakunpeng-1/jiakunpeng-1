<template>
  <div class="login">
    <div class="box-max">
      <div class="im">
        <img src="../assets/image/title2.png" alt />
        <span>&nbsp;</span>
      </div>
      <div class="box userlogin">
        <el-row>
          <h3>管理员登录</h3>
        </el-row>
        <el-row>
          <input-text lineColor="gray" placeholder="请输入账号"></input-text>
        </el-row>
        <el-row>
          <input-text inputType="password" lineColor="gray" placeholder="请输入密码"></input-text>
        </el-row>
        <el-row>
          <el-col :span="16">
            <input-text inputType lineColor="gray" placeholder="请输入验证码"></input-text>
          </el-col>
          <el-col :span="4">
            <div class="VerificationCode">
              <div>
                <img
                  id="imgCode"
                  src="client_mana/jsp/verificationCodeImg.jsp"
                  onclick="this.src='client_mana/jsp/verificationCodeImg.jsp?'+(new Date()).getTime();"
                />
              </div>
            </div>
          </el-col>
        </el-row>
        <Button @login="login">确认登录</Button>
      </div>
    </div>
    <div class="fon">
      <p>
        &copy;2021. All rights reserved. &nbsp;&nbsp;&nbsp;&nbsp;
        <a
          class="onestyle"
          href="http://www.haitaichina.com/"
          target="_blank"
          title="海泰方圆科技"
        >北京海泰方圆科技股份有限公司</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <img class="onestyle" src="@/assets/image/datasplus2.jpg" />
        &nbsp;&nbsp;&nbsp;&nbsp;海泰方圆电子文档安全管理系统（涉密专用计算平台版）V2
        <br />
        <a
          class="twostyle twostyle2"
          href="http://www.haitaichina.com/"
          target="_blank"
          title="海泰方圆科技"
        >北京海泰方圆科技股份有限公司</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <img class="twostyle" src="@/assets/image/datasplus.png" />
      </p>
    </div>
  </div>
</template>

<script>
import InputText from "../components/public/InputText.vue";
import Button from "../components/public/Button.vue";
export default {
  components: {
    InputText,
    Button
  },
  methods: {
    // 登录功能
    login() {
      localStorage.setItem("login", "true");
      this.$store.commit("goLogin");
      this.$router.push("/");
    }
  },
  mounted() {
    document.title = "login";
  }
};
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #1dc2d5 url("../assets/image/bg.jpg") no-repeat;
  position: relative;
  .box-max {
    position: absolute;
    top: -30px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 900px;
  }
  .userlogin {
    .el-row {
      margin: 2rem 0;
      .VerificationCode {
        div {
          width: 28%;
          display: inline-block;
          text-align: right;
        }
      }
    }
  }
  .box {
    width: 390px;
    height: 500px;
    background: url("../assets/image/houtaibgwin.png");
    position: absolute;
    top: 0px;
    bottom: 0;
    right: 0px;
    margin: auto;
    box-sizing: border-box;
    padding: 20px 40px;
    box-shadow: -4px 7px 46px 2px rgba(0, 0, 0, 0.1);
  }
  .im {
    position: absolute;
    left: 0;
    top: 35%;
    width: auto;
    display: inline-block;
    font-size: 12px;
    color: #054a5e;
  }
  .fon {
    position: absolute;
    bottom: 0px;
    width: 100%;
    text-align: center;
    font-size: 14px;
    p {
      margin-top: 0;
      color: #067aa4;
      font-size: 12px;
    }
    a {
      color: #0cefef;
      transform: all 0.3s ease;
      text-decoration: none;
      background-color: transparent;
    }
    a:hover {
      border-bottom: 1px solid #0cefef !important;
    }
  }
}
@media (max-width: 901px) {
  body .box {
    width: 86%;
    top: 30px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .im {
    display: none !important;
  }
  .top {
    display: block !important;
  }
  .box-max {
    width: 500px !important;
  }
}

@media (max-width: 600px) {
  .onestyle {
    display: none !important;
  }
  .twostyle {
    display: inline-block !important;
  }
  // .im {
  //   display: none;
  // }
}
</style>
