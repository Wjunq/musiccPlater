"use strict";(self["webpackChunkmusicplayer"]=self["webpackChunkmusicplayer"]||[]).push([[257],{257:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"transceiver-wapper"}},[a("div",{attrs:{id:"banner-wapper"}},[a("el-carousel",{attrs:{height:"350px",direction:"vertical",autoplay:!1}},e._l(e.djBanner,(function(e){return a("el-carousel-item",{key:e.targetId},[a("img",{attrs:{src:e.pic,alt:""}})])})),1)],1)])},n=[],s=a(6633),i={name:"Transceiver",data(){return{djBanner:[]}},methods:{async getTransceiverBanner(){let e=await(0,s.zR)();200===e.code?this.djBanner=e.data:this.$message({message:"轮播图数据请求失败",type:"warning"})}},mounted(){this.getTransceiverBanner()}},c=i,u=a(1001),l=(0,u.Z)(c,r,n,!1,null,"19c7fca0",null),d=l.exports}}]);
//# sourceMappingURL=257.72da248e.js.map