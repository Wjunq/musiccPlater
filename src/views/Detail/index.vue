<template>
  <div>
    {{songerInfo}}
   <!-- <h1>{{songInfo.name}}</h1>
   <img :src="songerInfo.picUrl" alt=""> -->
  </div>
</template>

<script>
import { reqSingerAll } from "@/api";
export default {
  name: "Detail",
  data() {
    return {
      songerInfo: {
        id: "",
        name: "",
        picUrl: "",
      },
    };
  },
  methods: {
    async getSongerAll(id) {
      let result = await reqSingerAll(id);
      if (result.code === 200) {
        this.$message({
          type: "success",
          message: "数据成功",
        });
      } else {
        this.$message({
          type: "warning",
          message: "数据失败",
        });
      }
    },
  },
  mounted() {
    const songerObj = localStorage.getItem("songerObj");
    if (songerObj != null) {
      let SongerObj = JSON.parse(localStorage.getItem("songerObj"));
      this.songerInfo = Object.assign(SongerObj);
      console.log(obj);
    } else {
      this.$bus.$on("send-id", (art) => {
        const { id, picUrl, name } = art;
        const songInfo = { id, picUrl, name };
        this.songerInfo = Object.assign(songInfo);
        localStorage.setItem("songerObj", JSON.stringify(songInfo));
        this.getSongerAll(id);
      });
    }
  },
  beforeDestroy() {
    this.$off("send-id");
  },
  watch:{
    songerInfo:{
      deep:true,
      handler(){
        this.getSongerAll()
      }
    }
  }
};
</script>