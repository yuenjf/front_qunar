<template>
  <div class="detail">
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header ></detail-header>
    <detail-list :list="categoryList"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
  import axios from 'axios'
  import DetailBanner from '../components/detail/Banner'
  import DetailHeader from '../components/detail/Header'
  import DetailList from '../components/detail/List'

  export default {
    name: "Detail",
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    },
    data() {
      return {
        sightName: '',
        bannerImg: '',
        gallaryImgs: [],
        categoryList: []
      }
    },
    methods: {
      getDetailInfo() {
        axios.get('/api/detail.json', {
          params: {
            id: this.$route.params.id
          }
        }).then((res) => {
          const data = res.data.data
          if (res.data.ret && data) {
            this.sightName = data.sightName
            this.bannerImg = data.bannerImg
            this.gallaryImgs = data.gallaryImgs
            this.categoryList = data.categoryList
          }
        })
      }
    },
    created() {
      this.getDetailInfo()
    }
  }
</script>

<style scoped lang="stylus">
  .content
    height 50rem
</style>
