<template>
  <div id="outer-wapper">
    <!--设置视频为背景 -->
    <div class="video-box">
      <video
        src="./audio/fish.mp4"
        class="video-background"
        preload="auto"
        loop
        playsinline
        autoplay
        muted
      ></video>
      <!-- 表单登录 -->
      <div id="login-wapper">
        <div id="login">
          <!-- 登录的表单 -->
          <el-form size="normal" style="width: '50%'">
            <el-form-item label="手机号" label-width="80px">
              <el-input v-model="phone" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="密码" label-width="80px">
              <el-input
                placeholder="请输入密码"
                v-model="password"
                show-password
              ></el-input>
            </el-form-item>

            <el-button type="primary" round size="medium" @click="handlerLogin"
              >登录</el-button
            >

            <!-- 点击其他方式登录弹出对话框 -->
            <el-button type="success" round size="medium" @click="handlerOther"
              >其他方式登录</el-button
            >
          </el-form>

          <!-- 对话框组件 -->
          <el-dialog
            title="其他方式登录"
            width="500px"
            :visible.sync="dialogFormVisible"
          >
            <el-form>
              <el-form-item label="手机号" label-width="100px">
                <el-input
                  autocomplete="off"
                  v-model="diaLogInfo.iphone"
                  placeholder="请输入手机号"
                ></el-input>
              </el-form-item>
              <el-form-item label="验证码登录" label-width="100px">
                <el-input
                  style="width: 100px"
                  autocomplete="off"
                  placeholder="请输入验证码"
                  v-model="diaLogInfo.visibleNum"
                ></el-input>

                <el-button
                  type="primary"
                  size="default"
                  @click="handlerSendPhoneVerify"
                  :disabled="diaLogInfo.diaLogInputDisabled"
                  >{{ diaLogInfo.markedWords }}</el-button
                >
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="handlerOk">登 录</el-button>
            </div>
          </el-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reqLogin, reqSendPhoneVerify,reqCaptchaIsOk} from "@/api";
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      password: "",
      // 控制对话框是否隐藏
      dialogFormVisible: false,
      // 对话框的信息
      diaLogInfo: {
        iphone: "",
        visibleNum: "",
        markedWords: "点击获取验证码",
        diaLogInputDisabled: false,
      },
    };
  },
  methods: {
    async handlerLogin() {
      const { phone, password } = this;
      // 判断是否为空
      if (phone && password) {
        let result = await reqLogin(phone, password);
        if (result.code === 200) {
          this.$message({
            type: "success",
            message: "登录成功",
          });
          console.log(result);
        } else {
          this.$message({
            type: "error",
            message: "登录失败",
          });
        }
      } else {
        this.$message({
          type: "warning",
          message: "请输入密码或手机号",
        });
      }
    },
    // 其他登录方式
    handlerOther() {
      this.dialogFormVisible = true;
    },
    // 点击对话框登录按钮的回调
    async handlerOk() {
      // 验证验证码是否正确
      const {iphone,visibleNum} = this.diaLogInfo;
      if(iphone && visibleNum){
        let result = await reqCaptchaIsOk(iphone,visibleNum);
        if(result.code === 200){
          
        }else{
          this.$message({
            type:"warning",
            title:'验证码或手机号错误'
          })
        }
      }else{
        this.$notify({
          title:'请输入手机号和验证码',
          type:'warning',
          position:"top-left",
          showClose:false,
        })
      }
    },
    // 点击获取手机验证码的回调
    async handlerSendPhoneVerify() {
      if (this.diaLogInfo.iphone.trim()) {
        let result = await reqSendPhoneVerify(this.diaLogInfo.iphone);
        if (result.code === 200) {
          // 发送成功，开始计时器,验证码60s之后重新发送
          let maxNum = 60;
          let timeId = setInterval(() => {
            this.diaLogInfo.diaLogInputDisabled = true;
            let countNum = maxNum--;
            this.diaLogInfo.markedWords = `${countNum}s后获取`;
            if (countNum === 0) {
              clearInterval(timeId);
              this.diaLogInfo.markedWords = "点击获取验证码";
              this.diaLogInfo.diaLogInputDisabled = false;
            }
          }, 1000);
        } else {
          this.$notify({
            title: result.message,
            type: "warning",
            position: "top-right",
            showClose: false,
          });
        }
      } else {
        this.$notify({
          title: "请输入手机号",
          type: "warning",
          position: "bottom-left",
          // 是否显示关闭按钮
          showClose: false,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
#outer-wapper {
  height: 500px;
  .video-box {
    position: relative;
    height: 100vh;
    background-color: #c1cff7;
    position: relative;
    /*进行视频裁剪*/
    overflow: hidden;
    #login-wapper {
      position: absolute;
      left: 35%;
      top: 40%;
      #login {
        form {
          button {
            width: 200px;
            margin-left: 60px;
            font-size: 20px;
          }
        }
      }
    }
  }
  .video-box .video-background {
    position: absolute;
    left: 50%;
    top: 50%;
    /*保证视频内容始终居中*/
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    /*保证视频充满屏幕*/
    object-fit: cover;
    min-height: 800px;
  }
}
</style>