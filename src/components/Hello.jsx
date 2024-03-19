import React from 'react'

function Hello({ firstName }) {
  return (
    <React.StrictMode>
      <h1>
        Bonjour <span className="home_firstname">{firstName}</span>
      </h1>
    </React.StrictMode>
  )
}

export default Hello
