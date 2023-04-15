import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import BookPage from './pages/book'
import ContactPage from './pages/contact'
import LoginPage from './pages/login'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

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
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
