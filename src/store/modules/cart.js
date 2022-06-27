// 购物车模块
export default {
    namespaced: true,
    state() {
        return {
            // 购物车商品列表
            list: []
        }
    },
    getters: {
        // 有效商品列表
        validList(state) {
            // 有效商品：库存大于0 stock 商品有效标识为 true isEffective
            return state.list.filter(goods => goods.stock > 0 && goods.isEffective)
        },
        // 有效商品总件数
        validTotal(state, getters) {
            return getters.validList.reduce((p, c) => p + c.count, 0)
        },
        // 有效商品总金额
        validAmount(state, getters) {
            return getters.validList.reduce((p, c) => p + c.count * 100 * c.nowPrice, 0) / 100
        }
    },
    mutations: {
        // 加入购物车
        insertCart(state, payload) {
            // 约定加入购物车字段必须和后端保持一致 payload对象 的字段
            // skuId, name, attrsText, picture, price, mowPrice, selected, stock, count, isEffective, id
            // 插入数据规则：
            // 1、先找是否有相同商品
            // 2、如果有相同的商品，查询它的数量，累加到pauload上，再保存最新位置，原来商品需要删除
            // 3、如果没有相同商品，保存在最新位置即可
            const sameIndex = state.list.findIndex(goods => goods.skuId === payload.skuId)
            if (sameIndex > -1) {
                const count = state.list[sameIndex].count
                pauload.count += count
                // 删除原来
                state.list.splice(sameIndex, 1)
            }
            // 追加新的
            state.list.unshift(payload)
        }
    },
    actions: {
        // 加入购物车
        insertCart(ctx, payload) {
            return new Promise((resolve, reject) => {
                if (ctx.rootState.user.profile.token) {
                    // 已登录

                } else {
                    // 未登录
                    ctx.commit('insertCart', payload)
                    resolve()
                }
            })
        }
    }
}