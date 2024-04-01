import React from 'react'

/**
 *Composant qui affiche le prénom de l'utilisateur
 * @param {Object} firstName
 * @returns void
 */
function FirstName({ firstName }) {
  return (
    <React.StrictMode>
      <h1>
        Bonjour <span className="home_firstname">{firstName}</span>
      </h1>
    </React.StrictMode>
  )
}

export default FirstName
