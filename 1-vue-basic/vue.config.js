const { defineConfig } = require('@vue/cli-service')
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: path.resolve(__dirname, "./dist"),
  publicPath: '' //dist static 파일 상대경로로 수정
})