<template>
  <el-carousel :interval="4000" type="card" height="350px">
    <el-carousel-item v-for="(banner,index) in bannerList" :key="banner.encodeId + index">
      <img :src="banner.imageUrl" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { reqBannerList } from "@/api";
export default {
  name: "Banner",
  data() {
    return {
      bannerList: [],
    };
  },
  methods: {
    async getBannerList() {
      let result = await reqBannerList();
      if (result.code === 200) {
        this.bannerList = result.banners;
      } else {
        this.$message({
          message: "轮播图数据请求失败",
          type: "warning",
        });
      }
    },
  },
  mounted() {
    this.getBannerList();
  },
  watch: {
    bannerList() {
      this.$nextTick(() => {
      });
    },
  },
};
</script>

<style scoped>
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
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  img{
    width: 100%;
    height: 100%;
  }
</style>