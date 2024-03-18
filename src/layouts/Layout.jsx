import React from 'react'
import Header from '../components/header'
import Left from '../components/Left'
import { Outlet } from 'react-router-dom'
import './../scss/layout/layout.scss'

function Layout() {
  return (
    <React.StrictMode>
      <Header />
      <div className="container">
        <Left />
        <main>
          <Outlet />
        </main>
      </div>
    </React.StrictMode>
  )
}

export default Layout
