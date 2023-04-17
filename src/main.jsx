import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Oders from './components/Orders/Orders';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProdactsLoder from './loders/cartProdactsLoder';
import Checkout from './components/Checkout/Checkout';


const router = createBrowserRouter([
  {
    path: '/',
    element : <Home></Home>,
    children : [
      {
        path:'/',
        element: <Shop></Shop>
      },
      {
        path:'/orders',
        element:<Orders></Orders>,
        loader: cartProdactsLoder
      },
      {
        path: '/checkout',
        element: <Checkout></Checkout>
      },
      {
        path:'/inventory',
        element: <Inventory></Inventory>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
