<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <span class="iconfont back-icon">&#xe7eb;</span>
      </div>
    </router-link>
    <div class="header-title">境内</div>
  </div>
</template>

<script>
  export default {
    name: "CityHeader"
  }
</script>

<style scoped lang="stylus">
  @import '~styles/variables.styl'
  .header
    position relative
    height $headerHeight
    line-height $headerHeight
    background $bgColor
    text-align center
    font-size .32rem
    color #fff

    .back-icon
      position absolute
      width .64rem
      top 0
      left 0
      font-size .4rem
      color #fff
</style>
