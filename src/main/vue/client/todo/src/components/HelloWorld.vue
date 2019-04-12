<template>
  <div class="HelloWorld">
    <section>
      <label>Create an Todo</label>
      <b-field>
        <b-input type="text" placeholder="Task" v-model="newTask"></b-input>
        <b-input type="text" placeholder="Description" v-model="newDescription"></b-input>
        <b-button type="is-success" v-on:click="createTodo" id="buttonCreateTodo">create</b-button>
      </b-field>
      <input type="text" placeholder="Task" v-model="newTask">
      <input type="text" placeholder="Description" v-model="newDescription">
    </section>
    <div>
      <h2>DELETE</h2>
      <input type="text" placeholder="TaskId" v-model="delTask">
      <b-button type="is-danger" v-on:click="deleteTodo" name="" id="buttonDeleteTodo">delete</b-button>
    </div>
    <div>
      <h2>UPDATE</h2>
      <input type="text" placeholder="TaskId" v-model="updTaskId">
      <input type="text" placeholder="Task name" v-model="updTaskName">
       <input type="text" placeholder="new Description" v-model="updDes">
      <b-button type="is-info" v-on:click="updateTodo" name="" id="buttonUpdateTodo">update</b-button>
    </div>
    <br>
    <br>
    <ul>
      <div v-for="(element, index) in data" v-bind:key="index">
          {{ index }}: todo: {{ element.task }}, <br> description: {{ element.description }} <hr align="left" width="300">
      </div>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import BButton from "../../node_modules/buefy/src/components/button/Button.vue";

export default {
  components: {BButton},
  name: 'HelloWorld',
  data(){
    return {
      data: null,
      newTask: null,
      newDescription:null,
      delTask: null,
      updTaskId: null,
      updDes: null,
      updTaskName: null
    }
  },
  methods:{
    listTodos(){
      axios.get('http://127.0.0.1:5000/todos').then(res=>{
        this.data = res.data
      })
    },
    createTodo(){
      axios.post('http://127.0.0.1:5000/todos',{
        task: this.newTask,
        description: this.newDescription
      })
      .then(res=>{
        this.listTodos()
      })
    },
    deleteTodo(){
      axios.delete('http://127.0.0.1:5000/todos/'+this.delTask)
      .then(res=>{
        this.listTodos()
      })
    },
    updateTodo(){
      axios.put('http://127.0.0.1:5000/todos/'+this.updTaskId,{
        task: this.updTaskName,
        description: this.updDes
      })
      .then(res=>{
        this.listTodos()
      })
    }
  },
  created(){
    this.listTodos()
  }
}
</script>
