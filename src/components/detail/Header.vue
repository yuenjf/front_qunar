<template>
  <div>
    <router-link
      tap="div"
      to="/"
      class="header-abs"
      v-show="showAbs"
    >
      <span class="iconfont header-abs-back-icon">&#xe7eb;</span>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <span class="iconfont header-fixed-back-icon">&#xe7eb;</span>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailHeader",
    data() {
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll() {
        const top = document.documentElement.scrollTop
        if (top > 60) {
          let opacity = top / 140
          opacity = opacity > 1 ? 1 : opacity // 大于 1 就等于 1
          this.opacityStyle = {
            opacity
          }
          this.showAbs = false
        } else {
          this.showAbs = true
        }
      }
    },
    activated() {
      window.addEventListener('scroll', this.handleScroll)
    },
    deactivated() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped lang="stylus">
  @import '~styles/variables.styl'
  .header-abs
    position absolute
    top .1rem
    left .1rem
    width .8rem
    height .8rem
    line-height .8rem
    text-align center
    border-radius .4rem
    background rgba(0, 0, 0, .5)

    .header-abs-back-icon
      color #fff
      font-size .4rem

  .header-fixed
    z-index 98
    position fixed
    top 0
    right 0
    left 0
    height $headerHeight
    line-height $headerHeight
    background $bgColor
    text-align center
    font-size .32rem
    color #fff

    .header-fixed-back-icon
      position absolute
      width .64rem
      top 0
      left 0
      font-size .4rem
      color #fff
</style>
