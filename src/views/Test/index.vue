<template>
  <div class="test">
    <h1>test组件</h1>
    <button @click="handlerTest">测试</button>

  </div>
</template>

<script>
import { reqSingerAll } from "@/api";

export default {
  name: "Test",
  data() {
    return {
      singerCheck: {
        type: "-1",
        area: "-1",
        offset: 0,
        more: true,
      },
    };
  },
  methods: {
    async handlerTest() {
      let result = await reqSingerAll();
      console.log(result);
    },

  },
};
</script>

<style lang="less" scoped>
.test {
  background-color: red;
  h1 {
    padding: 20px;
  }
}
</style>