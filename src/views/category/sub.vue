<template>
  <div class="sub-category">
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />
      <SubFilter />
      <XtxCheckbox v-model="isAllChecked"></XtxCheckbox>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import SubBread from './components/sub-bread.vue'
import SubFilter from './components/sub-filter.vue'
import XtxCheckbox from '@/components/library/xtx-checkbox.vue'
export default {
  name: 'SubCategory',
  components: { SubBread, SubFilter, XtxCheckbox },
  setup() {
    const isAllChecked = ref(true)
    return { isAllChecked }
  }
}
</script>

<style></style>
