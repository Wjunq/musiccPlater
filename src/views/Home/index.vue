<template>
  <div>
    <Banner />
    <!-- 一些内容，后续添加 -->
    <Main/>
  </div>
</template>

<script>
import Banner from "./Banner";
import Main from "./Main";
export default {
  name: "Home",
  components: { Banner,Main },
};
</script>

<style lang="less" scoped>
</style>