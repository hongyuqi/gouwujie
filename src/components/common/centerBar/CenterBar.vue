<template>
 <div class="centerbar">
   <div class="centerBar">
     <router-link to="/home/popular" class="options" active-class="active">流行</router-link>
     <router-link to="/home/newStyle" class="options" active-class="active">新款</router-link>
     <router-link to="/home/select" class="options" active-class="active">精选 </router-link>
   </div>
   <router-view></router-view>
 </div>
</template>

<script>
  // import CenterBarItem from './Center-bar-item'
  // import {getHomeHomedata} from "../../../network/home";
  // import Popular from "../../../views/home/Popular";

  export default {
    name: "CenterBar",
  }
</script>

<style scoped>
  .centerBar{
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  .centerBar .options{
    width: 16vw;
  }
  .active{
    border-bottom: 2px solid #ff5777;
  }
</style>
