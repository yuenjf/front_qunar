export default {
  changeCity(state, city) {
    state.city = city
    //  使用localStorge保存城市
    try {
      if (localStorage.city) {
        localStorage.city = city
      }
    } catch (e) {
    }
  }
}
