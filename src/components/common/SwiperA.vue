<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in banner">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'

  export default {
    // name: "SwiperA",
    components:{

    },
    props:{
      banner:{
        type:Array
      }
    },
    updated(){
      let mySwiper=new Swiper('.swiper-container',{
        autoplay:3000,
        loop : true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }
  }
</script>

<style scoped>
  .swiper-container{
    width: 100%;
    margin-top: 44px;
    /*height: 300px;*/
  }
  .swiper-slide a img{
    width: 100%;
  }
</style>
