<template>
  <div class="container">
    <!-- 首页入口-->
    <div class="home-entry">
      <!-- 左侧分类 -->
      <HomeCategory />
      <!-- 轮播图 -->
    </div>
  </div>
</template>

<script>
import HomeCategory from './components/home-category.vue'
import XtxSkeleton from '@/components/library/xtx-skeleton.vue'
export default {
  name: 'HomePage',
  components: {
    HomeCategory,
    XtxSkeleton
  }
}
</script>

<style lang="less" scoped>
.container {
  .hoverShadow();
  color: @xtxColor;
}
</style>
