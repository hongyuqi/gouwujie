<template>
  <div id="dtabbar">
    <TabBarItem path="/home" active-color="hotpink">
      <template v-slot:slot-img>
        <img src="@/assets/img/tabbar/Home.svg" alt="">
      </template>
      <template v-slot:slot-active-img>
        <img src="@/assets/img/tabbar/Home2.svg" alt="">
      </template>
      <template v-slot:slot-text>
        <div>客服</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/category" active-color="hotpink">
      <template v-slot:slot-img>
        <img src="@/assets/img/tabbar/Home.svg" alt="">
      </template>
      <template v-slot:slot-active-img>
        <img src="@/assets/img/tabbar/Home2.svg" alt="">
      </template>
      <template v-slot:slot-text>
        <div>店铺</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/profile" active-color="hotpink">
      <template v-slot:slot-img>
        <img src="@/assets/img/tabbar/Home.svg" alt="">
      </template>
      <template v-slot:slot-active-img>
        <img src="@/assets/img/tabbar/Home2.svg" alt="">
      </template>
      <template v-slot:slot-text>
        <div>收藏</div>
      </template>
    </TabBarItem>
    <div class="txt-wrapper">
      <TabBarItem path="/shopCart" active-color="hotpink">
        <template v-slot:slot-text>
          <div class="txt cart" @click="addClick">加入购物车</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/profile" active-color="hotpink">
        <template v-slot:slot-text>
          <div class="txt buy">购买</div>
        </template>
      </TabBarItem>
    </div>

  </div>
</template>

<script>
  import TabBarItem from './Tab-bar-item'
  import {INCREMENT} from "../../../store/mutation-types";

  export default {
    name: "Dtabbar",
    components:{
      TabBarItem
    },
    methods:{
      addClick(){
        this.$store.commit(INCREMENT)
      }
    }
  }
</script>

<style scoped>
  #dtabbar{
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    background: #f6f6f6;
    box-shadow: 0 -1px 1px rgba(100,100,100,.1);
    z-index: 99;
  }
  .txt-wrapper{
    display: flex;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
  }
  .txt{
    line-height: 49px;
  }
  .buy{
    width: 20vw;
    background: #ff8198;
  }
  .cart{
    width: 30vw;
    background: gold;
  }
</style>
