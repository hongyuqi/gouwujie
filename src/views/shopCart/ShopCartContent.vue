<template>
  <div class="shopcartcontent">
    <div class="shop"><img src='../../assets/img/tabbar/Home.svg' alt=""><p>&nbsp;&nbsp;balabala ></p></div>
    <div class="goodsdetail">
      <img class="goodsimg" src='../../assets/img/2.jpg' alt="">
      <div class="goodsright">
        <p>秋装女2018新款早秋女装裙子韩版针织连衣裙+衬衫上衣时尚套装</p>
        <p class="style">墨绿色；S</p>
        <div class="conter">
          <span class="price">￥78.00</span>
          <div class="counter">
            <button @click="subtractClick">-</button>
            <div>{{$store.state.counter}}</div>
            <button @click="addClick">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {DECREMENT, INCREMENT} from "../../../../../vuex-study/src/store/mutation-types";

  export default {
    name: "ShopCartContent",
    methods:{
      addClick(){
        this.$store.commit(INCREMENT)
      },
      subtractClick(){
        this.$store.commit(DECREMENT)
      },
    }
  }
</script>

<style scoped>
  .shopcartcontent{
    padding: 10px;
  }
  .shop{
    display: flex;
  }
  .shop img{
    width: 20px;
    height: 20px;
  }
  .shop p{
    height: 25px;
    line-height: 25px;
  }
  .goodsdetail{
    display: flex;
  }
  .goodsimg{
    margin-top: 5px;
    margin-left: 5px;
    border-radius: 5px;
    width: 25vw;
    height: 25vw;
  }
  .goodsdetail p{
    margin-top: 2px;
    margin-left: 5px;
    font-size: 14px;
    width: 70vw;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .style{
    font-size: 12px;
    color: #999;
  }
  .price{
    font-size: 16px;
    color: #ff5777;
    font-weight: bold;
  }
  .goodsright{
    line-height: 9vw;
  }
  .conter{
    display: flex;
    justify-content: space-between;
  }
  button{
    width: 20px;
    height: 20px;
  }
  .counter{
    margin-right: 20px;
    display: flex;
  }
  .counter div{
    width: 40px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border: 1px solid;
  }
</style>
