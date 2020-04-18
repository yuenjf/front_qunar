##project_travel 学习笔记

### 介绍

 使用 vue + vue-cli3.x 搭建移动端旅游网站

### 组件使用

- 轮播插件 [vue-awesome-swiper@2.6.7](https://github.com/surmon-china/vue-awesome-swiper/tree/v2.6.7)
- 局部滚动插件 [better-scroll@1.x](https://github.com/ustbhuangyi/better-scroll)
```
  import BScroll from 'better-scroll'

  mounted() {
    //  options解决better-scroll中click点击无效的问题
    const options = {
    click: true,
    tap: true
    }
    this.scroll = new BScroll(this.$refs.wrapper,options)
  }
```

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

- 使用flex实现垂直居中
```
  display flex
  flex-direction column
  justify-content center
```

- 实现移动端局部滚动(配合better-scroll)
```
  position absolute
  overflow hidden
  top 1.58rem
  right 0
  bottom 0
  left 0
```

- 渐变
```
  background-image linear-gradient(top, rgba(0, 0, 0, 0), 
                   rgba(0, 0, 0, .8))
```

###Vue 笔记
- 使用keep-alive标签提升性能，使用后只能调用调用activated钩子函数
- router-link可以代替li,使用<router-link tag=‘li’ :to='item.id> 代替

###错误

- Maximum call stack size exceeded，页面引用一个组件，和页面的 name 重复就会出现这个问题
