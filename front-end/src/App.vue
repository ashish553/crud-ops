<template>
  <div class="container-fluid">
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

</style>
