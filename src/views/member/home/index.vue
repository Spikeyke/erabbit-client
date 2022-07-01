<template>
  <div class="member-home">
    <!-- 概览 -->
    <HomeOverview1 />
    <!-- 收藏 -->
    <HomePanel title="我的收藏"></HomePanel>
    <!-- 足迹 -->
    <HomePanel title="我的足迹"></HomePanel>
    <!-- 猜你 -->
    <GoodsRelevant />
  </div>
</template>

<script>
import HomePanel from './components/home-panel.vue'
import HomeOverview1 from './components/home-overview.vue'
import GoodsRelevant from '@/views/goods/components/goods-relevant.vue'
export default {
  name: 'MemberHome',
  components: {
    HomePanel,
    HomeOverview1,
    GoodsRelevant
  }
}
</script>

<style lang="less" scoped>
:deep(.xtx-carousel) .carousel-btn.prev {
  left: 5px;
}
:deep(.xtx-carousel) .carousel-btn.next {
  right: 5px;
}
</style>
