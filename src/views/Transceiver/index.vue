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
    
  </div>
</template>

<script>
import { reqTransceiverBanner } from "@/api";
export default {
  name: "Transceiver",
  data() {
    return {
      djBanner: [],
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
  },
  mounted() {
    this.getTransceiverBanner();
  },
};
</script>

<style scoped>
#transceiver-wapper{
  display: flex;
  justify-content: center;
  text-align: center;
}
#banner-wapper {
  width: 50%;
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