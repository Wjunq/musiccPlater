<template>
<!-- 
未完善的功能：
点击下一页和上一页之后，要将滑轮滚到最上面
 -->
  <div id="main-wapper">
    <div v-show="$route.fullPath === '/classify'">
      <!-- 标题 -->
      <div class="page-header">
        <h1><i class="glyphicon glyphicon-user"></i>歌手分类</h1>
      </div>
      <!-- 筛选歌手属性 -->
      <div>
        <span style="padding-right: 20px"><strong>歌手分类:</strong> </span>
        <el-radio-group v-model="singerCheck.type" style="padding-right: 40px">
          <el-radio-button label="-1">全部</el-radio-button>
          <el-radio-button label="1">男歌手</el-radio-button>
          <el-radio-button label="2">女歌手</el-radio-button>
          <el-radio-button label="3">乐队</el-radio-button>
        </el-radio-group>
        <span style="padding-right: 20px"><strong>地区:</strong></span>
        <el-radio-group v-model="singerCheck.area">
          <el-radio-button label="-1">全部</el-radio-button>
          <el-radio-button label="7">华语</el-radio-button>
          <el-radio-button label="96">欧美</el-radio-button>
          <el-radio-button label="8">日本</el-radio-button>
          <el-radio-button label="16">韩国</el-radio-button>
          <el-radio-button label="0">其他</el-radio-button>
        </el-radio-group>
      </div>
      <!-- 用于展示歌手列表-->
      <div class="row">
        <div class="col-sm-6 col-md-4" v-for="art in artists" :key="art.id">
          <div class="thumbnail">
            <img
              :src="art.img1v1Url"
              :alt="art.name"
              @click="handlerToDetail(art.name,art.img1v1Url,art.id)"
            />
            <div class="caption">
              <h3>{{ art.name }}</h3>
            </div>
          </div>
        </div>
      </div>
      <!-- 页码切换 -->
      <nav>
        <el-button type="success" round @click="handlerOlder">上一页</el-button>
        <el-button type="success" round @click="hadlerNext">下一页</el-button>
      </nav>
    </div>

    <!--  -->
    <router-view/>
  </div>
</template>

<script>
import { reqSingerList } from "@/api";
export default {
  name: "Main",
  data() {
    return {
      artists: [],
      singerCheck: {
        type: "-1",
        area: "-1",
        offset: 0,
        more: true,
      },
    };
  },
  mounted() {
    this.getSingerList();
  },
  methods: {
    async getSingerList() {
      let result = await reqSingerList(this.singerCheck);
      if (result.code === 200) {
        this.artists = result.artists;
        this.singerCheck.more = result.more;
      } else {
        this.$message({
          type: "warning",
          message: "歌手列表数据加载错误",
        });
      }
    },
    // 处理上一页按钮的回调
    handlerOlder() {
      if (this.singerCheck.offset === 0) {
        this.$message({
          type: "warning",
          message: "没有数据了",
        });
      } else {
        this.singerCheck.offset -= 30;
      }
    },
    // 处理下一页按钮的回调
    hadlerNext() {
      if (this.singerCheck.more) {
        this.singerCheck.offset += 30;
      } else {
        this.$message({
          type: "warning",
          message: "没有数据了",
        });
      }
    },
    // 跳转歌手主页的回调
    handlerToDetail(name,img1v1Url,id) {
      const singerDetail = {name,img1v1Url,id}
      this.$router.push({
        path:'/classify/classifyDetails',
        query:singerDetail
      })
    },
  },
  watch: {
    singerCheck: {
      deep: true,
      handler() {
        this.getSingerList();
      },
    },
  },
};
</script>

<style lang="less" scoped>
#main-wapper {
  width: 1800px;
  margin: 0 auto;
  padding-top: 20px;
  div.el-pagination {
    padding-bottom: 20px;
  }
  .page-header {
    i {
      padding-right: 10px;
    }
  }
  img {
    width: 875px;
    height: 560px;
  }
  nav {
    display: flex;
    justify-content: space-around;
    padding-bottom: 20px;
  }
}
</style>