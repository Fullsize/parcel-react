/*
 * @Date: 2022-08-25 18:05:33
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-08-25 18:20:21
 * @FilePath: /parceljs-react/src/routes/index.ts
 * @Author: Fullsize
 */
const route = [
  {
    path: '/',
    title: "首页",
    component: import(`src/pages/home`)
  },
  {
    path: '/one',
    title: "主页",
    component: import(`src/pages/one`)
  }
]
export default route