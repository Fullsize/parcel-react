/*
 * @Date: 2022-08-29 10:39:44
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-08-29 10:43:37
 * @FilePath: /parceljs-react/src/components/layout/index.tsx
 * @Author: Fullsize
 */
import React from "react";
import styles from "./index.module.css";
const Layout = (props: any) => {
  return (
    <div className={styles['main']}>
      {props.children}
    </div>
  )
}
export default Layout;