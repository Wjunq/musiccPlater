<template>
  <div id="classifyDetails-wapper">
    <!-- 图片加姓名介绍 -->
    <div class="page-header">
      <img :src="singerList.img1v1Url" alt="" />
      <h1>{{ singerList.name }}</h1>
    </div>
    <!-- 歌曲展示 
     @click="" 点击跳转到播放页面，后续添加
    -->
    <ul class="list-group">
      <li
        class="list-group-item glyphicon glyphicon-music"
        v-for="song in songs"
        :key="song.id"
        @click="toMusicPlayer(song.id)"
      >
        {{ song.name }} --- 作者：<span v-for="art in song.ar" :key="art.id"
          >{{ art.name }};</span
        >
      </li>
    </ul>
    <!-- 分页器 -->
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :page-size="songs.length"
        layout="total, prev, pager, next"
        :total="songInfo.total"
        background
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { reqSingerAll } from "@/api";
export default {
  name: "classifyDetails",
  data() {
    return {
      pager: 1,
      offset: 0,
      singerList: {
        id: "",
        name: "",
        img1v1Url: "",
      },
      songs: [],
      songInfo: {
        more: true,
        total: 0,
      },
    };
  },
  methods: {
    async getSingerAll(id, offset) {
      let result = await reqSingerAll(id, offset);
      if (result.code === 200) {
        this.songs = result.songs;
        this.songInfo.more = result.more;
        this.songInfo.total = result.total;
      } else {
        this.$message({
          type: "warning",
          message: "歌手详情请求失败",
        });
      }
    },
    // 点击每页改变的回调，上一页下一页
    handleCurrentChange(pagers = 1) {
      this.pager = pagers;
      this.offset = (pagers - 1) * 30;
      const { id } = this.singerList;
      this.getSingerAll(id, this.offset);
    },
    // 跳转到播放器的回调
    toMusicPlayer(id) {
      this.$router.push({
        path: "/musicPlayer",
        query:{id}
      });
    },
  },
  mounted() {
    const { offset } = this;
    const { id } = this.$route.query;
    this.singerList = Object.assign(this.$route.query);
    this.getSingerAll(id, offset);
  },
};
</script>

<style lang="less" scoped>
#classifyDetails-wapper {
  .page-header {
    img {
      width: 180px;
    }
  }
  ul {
    li:hover {
      background-color: #ecffff;
      cursor: pointer;
    }
  }
  div.block {
    display: flex;
    align-content: center;
    justify-content: center;
    padding-bottom: 20px;
  }
}
</style>