<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" :alt="item.desc" />
          </div>
          <p class="icon-title">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOption: {
        autoplay: false,
      },
    };
  },
  computed: {
    /*
        分页算法
        一开始pages[0]=undefined,符合if条件，创建空数组，把第一条到第八条数据放进pages[0]这个数组，
        第九条，pages[1]=undefined，同上
      */
    pages() {
      const pages = [];
      this.list.map((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
};
</script>

<style scoped lang="stylus">
@import '~styles/variables.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  overflow hidden
  width 100%
  height 0
  padding-bottom 50%

.icons
  margin-top .1rem

  .icon
    position relative
    overflow hidden
    float left
    width 25%
    height 0
    padding-bottom 25%

    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      box-sizing border-box
      padding .1rem

      .icon-img-content
        display block
        height 100%
        margin 0 auto

    .icon-title
      position absolute
      left 0
      right 0
      bottom 0
      height .44rem
      line-height .44rem
      text-align center
      color $darkTextColor
      ellipsis()
</style>
