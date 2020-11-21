<template>
  <div class="shopcart">
    <NavBar class="home-nav">
      <template v-slot:center>
        购物车({{$store.state.counter}})
      </template>
    </NavBar>
    <ShopCartContent></ShopCartContent>
    <Sum></Sum>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  import ShopCartContent from "./ShopCartContent";
  import Sum from "./Sum";
  export default {
    name: "ShopCart",
    components:{
      NavBar,
      ShopCartContent,
      Sum
    }
  }
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color: #fff;
  }
  .shopcart{
    height: 100vh;
    margin-top: 44px;
  }
</style>
