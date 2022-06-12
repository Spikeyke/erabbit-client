<template>
  <!-- 顶部通栏 -->
  <nav></nav>
  <!-- 头部组件 -->
  <header></header>

  <!-- 内容容器 -->
  <div class="main">
    <!-- 二级路由 -->
    <router-view/>
  </div>
  
  <!-- 底部组件 -->
  <footer></footer>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style></style>
