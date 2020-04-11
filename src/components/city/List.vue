<template>
  <div class="list" ref="wrapper">
    <!--  为了符合better-scroll插件格式  -->
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <!--   对象使用vfor，嵌套使用vfor   -->
      <div class="area"
           v-for="(item, key) of cities"
           :key="key"
           :ref="key"
      >
        <div class="title border-topbottom">{{ key }}</div>
        <ul class="item-list">
          <li
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
          >
            {{ innerItem.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll";

  export default {
    name: "CityList",
    props: {
      hotCities: Array,
      cities: Object,
      letter: String
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper);
    },
    watch: {
      //  使用watch监听letter的变化，通过better-scroll组件的scrollToElement方法改变对应的显示区域
      letter() {
        if (this.letter) {
          const element = this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
        }
      }
    }
  };
</script>

<style scoped lang="stylus">
  @import '~styles/variables.styl'
  /*控制页面1px边框的颜色*/
  .border-topbottom
    &:before
      border-color #ccc

    &:after
      border-color #ccc

  .border-bottom
    &:before
      border-color #ccc

  .list
    position absolute
    overflow hidden
    top 1.58rem
    right 0
    bottom 0
    left 0

    .title
      line-height .44rem
      background #eee
      padding-left .2rem
      color #666
      font-size .26rem

    .button-list
      overflow hidden
      /* 预留滚动条位置 */
      padding .1rem .6rem .1rem .1rem

      .button-wrapper
        width 33.3%
        float left

        .button
          padding .1rem 0
          margin .1rem
          border 1px solid #ccc
          border-radius .06rem
          text-align center

    .item-list
      .item
        padding 0 .2rem
        line-height .76rem
        color #666
</style>
