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
            <!-- 三个别的方式登录 -->
            <div class="otherLogo">
              <a title="游客登录" @click="anonimousLogo">
                <svg
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#bfbfbf"
                    d="M615.424 534.528c98.816-40.96 168.96-138.24 168.96-251.904 0-150.016-122.368-272.384-272.384-272.384s-272.384 122.368-272.384 272.384c0 113.664 69.632 210.944 168.96 251.904-217.6 45.568-385.024 232.96-397.824 462.848-0.512 8.704 6.144 15.872 14.336 16.384h1.024c8.192 0 14.848-6.144 15.36-14.336 13.824-245.76 215.04-439.296 460.288-444.416 3.584 0 6.656 0.512 10.24 0.512s6.656 0 10.24-0.512c245.248 5.12 446.464 198.656 460.288 444.416 0.512 8.704 7.68 14.848 16.384 14.336 8.704-0.512 14.848-7.68 14.336-16.384-12.8-230.4-180.224-417.28-397.824-462.848z m-345.088-251.904c0-133.12 108.544-241.664 241.664-241.664s241.664 108.544 241.664 241.664c0 129.024-101.376 234.496-228.864 241.152h-25.6c-127.488-6.656-228.864-112.128-228.864-241.152z"
                  />
                </svg>
              </a>
              <a title="邮箱登录">
                <svg
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#bfbfbf"
                    d="M838.954667 234.666667H170.666667c-3.626667 0-7.168 0.448-10.56 1.322666l323.690666 323.669334a21.333333 21.333333 0 0 0 30.165334 0L838.954667 234.666667z m46.144 14.186666l-260.693334 260.693334 262.933334 262.912c5.44-7.168 8.661333-16.106667 8.661333-25.792V277.333333c0-10.944-4.117333-20.906667-10.88-28.48zM843.861333 789.333333l-249.6-249.621333-50.133333 50.133333a64 64 0 0 1-90.517333 0l-50.112-50.133333L156.373333 786.88c4.48 1.578667 9.28 2.453333 14.314667 2.453333h673.194667zM128.661333 754.218667L373.333333 509.525333 129.578667 265.813333A42.709333 42.709333 0 0 0 128 277.333333v469.333334c0 2.56 0.213333 5.098667 0.661333 7.552zM170.666667 192h682.666666a85.333333 85.333333 0 0 1 85.333334 85.333333v469.333334a85.333333 85.333333 0 0 1-85.333334 85.333333H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333333V277.333333a85.333333 85.333333 0 0 1 85.333334-85.333333z"
                  />
                </svg>
              </a>
              <a title="二维码登录" @click="QrLogo">
                <svg
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#bfbfbf"
                    d="M423.836543 114.819049l0-0.274246L204.08256 114.544803c-45.911656 0-83.09451 36.932144-83.356476 82.59309l-0.023536 0 0 207.579709c0 2.468215 0.500397 4.782933 1.239224 7.000438 6.678096 39.245839 40.831964 69.164243 82.140789 69.164243L423.836543 480.882282l0-0.237407c38.877449-2.432399 70.477144-31.363312 76.798107-68.926836 0.763386-2.217505 1.289366-4.532223 1.289366-7.000438L501.924016 197.137893l-0.025583 0C501.683539 153.253406 467.244168 117.538997 423.836543 114.819049zM458.038506 393.46021c0 24.14798-19.654642 43.705408-43.88551 43.705408L208.445938 437.165618c-24.230867 0-43.858904-19.557428-43.858904-43.705408L164.587034 201.980177c0-24.149003 19.628036-43.717687 43.858904-43.717687l205.708082 0c24.230867 0 43.88551 19.569708 43.88551 43.717687L458.039529 393.46021zM902.246517 195.111746c-0.215918-42.799782-33.818223-77.644381-76.153424-80.304977l0-0.261966L634.384863 114.544803c-44.790112 0-81.040734 36.037774-81.304747 80.56592l-0.023536 0 0 202.511273c0 2.407839 0.476861 4.673439 1.240247 6.831592 6.487761 38.292118 39.830147 67.472717 80.08906 67.472717l191.70823 0 0-0.226151c37.921681-2.385327 68.734454-30.613228 74.961272-67.246567 0.738827-2.158153 1.216711-4.423753 1.216711-6.831592L902.2721 195.111746 902.246517 195.111746zM859.461061 386.638851c0 23.551392-19.152199 42.643216-42.813085 42.643216L638.678656 429.282067c-23.658839 0-42.834574-19.091824-42.834574-42.643216L595.844082 199.832258c0-23.552415 19.175735-42.643216 42.834574-42.643216l177.969321 0c23.660886 0 42.813085 19.091824 42.813085 42.643216L859.461061 386.638851zM415.680792 539.887141l0-0.260943L201.839473 539.626197c-44.670385 0-80.874959 35.94363-81.114412 80.375585l-0.023536 0 0 201.974038c0 2.420119 0.477884 4.687766 1.215688 6.821359 6.464225 38.181601 39.73498 67.316152 79.922261 67.316152L415.680792 896.113331l0-0.236384c37.824467-2.350534 68.567655-30.529317 74.744331-67.079768 0.762363-2.133593 1.24127-4.40124 1.24127-6.821359L491.666394 620.001783l-0.049119 0C491.402381 577.308425 457.919802 542.53648 415.680792 539.887141zM448.975083 811.04077c0 23.493064-19.127639 42.524512-42.691311 42.524512L212.953601 853.565283c0 0-0.022513 0-0.047072 0l-6.822382 0c-23.563672 0-42.690288-19.031449-42.690288-42.524512L163.393859 624.687502c0-23.469528 19.126616-42.525536 42.690288-42.525536l200.200648 0c23.563672 0 42.691311 19.056008 42.691311 42.525536L448.976106 811.04077zM721.154066 753.120616c-14.741749 0-26.66736 11.508102-26.66736 25.699312l0 51.395554c0 14.228049 11.924587 25.721825 26.66736 25.721825 14.736633 0 26.663266-11.492752 26.663266-25.721825l0-51.395554C747.817332 764.628718 735.891721 753.120616 721.154066 753.120616zM834.775846 727.398792c-14.739702 0-26.665313 11.494799-26.665313 25.697265l0 77.118402c0 14.214746 11.924587 25.701358 26.665313 25.701358 14.763239 0 26.688849-11.487635 26.688849-25.701358l0-77.118402C861.464695 738.894613 849.538061 727.398792 834.775846 727.398792zM834.775846 573.172221c-14.739702 0-26.665313 11.506055-26.665313 25.722848l0 51.395554c0 14.189164 11.924587 25.697265 26.665313 25.697265 14.763239 0 26.688849-11.508102 26.688849-25.697265l0-51.395554C861.464695 584.679299 849.538061 573.172221 834.775846 573.172221zM721.154066 573.195757c-14.741749 0-26.66736 11.507078-26.66736 25.709545L694.486706 701.735295c0 14.192234 11.924587 25.686009 26.66736 25.686009 14.736633 0 26.663266-11.492752 26.663266-25.686009L747.817332 598.905302C747.817332 584.702835 735.891721 573.195757 721.154066 573.195757zM606.050538 701.735295c-14.68956 0-26.640754 11.435447-26.640754 25.663496l0 102.81669c0 14.214746 11.951193 25.701358 26.640754 25.701358 14.787798 0 26.712385-11.487635 26.712385-25.701358L632.762923 727.398792C632.763946 713.170742 620.838336 701.735295 606.050538 701.735295zM606.050538 573.172221c-14.68956 0-26.640754 11.506055-26.640754 25.722848l0 25.709545c0 14.201443 11.951193 25.686009 26.640754 25.686009 14.787798 0 26.712385-11.484565 26.712385-25.686009l0-25.709545C632.763946 584.679299 620.838336 573.172221 606.050538 573.172221z"
                  />
                </svg>
              </a>
            </div>
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
          <!-- 二维码的对话框 -->
          <el-dialog
            title="二维码登录"
            :visible.sync="centerDialogVisible"
            width="30%"
            center
          >
            <span>请使用网易云App扫码</span>
            <div class="qrCode" ref="qrCodeUrl"></div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="centerDialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="centerDialogVisible = false"
                >确 定</el-button
              >
            </span>
          </el-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
