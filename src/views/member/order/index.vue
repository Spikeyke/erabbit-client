<template>
  <div class="member-order">
    <!-- Tab组件 -->
    <XtxTabs v-model="activeName" @tab-click="tabClick">
      <XtxTabsPanel v-for="item in orderStatus" :key="item.name" :label="item.label" :name="item.name"></XtxTabsPanel>
    </XtxTabs>
    <!-- 订单列表 -->
    <div class="order-list">
      <div v-if="loading" class="loading"></div>
      <div class="none" v-if="!loading && orderList.length === 0">暂无数据</div>
      <OrderItem
        @on-logistics="handleLogistics"
        @on-confirm="handleConfirm"
        @on-delete="handleDelete"
        @on-cancel="handleCancel"
        v-for="item in orderList"
        :key="item.id"
        :order="item"
      />
    </div>
    <!-- 分页组件 -->
    <XtxPagination
      v-if="total > 0"
      :curent-page="reqParams.page"
      :page-size="reqParams.pageSize"
      :total="total"
      @current-change="reqParams.page = $event"
    />
    <!-- 取消原因组件 -->
    <OrderCancel ref="orderCancelCom" />
    <!-- 查看物流组件 -->
    <OrderLogistics ref="orderLogisticsCom" />
  </div>
</template>

<script>
import XtxTabs from '@/components/library/xtx-tabs.vue'
import XtxTabsPanel from '@/components/library/xtx-tabs-panel.vue'
import { reactive, ref } from '@vue/reactivity'
import XtxPagination from '@/components/library/xtx-pagination.vue'
import OrderItem from './components/order-item.vue'
import { confirmOrder, deleteOrder, findOrderList } from '@/api/order'
import { orderStatus } from '@/api/constants'
import { watch } from '@vue/runtime-core'
import OrderCancel from './components/order-cancel.vue'
import Confirm from '@/components/library/Confirm'
import Message from '@/components/library/Message'
import OrderLogistics from './components/order-logistics.vue'
export default {
  name: 'MemberOrder',
  components: { XtxTabs, XtxTabsPanel, XtxPagination, OrderItem, OrderCancel, OrderLogistics },
  setup() {
    const activeName = ref('first')

    // 筛选条件
    const reqParams = reactive({
      page: 1,
      pageSize: 5,
      orderState: 0
    })
    const orderList = ref([])
    const loading = ref(false)
    const total = ref(0)

    const getOrderList = () => {
      loading.value = true
      findOrderList(reqParams).then(data => {
        orderList.value = data.result.items
        total.value = data.result.counts
        loading.value = false
      })
    }
    // 筛选条件变化重新加载
    watch(
      reqParams,
      () => {
        getOrderList()
      },
      { immediate: true }
    )

    // 点击选项卡
    const tabClick = ({ index }) => {
      reqParams.page = 1
      reqParams.orderState = index
    }

    // 删除订单
    const handleDelete = order => {
      console.log(1)
      Confirm({ text: '确认删除订单吗？' })
        .then(() => {
          deleteOrder(order.id).then(() => {
            Message({ type: 'success', text: '删除成功' })
            getOrderList()
          })
        })
        .catch(() => {})
    }

    return {
      activeName,
      orderList,
      orderStatus,
      tabClick,
      loading,
      total,
      reqParams,
      ...useCancel(),
      handleDelete,
      ...useConfirm(),
      ...useLogistics()
    }
  }
}

// 取消订单逻辑
const useCancel = () => {
  // 组件实例
  const orderCancelCom = ref(null)
  // 点击取消
  const handleCancel = order => {
    orderCancelCom.value.open(order)
  }
  return { handleCancel, orderCancelCom }
}

// 确认收货逻辑
const useConfirm = () => {
  const handleConfirm = order => {
    Confirm({ text: '确认收货吗？' })
      .then(() => {
        confirmOrder(order.id).then(() => {
          Message({ type: 'success', text: '确认收货成功' })
          // 待收货--->待评价
          order.orderState = 4
        })
      })
      .catch(() => {})
  }
  return { handleConfirm }
}

// 查看物流逻辑
const useLogistics = () => {
  const orderLogisticsCom = ref(null)
  const handleLogistics = order => {
    orderLogisticsCom.value.open(order)
  }
  return { handleLogistics, orderLogisticsCom }
}
</script>
<style lang="less" scoped>
.order-list {
  padding: 20px;
  position: relative;
  min-height: 400px;
}
.loading {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.9) url(../../../assets/images/loading.gif) no-repeat center;
}
.none {
  height: 400px;
  text-align: center;
  line-height: 400px;
  color: #999;
}
</style>
