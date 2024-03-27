import React from 'react'
import ApiCall from './ApiCall'

function TestApi({ apiUrl }) {
  const [error, isLoaded, items] = ApiCall(apiUrl)

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <React.StrictMode>
        <p>Utilisateur :</p>
        <ul>
          <li>id : {items.data.id}</li>
          <li>
            Nom : {items.data.userInfos.firstName}{' '}
            {items.data.userInfos.lastName} : {items.data.userInfos.age} ans
          </li>
          <li>score : {items.data.score}</li>
        </ul>
      </React.StrictMode>
    )
  }
}

export default TestApi
