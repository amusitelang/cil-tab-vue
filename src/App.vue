<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>{{msg}}</div>
    <cil-tab :base-url="urlList" location="push" :default-selected="test"></cil-tab>
  </div>
</template>

<script>

import CilTab from "./lib/tab/index.vue";

export default {
  name: 'app',
  components: {
    CilTab
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      test: 1,
      urlList: ['http://localhost:8080/','http://localhost:8081/','https://www.baidu.com','https://www.baidu.com','https://www.baidu.com',]
    }
  },
  mounted() {
    setTimeout(() => {
      this.msg='123123'
    },2000)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
