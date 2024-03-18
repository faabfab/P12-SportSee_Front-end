import React from 'react'
import './../scss/pages/home.scss'

function Home() {
  return (
    <React.StrictMode>
      <h1>
        Bonjour <span className="home_firstname">Thomas</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </React.StrictMode>
  )
}

export default Home
