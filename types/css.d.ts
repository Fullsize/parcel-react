/*
 * @Date: 2022-08-25 11:13:41
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-08-25 11:14:02
 * @FilePath: /parceljs-react/types/css.d.ts
 * @Author: Fullsize
 */
declare module '*.module.css' {
  const classes: {
    readonly [key: string]: string
  }
  export default classes
}
declare module '*.module.less' {
  const classes: {
    readonly [key: string]: string
  }
  export default classes
}