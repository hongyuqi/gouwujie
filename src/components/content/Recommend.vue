<template>
  <div class="recommend-wrapper">
    <ul class="recommend-item">
      <li v-for="item in recommend">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    props:{
      recommend:{
        type:Array
      }
    }
  }
</script>

<style scoped>
  .recommend-wrapper{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .recommend-item{
    width: 100%;
    /*height: 20vh;*/
    display: flex;
    justify-content: space-between;
  }
  li img{
    width: 70%;
  }
  li{
    text-align: center;
  }
  ul{
    list-style: none;
  }
  a div{
    font-size: 12px;
  }
</style>
