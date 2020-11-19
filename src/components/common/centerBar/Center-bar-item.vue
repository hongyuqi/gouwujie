<!--
<template>
  <div class="center-bar-item" @click="itemClick">
    <div :style="activeStyle">
      <slot v-if="!isActive" name="slot-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Center-bar-item",
    data(){
      return{}
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
      path:String
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .center-bar-item{
    height: 49px;
    text-align: center;
  }
</style>
-->
