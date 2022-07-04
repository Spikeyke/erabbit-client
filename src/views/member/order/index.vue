<template>
  <div class="member-order">
    <!-- Tab组件 -->
    <XtxTabs v-model="activeName" @tab-click="tabClick">
      <XtxTabsPanel v-for="item in orderStatus" :key="item.name" :label="item.label" :name="item.name"></XtxTabsPanel>
    </XtxTabs>
    <!-- 订单列表 -->
    <div class="order-list">
      <OrderItem v-for="item in orderList" :key="item.id" :order="item" />
    </div>
    <!-- 分页组件 -->
    <XtxPagination />
  </div>
</template>

<script>
import XtxTabs from '@/components/library/xtx-tabs.vue'
import XtxTabsPanel from '@/components/library/xtx-tabs-panel.vue'
import { reactive, ref } from '@vue/reactivity'
import XtxPagination from '@/components/library/xtx-pagination.vue'
import OrderItem from './components/order-item.vue'
import { findOrderList } from '@/api/order'
import { orderStatus } from '@/api/constants'
export default {
  name: 'MemberOrder',
  components: { XtxTabs, XtxTabsPanel, XtxPagination, OrderItem },
  setup() {
    const activeName = ref('first')

    // 获取数据
    const reqParams = reactive({
      page: 1,
      pageSize: 10,
      orderState: 0
    })
    const orderList = ref([])
    findOrderList(reqParams).then(data => {
      orderList.value = data.result.items
    })

    // 点击选项卡
    const tabClick = ({ index }) => {
      reqParams.page = 1
      reqParams.orderState = index
    }

    return { activeName, orderList, orderStatus, tabClick }
  }
}
</script>
<style lang="less" scoped></style>
