<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" :alt="item.title" />
        <div class="item-info border-bottom">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1603/3c/3c514c20a740128b90.water.jpg_200x200_c7102a23.jpg",
          title: "南沙百万葵园",
          desc: "百万葵花，邀你来赏！",
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1603/3c/3c514c20a740128b90.water.jpg_200x200_c7102a23.jpg",
          title: "南沙百万葵园",
          desc: "百万葵花，邀你来赏！",
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1603/3c/3c514c20a740128b90.water.jpg_200x200_c7102a23.jpg",
          title: "南沙百万葵园",
          desc: "百万葵花，邀你来赏！",
        },
      ],
    };
  },
};
</script>

<style scoped lang="stylus">
@import "~styles/mixins.styl"
.title
  margin-top .2rem
  line-height .8rem
  background #eee
  text-indent .2rem

.item
  overflow hidden
  display flex
  height 1.9rem

  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem

  .item-info
    flex 1
    padding .1rem
    min-width 0

    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()

    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()

    .item-button
      line-height .44rem
      margin-top .16rem
      background #ff93000
      padding 0 .2rem
      border-radius .06rem
      color #fff
</style>
