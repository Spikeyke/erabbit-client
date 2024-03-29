<template>
  <div class="top-category">
    <div class="container">
      <!-- 面包屑 -->
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <!-- 过渡模式：out-in 当前元素先进行过渡，完成之后新元素过渡进入 -->
        <Transition name="fade-right" mode="out-in">
          <!-- 动画只在节点创建移除时生效，加上key属性关联ID才会创建和移除 -->
          <XtxBreadItem :key="topCategory.id">{{ topCategory.name }}</XtxBreadItem>
        </Transition>
      </XtxBread>
      <!-- 轮播图 -->
      <XtxCarousel :sliders="sliders" style="height: 500px" />
      <!-- 所有二级分类 -->
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="sub in topCategory.children" :key="sub.id">
            <a href="javascript:;">
              <img :src="sub.picture" />
              <p>{{ sub.name }}</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 各个分类推荐商品 -->
      <!-- 分类关联商品 -->
      <div class="ref-goods" v-for="sub in subList" :key="sub.id">
        <div class="head">
          <h3>- {{ sub.name }} -</h3>
          <p class="tag">温暖柔软，品质之选</p>
          <XtxMore :path="`category/sub/${sub.id}`" />
        </div>
        <div class="body">
          <GoodsItem v-for="goods in sub.goods" :key="goods.id" :goods="goods" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { findBanner } from '@/api/home'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import GoodsItem from './components/goods-item.vue'
import { findTopCategory } from '@/api/category'
export default {
  name: 'TopCategory',
  components: {
    GoodsItem
  },
  setup() {
    // 轮播图
    const sliders = ref([])
    findBanner().then(data => {
      sliders.value = data.result
    })
    // 面包屑+所有子分类 ===> vuex
    const store = useStore()
    const route = useRoute()
    const topCategory = computed(() => {
      let cate = {}
      // 当前顶级分类 === 根据路由上的ID去vuex中category模块的list中查找
      const item = store.state.category.list.find(item => {
        return item.id === route.params.id
      })
      if (item) cate = item
      return cate
    })

    // 获取各个子类目下推荐商品
    const subList = ref([])
    const getSubList = () => {
      findTopCategory(route.params.id).then(data => {
        subList.value = data.result.children
      })
    }
    watch(
      () => route.params.id,
      newVal => {
        // newVal && getSubList() 加上一个严谨判断，在顶级类目下才发请求
        if (newVal && `/category/${newVal}` === route.path) getSubList()
      },
      { immediate: true }
    )

    return { sliders, topCategory, subList }
  }
}
</script>

<style lang="less" scoped>
// 面包屑动画
// 进入：右侧 20px的位移 透明度为0 做过度0.5s 本来位置 没有位移 透明度1
// 离开：本来位置 没有位移 透明度1 做过度0.5s 右侧20px的位移 透明度0
.fade-right-enter-from,
.fade-right-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.fade-right-enter-active,
.fade-right-leave-active {
  transition: all 0.5s;
}
.fade-right-enter-to,
.fade-right-leave-from {
  transform: none;
  opacity: 1;
}
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      li {
        width: 168px;
        height: 160px;
        a {
          text-align: center;
          display: block;
          font-size: 16px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            line-height: 40px;
          }
          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }
  // 推荐商品
  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;
    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }
    .body {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 0 65px 30px;
    }
  }
}
</style>
