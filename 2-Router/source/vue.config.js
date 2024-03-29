//방식1
//defineConfig 미사용 시 hint를 제공해야한다
/** @type {import('@vue/cli-service').ProjectOptions} */
// module.exports = { 
//   /* options */ 
// }

//방식2
//defineConfig 사용 시 intellisence를 지원한다
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  /* options */
})