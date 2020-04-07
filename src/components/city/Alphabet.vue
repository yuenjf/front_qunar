<template>
  <ui class="list">
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">C</li>
    <li class="item">D</li>
    <li class="item">E</li>
    <li class="item">F</li>
    <li class="item">G</li>
    <li class="item">H</li>
  </ui>
</template>

<script>
  export default {
    name: "CityAlphabet"
  }
</script>

<style scoped lang="stylus">
  @import '~styles/variables.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    list-style none
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    text-align center

    .item
      height .4rem
      color $bgColor

</style>
