<template>
  <div class="container">
    <!-- 修改数据，测试是否持久化 --> 
    <!-- {{ $store.state.user.profile.account }}
    <button @click="$store.commit('user/setUser', { account: 'zhousg' })">设置用户信息</button> -->
    App
    <button @click="fn">测试request工具函数</button>
  </div>
</template>
<script>
export default {
  name: 'App',
  setup(){
    const fn=()=>{
      
    }
    return {fn}
  }
}
</script>
