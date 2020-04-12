<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import axios from "axios";
  import HomeHeader from "../components/home/Header";
  import HomeSwiper from "../components/home/Swiper";
  import HomeIcons from "../components/home/Icons";
  import HomeRecommend from "../components/home/Recommend";
  import HomeWeekend from "../components/home/Weekend";

  export default {
    name: "Home",
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend,
    },
    data() {
      return {
        lastCity: '',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: [],
      };
    },
    methods: {
      getHomeInfo() {
        axios.get("/api/index.json?city=" + this.city).then(this.getHomeInfoSucc);
      },
      getHomeInfoSucc(res) {
        res = res.data;
        if (res.success && res.data) {
          const data = res.data;
          this.swiperList = data.swiperList;
          this.iconList = data.iconList;
          this.recommendList = data.recommendList;
          this.weekendList = data.weekendList;
        }
      },
    },
    computed: {
      ...mapState(['city'])
    },
    created() {
      this.getHomeInfo();
    },
    /*
      使用keep-alive后只能调用activated钩子函数，当城市与内存中的城市不同时，就重新调用axios获取新数据
    */
    activated() {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city
        this.getHomeInfo()
      }
    }
  };
</script>

<style scoped></style>
