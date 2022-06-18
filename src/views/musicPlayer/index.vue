<template>
  <div id="MSplayer-wapper">
    <audio :src="imgUrl" controls></audio>
    <h1>播放器</h1>
  </div>
</template>

<script>
export default {
  name: "musicPlayer",
  data() {
    return {
      imgUrl: "",
    };
  },
  mounted() {
    const { id } = this.$route.query;
    this.imgUrl = "https://music.163.com/song/media/outer/url?id=" + id + ".mp3";
  },
};
</script>

<style lang="less" scoped>
#MSplayer-wapper {
  padding: 20px;
}
</style>