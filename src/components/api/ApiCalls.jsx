import { useState, useEffect } from 'react'

/**
 * Composant qui retourne les information de l'api suivant une url sous forme de tableau de 3 éléments
 * @param {URL} apiUrl url de l'api contenant les informations utiles
 * @returns [error, isLoaded, items]
 */
function ApiCall(apiUrl) {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [apiUrl])
  return [error, isLoaded, items]
}

function firstNameCall(apiUrl) {
  const [error, isLoaded, items] = ApiCall(apiUrl)

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return items.data.userInfos.firstName
  }
}

export { ApiCall, firstNameCall }
