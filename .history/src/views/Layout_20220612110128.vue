<template>
  <!-- 顶部通栏 -->
  <nav>顶部通栏</nav>
  <!-- 头部组件 -->
  <header>头部组件</header>

  <!-- 内容容器 -->
  <div class="main">
    <!-- 二级路由 -->
    <router-view/>
  </div>

  <!-- 底部组件 -->
  <footer>底部组件</footer>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style></style>
