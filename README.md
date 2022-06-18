<<<<<<< HEAD
# musicPalyer

#### 介绍
真实网易云接口

#### 软件架构
软件架构说明


#### 安装教程

1.  xxxx
2.  xxxx
3.  xxxx

#### 使用说明

1.  xxxx
2.  xxxx
3.  xxxx

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request


#### 特技

1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
=======
# 准备工作以及安装的组件和包
```shell
#  安装less配置
npm i less-loader -D
#  安装axios
npm i axios
#  安装nprogress
npm i nprogress
#  安装Element UI
npm i element-ui -S
# 按需使用Element UI
npm install babel-plugin-component -D
# 安装swiper5
npm i swiper@5
# 安装router（vue2）
npm i vue-router@3
```

# 期间遇到的问题
1. 在使用Elment UI按需使用
>解决方式
```shell
# 按需使用Element UI
npm install babel-plugin-component -D
```
* 将main.js文件中的所有关于Element UI删除
* 在[babel.config.js]文件中添加
```js
"plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]d
* 在main.js重新改写Element UI使用方法
```js
// 按需引用
import {
  Message
} from 'element-ui';

// 在原型上都能使用message方法
Vue.prototype.$message = Message

```
2. 在获取数据的时候，写的参数不对
>在query的第一个参数写?后面的写&
```js
/artist/songs?id=${id}&limit=30
```
3. 在使用this.$router传query的时候，传递不过去
>query必须是一个对象
```js
toMusicPlayer(id) {
this.$router.push({
  path: "/musicPlayer",
  query:{id}
});
```


## 忘记的
>bug : 在初次挂载的时候，arr没有数据，但是可以便利，出现bug，
解决方法：
  `watch `配合 `$nextTick(()=>{})` 
```js
watch:{
  banners(){
    this.$nextTick(()=>{
      new Swiper('.swiper-container', {
      spaceBetween: 30, //每一屏之间的距离
      autoplay: { //自动轮播配置
        delay: 2500, //轮播间隔
        disableOnInteraction: false, //鼠标操作后，是否禁用自动轮播
      },
      pagination: {
        el: '.swiper-pagination', //小圆点容器
        clickable: true, //小圆点是否可以点击
      },
      navigation: {
        nextEl: '.swiper-button-next', //下一张按钮的选择器
        prevEl: '.swiper-button-prev', //上一张按钮的选择器
      },
    });
    })
  }
}
```
>$router.push的使用
```js
this.$router.push({
    path:'/classify/classifyDetails',
    query:singerDetail
})
```
>Object.assign
```js
let obj1 = {a:1,b:2}
			let obj2 = {c:3,d:4}
			let obj3 = {e:5,f:6}
			let obj4 = {x:7,y:8}

			// obj1 = {...obj1,...obj2,...obj3,...obj4}

			Object.assign(obj1,obj2,obj3,obj4,{x:''})

			console.log(obj1)
```


# 巴掌的教训
1. 写完router-link 一定要写to和router-view
