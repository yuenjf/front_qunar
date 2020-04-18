<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="ShowSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt=""/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    props: {
      list: Array,
    },
    data() {
      return {
        swiperOption: {
          pagination: ".swiper-pagination",
          loop: true,
        },
      };
    },
    computed: {
      ShowSwiper() {
        //  解决轮播初始不是第一张图片问题，数组有数据才创建轮播，空数组是不创建
        return this.list.length;
      },
    },
  };
</script>

<style scoped lang="stylus">
  /* 使用第三发组件是样式无法渲染，使用穿透（>>>）,使样式突破scoped限制 外层 >>> 第三方组件，*/
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff

  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.25%

    .swiper-img
      width 100%
</style>
