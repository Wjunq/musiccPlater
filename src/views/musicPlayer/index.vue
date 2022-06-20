<template>
  <div>
    <span v-html="lyric"></span>
    <!-- 底部音乐 播放器 -->
    <div id="MSplayer-wapper">
      <div class="playerButton">
        <audio :src="audioUrl" ref="audio"></audio>
        <!-- 播放按钮 -->
        <svg
          v-show="isShowPlayerButton"
          @click="handlerPlay"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333zM672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z"
          />
        </svg>
        <!-- 暂停按钮 -->
        <svg
          v-show="!isShowPlayerButton"
          @click="handlerPause"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M512 1024C228.266667 1024 0 795.733333 0 512S228.266667 0 512 0s512 228.266667 512 512-228.266667 512-512 512z m0-42.666667c260.266667 0 469.333333-209.066667 469.333333-469.333333S772.266667 42.666667 512 42.666667 42.666667 251.733333 42.666667 512s209.066667 469.333333 469.333333 469.333333z m-106.666667-682.666666c12.8 0 21.333333 8.533333 21.333334 21.333333v384c0 12.8-8.533333 21.333333-21.333334 21.333333s-21.333333-8.533333-21.333333-21.333333V320c0-12.8 8.533333-21.333333 21.333333-21.333333z m213.333334 0c12.8 0 21.333333 8.533333 21.333333 21.333333v384c0 12.8-8.533333 21.333333-21.333333 21.333333s-21.333333-8.533333-21.333334-21.333333V320c0-12.8 8.533333-21.333333 21.333334-21.333333z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { reqMusiclLyric } from "@/api";
export default {
  name: "musicPlayer",
  data() {
    return {
      isShowPlayerButton: true,
      audioUrl: "",
      lyric: "",
    };
  },
  methods: {
    // 歌词的回调
    async getMuiscLyric(id) {
      let result = await reqMusiclLyric(id);
      if(result.code === 200){
        this.lyric =  result.klyric.lyric
      }else{
        this.$message({
          type:'warning',
          message:"歌词加载错误"
        })
      }
    },

    // 点击开始按钮
    handlerPlay() {
      this.isShowPlayerButton = !this.isShowPlayerButton;
      this.$refs.audio.play();
    },
    // 点击关闭按钮
    handlerPause() {
      this.isShowPlayerButton = !this.isShowPlayerButton;
      this.$refs.audio.pause();
    },
  },
  mounted() {
    const { id } = this.$route.query;
    this.getMuiscLyric(id);
    this.audioUrl =
      "https://music.163.com/song/media/outer/url?id=" + id + ".mp3";
  },
};
</script>

<style lang="less" scoped>
#MSplayer-wapper {
  position: fixed;
  width: 100%;
  background-color: black;
  bottom: 0;
  .playerButton {
    margin-left: 50px;
    svg {
      height: 100px;
      width: 50px;
      cursor: pointer;
    }
  }

  audio {
    width: 100%;
  }
}
</style>