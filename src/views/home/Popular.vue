<template>
  <div class="option-wrapper">
    <ul class="popular-item">
      <li v-for="item in listList">
        <div  @click="itemClick">
          <img :src="item.show.img" alt="">
          <div class="txt">{{item.title}}</div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
  import {getHomeHomedata} from "../../network/home";

  export default {
    name: "Popular",
    /*props:{
      list:{
        type:Array
      }
    }*/
    methods:{
      itemClick(){
        this.$router.replace('/detialspage')
      }
    },
    data(){
      return{
        listList:null
      }
    },
    created() {
      getHomeHomedata().then(res=>{
        console.log(res)
        this.listList=res.list
      })
    }
  }
</script>

<style scoped>
  .popular-item{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    text-align: center;
    margin-top: 5vw;
  }
  .popular-item li{
    width: 45%;
    margin-bottom: 5px;
  }
  .popular-item li img{
    width: 100%;
    border-radius: 3px;
  }
  ul{
    list-style: none;
  }
  .txt{
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
