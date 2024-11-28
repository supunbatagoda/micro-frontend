const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    port: 8081,
  },
  configureWebpack: {
    output: {
      libraryTarget: "system",
      filename: "js/purchase.js",
    },
  },
  transpileDependencies: ["vuetify"],
});
