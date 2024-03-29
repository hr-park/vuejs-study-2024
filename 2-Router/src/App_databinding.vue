<!-- Data Binding(v-model) -->
<template>
  <div>
    <h1>데이터 바인딩</h1>
    <input v-model="title">
    <p>{{ title }}</p>
  </div>
  <h2>웹툰</h2>
  <div>
    <input type="checkbox" id="프롬스타" value="프롬스타" v-model="checkedWebtoons">
    <label for="프롬스타">프롬스타</label>
    <input type="checkbox" id="햄스터와그녀" value="햄스터와 그녀" v-model="checkedWebtoons">
    <label for="햄스터와그녀">햄스터와 그녀</label>
    <input type="checkbox" id="위대한로맨스" value="위대한 로맨스" v-model="checkedWebtoons">
    <label for="위대한로맨스">위대한 로맨스</label>
    <input type="checkbox" id="아귀" value="아귀" v-model="checkedWebtoons">
    <label for="아귀">아귀</label>
    <br>
    <span>찜한 웹툰: {{ checkedWebtoons }}</span>
  </div>
  <div>
    <h2>성별</h2>
  <input type="radio" id="male" value="male" v-model="gender">
  <label for="male">남</label>
  <br>
  <input type="radio" id="female" value="female" v-model="gender">
  <label for="female">여</label>
  <br>
  <span>당신의 성별을 알려주세요: {{ gender }}</span>
  </div>
  <div>
    <h2>선호 장르</h2>
  <select v-model="category">
    <option disabled value>선택해주세요</option>
    <option>로맨스</option>
    <option>호러</option>
    <option>스릴러</option>
  </select>
  <span>선택: {{ category }}</span>

  </div>
</template>

<script>
export default {
  data(){
    return{
      title:"",
      checkedWebtoons: [],
      gender:"",
      category:""
    };
  }
}
</script>

<style scope>

</style>
