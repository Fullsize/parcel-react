/*
 * @Date: 2022-08-25 10:34:28
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-08-29 10:42:23
 * @FilePath: /parceljs-react/src/app.tsx
 * @Author: Fullsize
 */
/*
 * @Date: 2022-08-25 10:34:28
 * @LastEditors: Fullsize
 * @LastEditTime: 2022-08-25 11:30:47
 * @FilePath: /parceljs-react/src/app.tsx
 * @Author: Fullsize
 */
import React from 'react';
import route from './routes';
import { Routes, Route } from "react-router-dom";
import Layout from 'src/components/layout';
import './index.css';
const APP = () => {
  const renderRoute = (data: any) => {
    return data.map((item: any) => {
      if (item.children) {
        const Dashboard = React.lazy(() => item.component)
        return <Route
          key={item.path}
          path={item.path}
          index={item.index}
          element={<React.Suspense fallback={<></>}>
            <Dashboard />
          </React.Suspense>}
        >
          {renderRoute(item.children)}
        </Route>
      }
      const Dashboards = React.lazy(() => item.component)
      return <Route
        key={item.path}
        path={item.path}
        index={item.index}
        element={<React.Suspense fallback={<></>}>
          <Dashboards />
        </React.Suspense>}
      />
    })
  }
  return (
    <Layout>
      <Routes>
        {renderRoute(route)}
      </Routes>
    </Layout>
  )
}
export default APP;