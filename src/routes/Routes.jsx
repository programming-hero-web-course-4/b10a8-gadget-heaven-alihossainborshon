import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../pages/ProductDetails";



const router = createBrowserRouter ([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    loader: () => fetch('../product.json'),
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../category.json'),
        children: [
          {
            path:'/',
            element: <ProductCard></ProductCard>,
            loader: () => fetch('../product.json'),
          },
          {
            path:'/category/:category',
            element: <ProductCard></ProductCard>,
            loader: () => fetch('../product.json'),
          },
        ]
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('../product.json'),
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('../product.json'),
      },
      {
        path: '/product/:id',
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('../product.json'),
      }
    ]
  },
  

])

export default router