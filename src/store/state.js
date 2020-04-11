//  使用localStorage是建议使用try...catch包裹，某些浏览器用户关闭此功能或隐身模式会直接抛出异常
let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
}

export default {
  city: defaultCity
}
