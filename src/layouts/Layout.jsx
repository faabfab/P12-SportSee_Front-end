import React from 'react'
import Header from '../components/Header'
import LeftNav from '../components/LeftNav'
import { Outlet } from 'react-router-dom'
import './../scss/layout/layout.scss'

function Layout() {
  return (
    <React.StrictMode>
      <Header />
      <div className="container">
        <LeftNav />
        <main>
          <Outlet />
        </main>
      </div>
    </React.StrictMode>
  )
}

export default Layout
