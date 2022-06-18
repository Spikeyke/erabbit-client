<template>
  <div class="sub-category">
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />
      <!-- 筛选区 -->
      <SubFilter />
      <!-- 商品面板（排序+列表） -->
      <div class="goods-list">
        <SubSort />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import SubBread from './components/sub-bread.vue'
import SubFilter from './components/sub-filter.vue'
import XtxCheckbox from '@/components/library/xtx-checkbox.vue'
import SubSort from './components/sub-sort.vue'
export default {
  name: 'SubCategory',
  components: { SubBread, SubFilter, XtxCheckbox, SubSort },
  setup() {
    const isAllChecked = ref(true)
    return { isAllChecked }
  }
}
</script>

<style lang="less" scoped>
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
}
</style>
