<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
  import axios from "axios";
  import CityHeader from "../components/city/Header";
  import CitySearch from "../components/city/Search";
  import CityList from "../components/city/List";
  import CityAlphabet from "../components/city/Alphabet";

  export default {
    name: "City",
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
    data() {
      return {
        hotCities: [],
        cities: {},
        letter: ''
      };
    },
    methods: {
      getCityInfo() {
        axios.get("/api/city.json").then(res => {
          const data = res.data.data;
          if (res.data.success && data) {
            this.hotCities = data.hotCities;
            this.cities = data.cities;
          }
        });
      },
      handleLetterChange(letter) {
        this.letter = letter
      }
    },
    created() {
      this.getCityInfo();
    }
  };
</script>

<style scoped lang="stylus"></style>
