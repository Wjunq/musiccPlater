"use strict";(self["webpackChunkmusicplayer"]=self["webpackChunkmusicplayer"]||[]).push([[822],{9822:function(t,s,e){e.r(s),e.d(s,{default:function(){return u}});var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"classifyDetails-wapper"}},[e("div",{staticClass:"page-header"},[e("img",{attrs:{src:t.singerList.img1v1Url,alt:""}}),e("h1",[t._v(t._s(t.singerList.name))])]),e("ul",{staticClass:"list-group"},t._l(t.songs,(function(s){return e("li",{key:s.id,staticClass:"list-group-item glyphicon glyphicon-music",on:{click:function(e){return t.toMusicPlayer(s.id)}}},[t._v(" "+t._s(s.name)+" --- 作者："),t._l(s.ar,(function(s){return e("span",{key:s.id},[t._v(t._s(s.name)+";")])}))],2)})),0),e("div",{staticClass:"block"},[e("el-pagination",{attrs:{"page-size":t.songs.length,layout:"total, prev, pager, next",total:t.songInfo.total,background:""},on:{"current-change":t.handleCurrentChange}})],1)])},n=[],a=e(6633),r={name:"classifyDetails",data(){return{pager:1,offset:0,singerList:{id:"",name:"",img1v1Url:""},songs:[],songInfo:{more:!0,total:0}}},methods:{async getSingerAll(t,s){let e=await(0,a.In)(t,s);200===e.code?(this.songs=e.songs,this.songInfo.more=e.more,this.songInfo.total=e.total):this.$message({type:"warning",message:"歌手详情请求失败"})},handleCurrentChange(t=1){this.pager=t,this.offset=30*(t-1);const{id:s}=this.singerList;this.getSingerAll(s,this.offset)},toMusicPlayer(t){this.$router.push({path:"/musicPlayer",query:{id:t}})}},mounted(){const{offset:t}=this,{id:s}=this.$route.query;this.singerList=Object.assign(this.$route.query),this.getSingerAll(s,t)}},l=r,o=e(1001),g=(0,o.Z)(l,i,n,!1,null,"47b3927c",null),u=g.exports}}]);
//# sourceMappingURL=822.b6f2e3a6.js.map