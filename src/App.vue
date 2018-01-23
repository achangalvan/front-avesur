<template>
  <div id="app">
  <navbar></navbar>
  <router-view></router-view>
  </div>
</template>

<script>
  import Index from './components/Index/Index.vue'
  import Navbar from './components/Index/Navbar.vue'
  export default{
    components:{
      'index' : Index,
      'navbar' : Navbar
    }
  }
</script>

<style>

</style>
