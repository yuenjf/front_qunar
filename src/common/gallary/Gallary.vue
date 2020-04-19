<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="gallary-img"
               :src="item"/>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommonGallary",
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          // 解决gallary隐藏再显示时宽度计算问题，自己或父级元素发生DOM变化时进行刷新
          observeParents: true,
          observer: true

        }
      }
    },
    props: {
      imgs: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      handleGallaryClick() {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .container >>> .swiper-container
    overflow inherit

  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    background #000

    .wrapper
      /*overflow hidden*/
      width 100%
      height 0
      padding-bottom 100%

      .gallary-img
        width 100%

      .swiper-pagination
        position absolute
        color #fff
        bottom -1rem
</style>
