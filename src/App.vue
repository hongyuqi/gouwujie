<template>
  <div id="app">
    <Tabbar></Tabbar>
  </div>
  <router-view/>
</template>
<script>
  import Tabbar from "./components/common/tabbar/Tabbar";
  export default {
    name:'App',
    components:{
      Tabbar
    }
  }
</script>
<style>
@import "assets/css/base.css";
</style>
