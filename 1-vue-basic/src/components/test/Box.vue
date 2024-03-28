<!-- state, Props
vue 에 관련된 무엇인가를 적용하기 위해서는 v-bind 라는 것을 이용해야합니다.
html tag 에 인라인으로 스타일을 적용할 때는 v-bind:style 또는 v-bind 를 생략한 :style 를 이용합니다. -->

<template>
  <!--<div v-bind:style="{color: '#ebebeb'}">Box Component1</div>
  <div :style="{color: 'red'}">Box Component2</div>
  <div v-bind:style="{width:width+'px', height:height+'px'}">Box Component3</div>
  <div class="box">box</div>
  <div class="box2">box2</div>
  <div class="box3">box3</div>
  <div class="box4">box4</div>
  <div v-bind:class="[state, props]"></div>
  <div :class="[state, props]"></div>-->
  <div
    v-bind:class="['box', color]"
    v-bind:style="{width: width + 'px', height: height + 'px'}">
  </div>
</template>

<script>
export default {
  props: {
    color:{type:String, default:""}
  },
  //data 안의 모든 값은 Proxy 로 변경에 대한 처리가 observable 하게 이루어진다.
  data() {
    return {
      width: 40,
      height: 80
    };
  }
};
</script>

<style scoped>
.box{border:1px solid #000}
.box2{border:1px solid #096ff0}
.box3{border:1px solid #bbb}
.box4{border:1px solid #d1d1d1}
.blue{background:blue}
.yellow{background:yellow}
.purple{background:purple}
.green{background:green}
</style>

