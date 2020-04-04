<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of WeekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" :alt="item.title" />
        </div>
        <div class="item-info border-bottom">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      WeekendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg",
          title: "清远周边逛",
          desc:
            "人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？",
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg",
          title: "清远周边逛",
          desc:
            "人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？",
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg",
          title: "清远周边逛",
          desc:
            "人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？",
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

.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 33.9%

  .item-img
    width 100%

.item-info
  flex 1
  padding .1rem
  min-width 0
  margin-bottom .24rem

  .item-title
    line-height .54rem
    font-size .32rem
    ellipsis()

  .item-desc
    line-height .4rem
    color #616161
    ellipsis()
</style>
