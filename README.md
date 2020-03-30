##project_travel 学习笔记

### 介绍
使用Vue搭建移动端旅游网站

### 组件使用
- 轮播插件 [vue-awesome-swiper@2.6.7](https://github.com/surmon-china/vue-awesome-swiper/tree/v2.6.7)

### 样式笔记
- 自动撑开
    ```
    display: flex
    flex: 1
    ```
- 宽度固定，高度按宽高比设置
   ```
   overflow hidden
   width 100%
   height 0
   padding-bottom 31.25% 
  ```     

    


###错误
- Maximum call stack size exceeded，页面引用一个组件，和页面的name重复就会出现这个问题


