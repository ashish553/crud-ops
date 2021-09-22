<template>
  <div class="container">
    <!-- <router-view></router-view> -->
    <Dashboard />
  </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Dashboard from './components/Dashboard'

export default {
  name: 'App',
  components: {
    Dashboard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.url {
  margin: auto;
  width: max-content;
  background-color: lightblue;
  font-size: larger;
  display: block;
  padding: 14px;
}
</style>
