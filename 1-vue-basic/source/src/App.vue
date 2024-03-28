<!-- vue 파일들은 .vue 라는 확장자를 가지고 아래와 같은 기본적인 구성으로 이루어집니다. 
  tailwind test
<template>
  <div class="justify-center flex bg-blue-300 items-center h-screen">
    <div class="text-4xl">
      Hello Welcome to Tailwind Css
      <h2>test 2</h2>
    </div>
  </div>
</template>-->

<template>
  <Header/>
  <div class="wrap">
    <Menu/>
    <Content/>
  </div>
</template>

<script>
//Component 구성
import Header from "./components/layout/Header"
import Menu from "./components/layout/Menu"
import Content from "@/components/layout/Content" //./는 상대경로, @는 절대경로(src아래)

export default {
  name:"app",
  components:{ //가져온 component 들을 등록, components 에 등록을 해줘야 vue component 로 인식
    Header,
    Menu,
    Content
  }
};
</script>

<style scoped> /*scoped란 , App.vue 안에 있는 태그에만 적용*/
.wrap{display:flex;}
</style>