<template>
  <div class="sum">
    <div>
      合计：<span class="money">￥</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Sum"
  }
</script>

<style scoped>
  .sum{
    position: absolute;
    bottom: 60px;
    right: 20px;
  }
  .sum{
    font-size: 15px;
  }
  .money{
    color: #ff5777;
  }
</style>
