<template>
  <NavBar class="home-nav">
    <template v-slot:center>
      我的
    </template>
  </NavBar>
</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  export default {
    name: "Profile",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color: #fff;
  }
</style>
