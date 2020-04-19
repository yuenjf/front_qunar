<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
  </div>
</template>

<script>
  import DetailBanner from '../components/detail/Banner'
  import DetailHeader from '../components/detail/Header'

  export default {
    name: "Detail",
    components: {
      DetailBanner,
      DetailHeader
    }
  }
</script>

<style scoped lang="stylus">

</style>
