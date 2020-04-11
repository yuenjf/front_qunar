<template>
  <ui class="list">
    <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
    >
      {{item}}
    </li>
  </ui>
</template>

<script>
  export default {
    name: "CityAlphabet",
    data() {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    props: {
      cities: Object,
    },
    computed: {
      letters() {
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    },
    methods: {
      handleLetterClick(e) {
        this.$emit('change', e.target.innerText)
      },
      handleTouchStart() {
        this.touchStatus = true
      },
      handleTouchMove(e) {
        /*
        * 性能优化：
        *  1.const startY = this.$refs['A'][0].offsetTop 值固定，每次执行方法都执行，浪费性能，卸载updated里面
        *  2.函数节流，通过setTimeout限制函数执行的次数
        * */
        if (this.touchStatus) {
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            // const startY = this.$refs['A'][0].offsetTop
            const touchY = e.touches[0].clientY - 79
            const index = Math.floor((touchY - this.startY) / 20)
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index])
            }
          }, 16)
        }
      },
      handleTouchEnd() {
        this.touchStatus = false
      }
    },
    updated() {
      this.startY = this.$refs['A'][0].offsetTop
    }
  };
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
