const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  chainWebpack(config) {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("styles", resolve("src/assets/styles"))
      .set("common", resolve("src/common"));
  },
};
