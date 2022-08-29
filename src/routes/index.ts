/*
 * @Date: 2022-08-25 18:05:33
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-08-29 10:35:26
 * @FilePath: /parceljs-react/src/routes/index.ts
 * @Author: Fullsize
 */
const route = [
  {
    path: '/',
    title: "",
    component: import(`src/pages/home`)
  },
  {
    path: '/one',
    title: "主页",
    component: import(`src/pages/one`)
  }
]
export default route