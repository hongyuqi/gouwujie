<template>
  <div class="home">
    <NavBar class="home-nav">
      <template v-slot:center>
        购物街
      </template>
    </NavBar>
    <SwiperA :banner="bannerList"></SwiperA>
    <Recommend :recommend="recommendList"></Recommend>
    <Recommend :recommend="recommendList"></Recommend>
    <CenterBar></CenterBar>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  import {getHomeMultidata} from "../../network/home";
  import SwiperA from '../../components/common/SwiperA'
  import Recommend from "../../components/content/Recommend";
  import CenterBar from "../../components/common/centerBar/CenterBar";

  export default {
    name: "Home",
    components: {
      NavBar,
      SwiperA,
      Recommend,
      CenterBar
    },
    data(){
      return{
        result:null,
        bannerList:null,
        recommendList:null,
      }
    },
    created() {
      getHomeMultidata().then(res=> {
        // this.result=res
        // console.log(res)
        this.bannerList=res.banner.list
        this.recommendList=res.recommend.list
      })
      /*getHomeHomedata().then(res=>{
        // console.log(res)
      })*/
    }
  }
</script>

<style scoped>
  .home-nav{
    background: var(--color-tint);
    color: #fff;
  }
  .home{
    margin-bottom: 70px;
  }
</style>
