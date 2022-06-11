<template>
  <!-- vue2.0需要根元素，vue3.0可以是代码片段 -->
  <div>
    App
    <!-- 1、使用根模块state的数据 -->
    <p>{{ $store.state.username }}</p>
    <!-- 1、使用根模块getter的数据 -->
    <p>{{ $store.getters.newName }}</p>
  </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup() {
    // 使用vuex仓库
    const store = useStore()
    // 1、使用根模块state的数据
    console.log(store.state.username)
    // 2、使用根模块getters的数据
    console.log(store.getters.newName)
  }
}
</script>
