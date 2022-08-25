/*
 * @Date: 2022-08-25 11:33:39
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-08-25 14:34:42
 * @FilePath: /parceljs-react/src/pages/home.tsx
 * @Author: Fullsize
 */
import React,{useEffect} from "react";
import request from "src/request"
import bg from 'images/1.png';
const Home=()=>{
  useEffect(()=>{
    request.get('/a')
  },[])
  return(
    <div className="box">
      hello word!
      <img src={bg} alt="" />
    </div>
  )
}
export default Home