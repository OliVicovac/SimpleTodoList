<template>
  <div class="HelloWorld">
    <div>
      <h2>CREATE</h2>
      <input type="text" placeholder="Task" v-model="newTask">
      <input type="text" placeholder="Description" v-model="newDescription">
      <input type="button" v-on:click="createTodo" value="send" name="" id="">
    </div>
    <div>
      <h2>DELETE</h2>
      <input type="text" placeholder="TaskId" v-model="delTask">
      <input type="button" v-on:click="deleteTodo" value="send" name="" id="">
    </div>
    <div>
      <h2>UPDATE</h2>
      <input type="text" placeholder="TaskId" v-model="updTaskId">
      <input type="text" placeholder="Task name" v-model="updTaskName">
       <input type="text" placeholder="new Description" v-model="updDes">
      <input type="button" v-on:click="updateTodo" value="send" name="" id="">
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

export default {
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
