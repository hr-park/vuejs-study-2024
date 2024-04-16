<template>
  <div id="app">
    <section class="todoapp">
      <Header @insertTodo="insertTodo" /> <!-- @insertTodo 라는 custome event를 등록해준다. -->
      <Todo
        :todos="todos"
        @removeTodo="removeTodo"
        @updateDone="updateDone"
        @updateTodo="updateTodo"/> <!-- 리스트를 그리는 쪽은 app.vue가 아닌 Todo.vue이기 때문에 props로 todos state를 넘긴다. -->
      <Footer
      :filterType="filterType"
      :size="filteredList.length"
      @onFilterType="handleFilterType" />
    </section>
  </div>
</template>

<script>
import "./assets/css/main.css";

//Component 구성
import Header from "./components/layout/Header"
import Todo from "./components/layout/Todo"
import Footer from "@/components/layout/Footer" //./는 상대경로, @는 절대경로(src아래)

export default {
  name: "app",
  components: {
    Header,
    Todo,
    Footer
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          text: "첫번째 할일",
          isDone: false
        },
        {
          id: 2,
          text: "test",
          isDone: true
        },
        {
          id: 3,
          text: "blahhh",
          isDone: false
        }
      ],
      filterType:"All"
    };
  },
  //methods는 data와 같은 레벨에서 선언되어야함, 내부에 정의되면 안됨
  methods: {
    insertTodo(text) {
      console.log('22222');
      this.todos = [
        ...this.todos,
        {
          id: new Date().getTime(),
          text,
          isDone: false
        }
      ];
      console.log(this.todos);
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    updateDone(id) {
      const todos = [...this.todos];
      const todo = todos.find(todo => todo.id === id);

      if (todo) {
        todo.isDone = !todo.isDone;
        this.todos = todos;
      }
    },
    updateTodo({id, text}){
      const todos = [...this.todos];
      const todo = todos.find(todo => todo.id === id);

      if(todo){
        todo.text = text;
        this.todos = todos;
      }
    },
    handleFilterType(type){
      this.filterType = type
    }
  },
  computed:{
    filteredList (){
      switch(this.filterType){
        case "All":{
          return this.todos
        }
        case "Active":{
          return this.todos.filter((todo)=> ! todo.isDone)
        }
        case "Completed":{
          return this.todos.filter((todo) => todo.isDone)
        }
        default:{
          return []
        }
      }
    }
  }
};
</script>