/*
 * @Date: 2022-08-25 11:33:39
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-08-25 18:18:59
 * @FilePath: /parceljs-react/src/pages/home/index.tsx
 * @Author: Fullsize
 */
import React, { useEffect } from "react";
import route from "src/routes";
import { Link } from 'react-router-dom'
const Home = () => {

  return (
    <div>
      <h1>页面列表</h1>
      <ul>
        {route.map((item) => (
          <li>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}

      </ul>
    </div>
  )
}
export default Home