
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import Loading from './components/Loading/Loading'
import ContactUs from './components/ContactUs/ContactUs'
import AboutUs from './components/AboutUs/AboutUs'
import NotFound from './components/NotFound.jsx/NotFound'
import { Toaster } from 'react-hot-toast'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import GuestRoute from './components/GuestRoute/GuestRoute'




function App() {
  const router = createBrowserRouter([
    {
    path: "/", element:(
      <ProtectedRoute>
         <Layout />
      </ProtectedRoute>
    ), children: [
      { index: true, element: <Home /> },
      { path: 'cart', element: <ShoppingCart /> },
      { path: 'loading', element: <Loading /> },
      { path: 'contact', element: <ContactUs /> },
      { path: 'about', element: <AboutUs /> },
      { path: 'notfound', element: <NotFound /> },
    ]

  },
{
path: "/", element:(
      <GuestRoute>
         <Layout />
      </GuestRoute>
    ), children: [
     { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
    ]
}])
  return (
    <>
    <Toaster />
      <RouterProvider router={router} />



    </>
  )
}

export default App
