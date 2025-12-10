import React, { useEffect, useState } from 'react'
import Login from './pages/Login/Login.jsx'
import Product_Dashboard from './pages/Dashboard/Product_Dashboard.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Overview from './pages/Dashboard/dashboard_pages/Overview.jsx'
import { Navigate } from 'react-router-dom'
import Product_list from './pages/Dashboard/dashboard_pages/Product_list.jsx'
import ProductForm from './pages/Dashboard/dashboard_pages/ProductForm.jsx'
const App = () => {
  const [Data, setData] = useState({ username: '', password: '' })
  const [isLogin, setIsLogin] = useState(false)

  const router = createBrowserRouter([   // react router/routing
    {
      path: '/',
      element: isLogin ? (
        <Navigate to='/dashboard' replace />
      ) : (
        <Navigate to='/login' replace />
      )
    },
    {
      path: '/login',
      element: isLogin ? (
        <Navigate to='/dashboard' replace />
      ) : (
        <Login setData={setData} Data={Data} setIsLogin={setIsLogin} />
      )
    },
    {
      path: '/dashboard',
      element: isLogin ? (
        <Product_Dashboard />
      ) : (
        <Navigate to='/login' replace />
      ),
      children: [   // child route
        {
          index: true, // it means it will be default page on the dashboard
          element: <Overview />
        },
        {
          path: 'products', // path : /dashboard/products
          element: <Product_list />,
          children: [
            // child route
            {
              path: 'productForm', // now path Should /dashboard/produts/productForm
              element: <ProductForm />
            }
          ]
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}

export default App
