import React from 'react'
import Header from './components/Header/Header'
//Outlet allows us to render the children of the current route
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout