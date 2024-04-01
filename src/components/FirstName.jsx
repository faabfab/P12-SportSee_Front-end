import React from 'react'
// import ApiCall from './ApiCall'

/**
 * Composant qui retourne le prénom de l'utilisateur sur le dashboard
 * @param {URL} param0 url de l'api contenant les informations utiles
 * @returns FirstName
 */
/*function FirstName({ apiUrl, firstName }) {
  const [error, isLoaded, items] = ApiCall(apiUrl)

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <React.StrictMode>
        <h1>
          Bonjour{' '}
          <span className="home_firstname">
            {items.data.userInfos.firstName}
          </span>
        </h1>
      </React.StrictMode>
    )
  }
}*/
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
