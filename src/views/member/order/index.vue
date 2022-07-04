<template>
  <div class="member-order">
    <!-- Tab组件 -->
    <XtxTabs v-model="activeName" @tab-click="changeTab">
      <XtxTabsPanel label="选项卡0" name="first">内容0</XtxTabsPanel>
      <XtxTabsPanel v-for="i in 4" :key="i" :label="`选项卡${i}`" :name="`name${i}`">内容{{ i }}</XtxTabsPanel>
    </XtxTabs>
    <!-- 订单列表 -->
    <!-- 分页组件 -->
  </div>
</template>

<script>
import XtxTabs from '@/components/library/xtx-tabs.vue'
import XtxTabsPanel from '@/components/library/xtx-tabs-panel.vue'
import { ref } from '@vue/reactivity'
export default {
  name: 'MemberOrder',
  components: { XtxTabs, XtxTabsPanel },
  setup() {
    const activeName = ref('first')
    const changeTab = tab => {}
    return { activeName, changeTab }
  }
}
</script>
