<template>
  <div class="member-home">
    <!-- 概览 -->
    <HomeOverview1 />
    <!-- 收藏 -->
    <HomePanel title="我的收藏">
      <GoodsItem v-for="item in collectGoods" :key="item.id" :goods="item" />
    </HomePanel>
    <!-- 足迹 -->
    <HomePanel title="我的足迹">
      <GoodsItem v-for="i in 4" :key="i" :goods="goods" />
    </HomePanel>
    <!-- 猜你 -->
    <GoodsRelevant />
  </div>
</template>

<script>
import HomePanel from './components/home-panel.vue'
import HomeOverview1 from './components/home-overview.vue'
import GoodsRelevant from '@/views/goods/components/goods-relevant.vue'
import GoodsItem from '@/views/category/components/goods-item.vue'
import { findCollect } from '@/api/member'
import { ref } from '@vue/reactivity'
export default {
  name: 'MemberHome',
  components: {
    HomePanel,
    HomeOverview1,
    GoodsRelevant,
    GoodsItem
  },
  setup() {
    const goods = {
      id: '1',
      name: '自煮火锅不排队 麦饭石不粘鸳鸯火锅',
      picture: 'https://yanxuan-item.nosdn.127.net/fcdcb840a0f5dd754bb8fd2157579012.jpg',
      desc: '清汤鲜香 红汤劲爽',
      price: '159.00'
    }
    // 调用模拟的接口
    const collectGoods = ref([])
    findCollect({
      page: 1,
      pageSize: 4
    }).then(data => {
      collectGoods.value = data.result.items
    })
    return { goods, collectGoods }
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