import {
  reqLogin,
  reqSendPhoneVerify,
  reqCaptchaIsOk,
  reqQrKey,
  reqQrCreate,
} from "@/api";
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      password: "",
      // 控制对话框是否隐藏
      dialogFormVisible: false,
      // 二维码对话框是否隐藏
      centerDialogVisible: false,
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
      // 手机和密码登录
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
      const { iphone, visibleNum } = this.diaLogInfo;
      if (iphone && visibleNum) {
        let result = await reqCaptchaIsOk(iphone, visibleNum);
        if (result.code === 200) {
          console.log(result);
        } else {
          this.$message({
            type: "warning",
            title: "验证码或手机号错误",
          });
        }
      } else {
        this.$notify({
          title: "请输入手机号和验证码",
          type: "warning",
          position: "top-left",
          showClose: false,
        });
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
    // 游客登录
    async anonimousLogo() {
      this.$message({
        type: "error",
        message: "此接口在修复中",
      });
    },
    // 二维码登录
    async QrLogo() {
      this.centerDialogVisible = true;
      // 请求二维码key
      let res = await reqQrKey();
      if (res.code === 200) {
        let key = res.data.unikey;
        let keyUrl = await reqQrCreate(key);
        if (keyUrl.code === 200) {
          // 这里需要把回调写在外面，然后需要定义一个data进行监视，销毁   qrcode.clear();，不然二维码一直出
          let qrcode = new QRCode(this.$refs.qrCodeUrl, {
            text: keyUrl.data.qrurl,
            width: 150,
            height: 150,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H,
          });
        }
      } else {
        this.$message({
          type: "warning",
          message: "网络错误",
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
        .otherLogo {
          padding: 10px;
          display: flex;
          justify-content: space-around;
          a {
            cursor: pointer;
            svg {
              height: 40px;
              widows: 40px;
            }
          }
        }
        .qrCode {
          margin-top: 10px;
          display: flex;
          justify-content: center;
          align-content: center;
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