<template>
  <div>
    <SwiperA :banner="bannerList"></SwiperA>
    <div class="goods-container">
      <div class="title">秋装女2018新款早秋女装裙子韩版针织连衣裙+衬衫上衣时尚套装</div>
      <div class="price">￥59.00~￥178.00
        <span class="del">￥84.29</span>
        <span class="seal">7折</span>
      </div>
      <div class="cen">
        <div>收藏5013</div>
        <div>销量49人</div>
        <div>72小时发货</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getHomeMultidata} from "../../network/home";
  import SwiperA from "../../components/common/SwiperA";
  export default {
    name: "Goods",
    components:{
      SwiperA,
    },
    data(){
      return{
        bannerList:null
      }
    },
    created() {
      getHomeMultidata().then(res=> {
        this.bannerList=res.banner.list
      })
    }
  }
</script>

<style scoped>
  .goods-container{
    padding: 5px;
  }
  .price{
    margin-top: 10px;
    color: #ff5777;
    font-size: 20px;
    position: relative;
  }
  .price .del{
    display: inline-block;
    text-decoration:line-through;
    margin-left: 6px;
    margin-right: 6px;
    color:#999;
    font-size: 12px;
  }
  .price .seal{
    display: inline-block;
    padding: 3px;
    background: #ff5777;
    color: white;
    font-size: 12px;
    border-radius: 6px;
    position: absolute;
    top: 0;
  }
  .cen{
    display: flex;
    justify-content: space-around;
    font-size: 13px;
    margin-top: 15px;
    color: #999;
  }
</style>
