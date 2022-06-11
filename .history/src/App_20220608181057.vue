<template>
<!-- vue2.0需要根元素，vue3.0可以是代码片段 --><div>
App
<!-- 1、使用根模块state的数据 -->
<p>{{ $store.state.username }}</p>
</div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    // 使用vuex仓库
    const store = useStore()
    // 1、使用根模块state的数据
    console.log(store.state.usename)
  }
}
</script>
