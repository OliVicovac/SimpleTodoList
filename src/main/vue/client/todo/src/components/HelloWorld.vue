<template>
  <div class="home">
    <table>
      <thead>
        <th>Hey</th>
        <th>Jo</th>
      </thead>
      <tbody>
        <tr v-for="(element, index) in data" v-bind:key="index">
          <td>
            {{ element }}
          </td>
        </tr>
      </tbody>
    </table>
    {{ data }}
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        data: null
      }
    },
    methods:{
      listTodos(){
        axios.get('http://127.0.0.1:8081/todos').then(res=>{
          this.data = res.data;
        })
      }
    },
    created(){
      this.listTodos()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
