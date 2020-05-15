<template>
  <div id="app">
    <img src="./assets/logo.png">
    <cil-tab :base-url="urlList"></cil-tab>
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
      urlList: ['https://www.baidu.com','https://www.baidu.com','https://www.baidu.com','https://www.baidu.com','https://www.baidu.com',]
    }
  },
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
