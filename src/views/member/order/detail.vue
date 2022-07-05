<template>
  <div class="member-order-detail" v-if="order">
    <!-- 头部 -->
    <DetailAction :order="order" />
    <!-- 进度 -->
    <DetailStep :order="order" />
    <!-- 物流 -->
    <Suspense>
      <template #default>
        <DetailLogistics v-if="[3, 4, 5].includes(order.orderState)" :order="order" />
      </template>
      <template #fallback>loading...</template>
    </Suspense>
    <!-- 信息 -->
    <DetailInfo :order="order" />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import DetailAction from './components/detail-action.vue'
import { findOrderDetail } from '@/api/order'
import { useRoute } from 'vue-router'
import DetailStep from './components/detail-step.vue'
import DetailLogistics from './components/detail-logistics.vue'
import DetailInfo from './components/detail-info.vue'
export default {
  name: 'MemberDetail',
  components: { DetailAction, DetailStep, DetailLogistics, DetailInfo },
  setup() {
    const route = useRoute()
    const order = ref(null)
    findOrderDetail(route.params.id).then(data => {
      order.value = data.result
    })
    return { order }
  }
}
</script>

<style lang="less" scoped>
.member-order-detail {
  background-color: #fff;
  height: 100%;
}
</style>
