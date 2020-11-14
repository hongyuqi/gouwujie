<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="slot-img"></slot>
    <slot v-else name="slot-active-img"></slot>
    <div :style="activeStyle" >
      <slot name="slot-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab-bar-item",
    data(){
      return{
        // isActive:false
      }
    },
    computed:{
      isActive(){
        return this.$route.path===this.path
        // return this.$route.path.indexOf(this.path)!==-1
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    },
    props:{
      path:String,
      activeColor: {
        type:String,
        default:'hotpink'
        /*在App.vue没设置active-color的时候，点击相应会变成默认的颜色，设置了active-color就以设置的为准*/
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  /*@import "../../assets/css/base.css";*/
  .tab-bar-item{
    height: 49px;/*移动端底部导航固定像素，一般都是49px*/
    text-align: center;
  }
  /*.active{*/
  /*  color: cornflowerblue;*/
  /*}*/
</style>
