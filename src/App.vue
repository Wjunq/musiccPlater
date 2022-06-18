<template>
  <div class="app">
    <Header v-show="$route.path !== '/login'"/>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "app",
};
</script>

<style lang="less" scoped>

</style>