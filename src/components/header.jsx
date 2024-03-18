import React from 'react'
import './../scss/components/header.scss'
import logo from './../assets/img/logo.svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <React.StrictMode>
      <nav>
        <Link to="/">
          <img src={logo} alt="logo SportSee" />
        </Link>
        <ul>
          <li>
            <Link to="#">Accueil</Link>
          </li>
          <li>
            <Link to="#">Profil</Link>
          </li>
          <li>
            <Link to="#">Réglage</Link>
          </li>
          <li>
            <Link to="#">Communauté</Link>
          </li>
        </ul>
      </nav>
    </React.StrictMode>
  )
}

export default Header
