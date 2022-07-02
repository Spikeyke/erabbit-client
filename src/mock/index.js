import Mock from 'mockjs'
import qs from 'qs'

// 基本配置
Mock.setup({
  // 随机延时500-1000毫秒，模拟网络延时
  timeout: '500-1000'
})

// 拦截接口 /my/test
// 1、接口地址路径规则
// 2、请求方式
// 3、返回数据（函数返回数据）
Mock.mock(/\/my\/test/, 'get', () => {
  // 随机数据逻辑 目标：5条数据[{id:'',name:''},...]
  const arr = []
  for (let i = 0; i < 5; i++) {
    // arr.push(Mock.mock('@id'))
    arr.push(
      Mock.mock({
        id: '@id',
        name: '@name'
      })
    )
  }
  return { mag: '获取数据成功', result: [] }
})

// 模拟 我的收藏
Mock.mock(/\/member\/collect/, 'get', config => {
  console.log(config)
  const queryString = config.url.split('?')[1]
  const queryObject = qs.parse(queryString)
  const items = []
  for (let i = 0; i < +queryObject.pageSize; i++) {
    items.push(
      Mock.mock({
        id: '@id',
        name: '@ctitle(10,20)',
        desc: '@ctitle(4,20)',
        price: '@float(100,200,2,2)',
        // http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_7.jpg
        picture: `http://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/clothes_goods_${Mock.mock(
          '@integer(1,8)'
        )}.jpg`
      })
    )
  }
  return {
    mag: '获取收藏商品成功',
    result: {
      counts: 35,
      pageSize: +queryObject.pageSize,
      page: +queryObject.page,
      items
    }
  }
})
