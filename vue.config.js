const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 选项...
  lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  chainWebpack(config) {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('styles', resolve('src/assets/styles'))
  }
};

