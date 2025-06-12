
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import Loading from './components/Loading/Loading'
import ContactUs from './components/ContactUs/ContactUs'




function App() {
  const router = createBrowserRouter([{
    path: "/", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'cart', element: <ShoppingCart /> },
      { path: 'loading', element: <Loading /> },
      { path: 'contact', element: <ContactUs /> },
    ]

  }])
  return (
    <>
      <RouterProvider router={router} />



    </>
  )
}

export default App
