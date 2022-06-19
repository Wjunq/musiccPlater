<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- 洋葱音乐 -->
        <div class="navbar-header">
          <router-link class="navbar-brand" to="/home">洋葱音乐</router-link>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <!-- 首页，搜索等点击 -->
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/home">首 页</router-link>
            </li>
            <li>
              <router-link to="/test">测 试</router-link>
            </li>
            <li>
              <router-link to="/classify">歌手分类</router-link>
            </li>
            <li>
              <router-link to="/transceiver">电 台</router-link>
            </li>
          </ul>
          <!-- 搜索音乐表单 -->
          <form class="navbar-form navbar-left">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="输入音乐名称"
              />
            </div>
            <button type="submit" class="btn btn-default">搜索歌曲</button>
          </form>
          <!-- 登录及其登录完成的展示区 -->
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/login">登 录</router-link>
            </li>
            <!-- 用户头像展示区域 -->
            <li>
              <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              ></el-avatar>
            </li>
            <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >用户名称 <span class="caret"></span
              ></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">退 出</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
      </div>
      <!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="less" scoped>
</style>