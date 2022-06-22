<template>
  <div id="transceiver-wapper">
    <!-- 轮播图区域 -->
    <div id="banner-wapper">
      <el-carousel height="350px" direction="vertical" :autoplay="false">
        <el-carousel-item v-for="banner in djBanner" :key="banner.targetId">
          <img :src="banner.pic" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 切换按钮区域 -->
    <div class="elTabs">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">推荐</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">分类</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">分类推荐</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth"
          >付费精品</el-tab-pane
        >
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { reqTransceiverBanner } from "@/api";
export default {
  name: "Transceiver",
  data() {
    return {
      djBanner: [],
      activeName: "second",
    };
  },
  methods: {
    // 请求电台banner的回调
    async getTransceiverBanner() {
      let result = await reqTransceiverBanner();
      if (result.code === 200) {
        this.djBanner = result.data;
      } else {
        this.$message({
          message: "轮播图数据请求失败",
          type: "warning",
        });
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  mounted() {
    this.getTransceiverBanner();
  },
};
</script>

<style scoped>
#transceiver-wapper {
  display: flex;
  flex-direction: column;
  align-content: center;
}
#banner-wapper {
  margin: 0 auto;
  width: 50%;
  margin-bottom: 20px;
}
.elTabs{
  width: 80%;
  margin: 0 auto;
  font-size: 20px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>