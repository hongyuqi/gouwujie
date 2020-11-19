<template>
  <div class="listWrap">
    <ul class="fashion-wrapper">
      <li v-for="item in list">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div class="txt">{{item.title}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {getSubCategorydata3627} from "../../network/category";

  export default {
    name: "Fashion",
    data(){
      return{
        list:null
      }
    },
    created() {
      getSubCategorydata3627().then(res=>{
        console.log(res)
        this.list=res.list
      })
    }
  }
</script>

<style scoped>
  .listWrap{
    position: absolute;
    top: 55px;
    left: 35vw;
    margin-bottom: 70px;
    font-size: 14px;
  }
  .fashion-wrapper{
    width: 58vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
    margin-top: 5vw;
  }
  .fashion-wrapper li{
    width: 45%;
    margin-bottom: 5px;
  }
  .fashion-wrapper li img{
    width: 100%;
    border-radius: 3px;
  }
  ul{
    list-style: none;
  }
</style>
