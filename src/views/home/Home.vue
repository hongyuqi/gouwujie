<template>
  <div>
    <NavBar class="home-nav">
      <template v-slot:center>
        购物街
      </template>
    </NavBar>
    home
  </div>
</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  export default {
    name: "Home",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
  .home-nav{
    color: #fff;
    background: var(--color-tint);
  }
</style>
