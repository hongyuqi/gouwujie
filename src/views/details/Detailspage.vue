<template>
  <div class="detailspage">
    <NavBar class="detail-nav">
      <template v-slot:left>
        <div @click="itemClick">&lt</div>
      </template>
      <template v-slot:center>
        <div class="center-txt">
          <router-link to="/detialspage/goods" class="options" active-class="active">商品</router-link>
          <router-link to="/detialspage/parameter" class="options" active-class="active">参数</router-link>
          <router-link to="/detialspage/comment" class="options" active-class="active">评论</router-link>
          <router-link to="/detialspage/recommend" class="options" active-class="active">推荐</router-link>
        </div>
      </template>
    </NavBar>
    <Dtabbar></Dtabbar>
    <router-view></router-view>
  </div>

</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  import Dtabbar from "../../components/common/tabbar/Dtabbar";

  export default {
    name: "Detailspage",
    components:{
      NavBar,
      Dtabbar
    },
    methods:{
      itemClick(){
        this.$router.replace('/home')
      }
    },

  }
</script>

<style scoped>
 .detail-nav{
   color: #2c3e50;
   background: #fff;
   height: 44px;
   text-align: center;
 }
 .detailspage{
   margin-top: 44px;
 }
  .center-txt{
    font-size: 14px;
    color: #2c3e50;
    display: flex;
    justify-content: space-around;
  }
 .active{
   color: #ff5777;
 }
</style>
