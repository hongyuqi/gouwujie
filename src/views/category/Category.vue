<template>
  <div>
    <NavBar class="home-nav">
      <template v-slot:center>
        商品分类
      </template>
    </NavBar>
    <CategoryList></CategoryList>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  import CategoryList from "../../components/common/CategoryList";
  export default {
    name: "Category",
    components:{
      NavBar,
      CategoryList
    },
    data(){
      return{}
    }
  }
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color: #fff;
  }
</style>
