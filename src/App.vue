<template>
  <div id="app">
    <router-link to='/'></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
//import Home from '@/views/Home'

export default {
  name: 'app',
  components: {
    //Home
  }
}
</script>

<style>
  * {
      margin: 0;
      padding: 0;
    }

  html,body {
    width: 100%;
    height: 100%;
  }

  #app {
    width: 100%;
    height: 100%;
  }
</style>
