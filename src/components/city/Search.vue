<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content"
         ref="wrapper"
         v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
            v-for="item of list"
            :key="item.id"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom"
            v-show="hasNoData"
        >
          没有找到"{{keyword}}"相关城市
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "CitySearch",
    data() {
      return {
        keyword: '',
        list: [],
        timer: null
      }
    },
    props: {
      cities: Object
    },
    computed: {
      hasNoData() {
        return !this.list.length
      }
    },
    watch: {
      keyword() {
        //  节流函数
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword) {
          this.list = []
          return
        }
        this.timer = setTimeout(() => {
          //  先循环，在遍历出城市对象，与keyword匹配的就push进result
          const result = []
          for (let i in this.cities) {
            this.cities[i].forEach(value => {
              if (value.name.indexOf(this.keyword) > -1 ||
                value.spell.indexOf(this.keyword) > -1) {
                result.push(value)
              }
            })
          }
          this.list = result
        }, 100)
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
    }
  }
</script>

<style scoped lang="stylus">
  @import '~styles/variables.styl'
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor

    .search-input
      box-sizing border-box
      width 100%
      text-align center
      height .62rem
      line-height .62rem
      border-radius .06rem
      color #666
      padding 0 .1rem

  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.58rem
    right 0
    bottom 0
    left 0
    background: #ccc;

    .search-item
      line-height .62rem
      padding-left .2rem
      background #fff
      color #666

</style>
