import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import BookPage from './pages/book/Book'
import ContactPage from './pages/contact/Contact'
import LoginPage from './pages/login/Login'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import RegisterPage from './pages/register/Register'
import './styles/reset.css'

const Layout = () => {
  return (
    <div className="layout-app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <h2>Oops!</h2>,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'contact',
          element: <ContactPage />,
        },
        {
          path: 'book',
          element: <BookPage />,
        },
      ],
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
