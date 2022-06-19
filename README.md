<<<<<<< HEAD
# musicPalyer

#### 介绍
真实网易云接口

#### 软件架构
  Bootstrap + vue2 + Element UI

#### 安装教程
1.  npm i 

#### 使用说明
1.  npm run serve

# 项目中的问题和制作步骤

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

4. 路由跳转的时候，将滚轮置顶
   * 在new router的时候里面加上
    ```js
    const router = new VueRouter({
    mode: 'history',
    routes: [
      ...
      ],
      scrollBehavior(){
        return {y:0}
      }
    })
    ```

5. 在点击下一页，路由不跳转，只是vue重现渲染
    >直接控制DOM节点
    ```js
    document.documentElement.scrollTop = 0;
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
2. 在组件中使用@click等都是自定义事件，所以要想使用原生的需要加 .native

