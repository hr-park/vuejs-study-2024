<template>
  <div>
    <h2>Webtoon</h2>
    <!-- v-if 는 조건에 해당하지 않다면 렌더링을 안함, True 라는 태그는 렌더링이 되고 False 태그는 렌더링 안됨 -->
    <div v-if="true">True</div>
    <div v-if="false">False</div>
    <!-- v-else 앞의 조건이 성립하지 않으면 else 조건 동작 -->
    <div v-if="false">True</div>
    <div v-else>False</div>
    <!-- v-show :: v-if와 결과는 같지만 동작하는 방식이 다름, v-if의 경우 조건이 성립하지 않는 경우 태그 자체를 렌더링 하지 않지만 v-show는 렌더링은 하되 display:none 처리 -->
    <div v-show="true">True</div>
    <div v-show="false">False</div>

    <ul class="item_list">
      <li class="item" v-for="(item, idx) in items" :key="{idx}">
        <a :href="item.link" target="_blank">
          <img :src="item.img" :alt="item.name">
          <span class="tit">제목 : {{item.name}}</span>
        </a>
        <span class="tag" v-if="item.isUpdate">N</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    items:{type:Array, default:() => []}
  }
};
</script>

<style scoped>
h2 {
  text-align: center;
}

a {
  list-style: none;
  text-decoration: none;
}

li {
  list-style: none;
}

.wrap {
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
}

.item_list {
  width:500px
}

.item {
  position: relative;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 25px;
}

.tit {
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  padding: 20px 15px;
}

img {
  width: 100%;
  background: #ebebeb;
  border-radius: 4px;
}

.tag {
  position: absolute;
  left: 10px;
  top: 10px;
  padding: 5px 30px;
  color: #fff;
  border-radius: 4px;
  background: #fc2332;
  font-weight: bold;
}
</style>

