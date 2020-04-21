<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
  import DetailBanner from '../components/detail/Banner'
  import DetailHeader from '../components/detail/Header'
  import DetailList from '../components/detail/List'

  export default {
    name: "Detail",
    data() {
      return {
        list: [{
          title: '成人票',
          children: [{
            title: '成人三馆联票',
            children:[{
              title: '成人三馆联票 - 某一连锁店'
            }]
          },{
            title: '成人五馆联票'
          },]
        }, {
          title: '学生票'
        }, {
          title: '儿童票'
        }, {
          title: '特惠票'
        },]
      }
    },
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    }
  }
</script>

<style scoped lang="stylus">
  .content
    height 50rem
</style>
