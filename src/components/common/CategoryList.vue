<template>
  <div class="listbar">
    <ul class="listBar">
      <li>
        <router-link to="/category/fashion" class="options" active-class="active">正在流行</router-link>
      </li>
     <li>
       <router-link to="/category/jacket" class="options" active-class="active">上衣</router-link>
     </li>
      <li>
        <router-link to="/category/trousers" class="options" active-class="active">裤子</router-link>
      </li>
      <li>
        <router-link to="/category/skirt" class="options" active-class="active">裙子</router-link>
      </li>
      <li>
        <router-link to="/category/underwear" class="options" active-class="active">内衣</router-link>
      </li>
     <!-- <li>
        <router-link to="/home/homedata" class="options" active-class="active">女鞋</router-link>
      </li>
      <li>
        <router-link to="/home/homedata" class="options" active-class="active">男友</router-link>
      </li>
      <li>
        <router-link to="/home/homedata" class="options" active-class="active">包包</router-link>
      </li>
      <li>
        <router-link to="/home/homedata" class="options" active-class="active">运动</router-link>
      </li>
      <li>
        <router-link to="/home/homedata" class="options" active-class="active">配饰</router-link>
      </li>-->
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: "CategoryList",
  }
</script>

<style scoped>
  .listBar{
    margin-top: 44px;
    width: 30vw;
    text-align: center;
    font-size: 14px;
    position: fixed;
  }
  .options{
    background: #f2f2f2;
    width: 30vw;
    height: 8vh;
    line-height: 8vh;
    display: block;
    font-weight: 700;
  }
  .active{
    color: #ff5777;
    background: #fff;
  }
  ul{
    list-style: none;
  }
</style>
