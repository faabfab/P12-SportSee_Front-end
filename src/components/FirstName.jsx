import React from 'react'
import ApiCall from './ApiCall'

function FirstName({ apiUrl }) {
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
}

export default FirstName
