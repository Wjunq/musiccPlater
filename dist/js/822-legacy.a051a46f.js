"use strict";(self["webpackChunkmusicplayer"]=self["webpackChunkmusicplayer"]||[]).push([[822],{9822:function(t,e,s){s.r(e),s.d(e,{default:function(){return h}});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"classifyDetails-wapper"}},[s("div",{staticClass:"page-header"},[s("img",{attrs:{src:t.singerList.img1v1Url,alt:""}}),s("h1",[t._v(t._s(t.singerList.name))])]),s("ul",{staticClass:"list-group"},t._l(t.songs,(function(e){return s("li",{key:e.id,staticClass:"list-group-item glyphicon glyphicon-music",on:{click:function(s){return t.toMusicPlayer(e.id)}}},[t._v(" "+t._s(e.name)+" --- 作者："),t._l(e.ar,(function(e){return s("span",{key:e.id},[t._v(t._s(e.name)+";")])}))],2)})),0),s("div",{staticClass:"block"},[s("el-pagination",{attrs:{"page-size":t.songs.length,layout:"total, prev, pager, next",total:t.songInfo.total,background:""},on:{"current-change":t.handleCurrentChange}})],1)])},i=[],r=s(7906),a=s(6198),o=s(6633),l={name:"classifyDetails",data:function(){return{pager:1,offset:0,singerList:{id:"",name:"",img1v1Url:""},songs:[],songInfo:{more:!0,total:0}}},methods:{getSingerAll:function(t,e){var s=this;return(0,a.Z)((0,r.Z)().mark((function n(){var i;return(0,r.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,o.In)(t,e);case 2:i=n.sent,200===i.code?(s.songs=i.songs,s.songInfo.more=i.more,s.songInfo.total=i.total):s.$message({type:"warning",message:"歌手详情请求失败"});case 4:case"end":return n.stop()}}),n)})))()},handleCurrentChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.pager=t,this.offset=30*(t-1);var e=this.singerList.id;this.getSingerAll(e,this.offset)},toMusicPlayer:function(t){this.$router.push({path:"/musicPlayer",query:{id:t}})}},mounted:function(){var t=this.offset,e=this.$route.query.id;this.singerList=Object.assign(this.$route.query),this.getSingerAll(e,t)}},u=l,c=s(1001),g=(0,c.Z)(u,n,i,!1,null,"47b3927c",null),h=g.exports}}]);
//# sourceMappingURL=822-legacy.a051a46f.js.map