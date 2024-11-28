const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    port: 8082,
  },
  configureWebpack: {
    output: {
      libraryTarget: "system",
      filename: "js/byondcloud.js",
    },
  },
  transpileDependencies: ["vuetify"],
});
