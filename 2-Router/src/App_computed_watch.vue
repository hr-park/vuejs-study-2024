<!--
  Computed :: 복잡한 연산 결과 캐싱, 
  Watch : 언제 변하는지 예측이 어려울때 많이 사용
-->
<template>
  <div id="app">
    {{ message }}
    <h2>뒤집힌 message</h2>
    <!--{{ message.split("").reverse().join("") }}-->
    {{ reversedMassage }}

    <input v-model="firstname" />
    <input v-model="lastname" />

    <h2>full name</h2>
    <span>{{ fullname }}</span>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      message: 'Hello Vue!',
      firstname:'',
      lastname:'',
      //fullname:'',
    };
  },
  computed:{
    reversedMassage(){
      return this.message.split("").reverse().join("")
    },
    fullname(){
      return `${this.firstname} ${this.lastname}`
    }
  },
  /*watch:{
    firstname(val){
      //console.log('firstname', val)
      this.fullname = `${val} ${this.lastname}`
    },
    lastname(val){
      //console.log('lastname', val)
      this.fullname = `${this.firstname} ${val}`
    }
  }*/
}
</script>

<style scope>

</style>
