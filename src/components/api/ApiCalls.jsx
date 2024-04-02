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

/**
 * URLs
 */
const id = '18'
const userUrl = 'http://localhost:3000/user/' + id
const activityUrl = 'http://localhost:3000/user/' + id + '/activity'
const averageSessionsUrl =
  'http://localhost:3000/user/' + id + '/average-sessions'
const performanceUrl = 'http://localhost:3000/user/' + id + '/performance'

/**
 * Fonction qui retourne le prénom de l'utilisateur après appel à l'API
 * @returns {Object} Le prénom de l'utilisateur
 */
const firstNameCall = () => {
  const [error, isLoaded, items] = ApiCall(userUrl)
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return items.data.userInfos.firstName
  }
}

/**
 * Fonction qui retourne les données de l’activité quotidienne de l'utilisateur après appel à l'API
 * @returns {Object} données de l’activité quotidienne
 */
const activityCall = () => {
  const [error, isLoaded, items] = ApiCall(activityUrl)
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return items.data.sessions
  }
}

/**
 * Fonction qui retourne la durée moyenne des sessions de l'utilisateur après appel à l'API
 * @returns {Object} durée moyenne des sessions
 */
const averageSessionsCall = () => {
  const [error, isLoaded, items] = ApiCall(averageSessionsUrl)
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return items.data.sessions
  }
}

/**
 * Fonction qui retourne les types d’activité de l'utilisateur après appel à l'API
 * @returns {Object} types d’activité
 */
const performanceKindCall = () => {
  const [error, isLoaded, items] = ApiCall(performanceUrl)
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return items.data.kind
  }
}

/**
 * Fonction qui retourne les données d’activité de l'utilisateur après appel à l'API
 * @returns {Object} données d’activité
 */
const performanceDataCall = () => {
  const [error, isLoaded, items] = ApiCall(performanceUrl)
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return items.data.data
  }
}

/**
 * Fonction qui retourne score moyen de l'utilisateur après appel à l'API
 * @returns {Object} score moyen
 */
const scoreCall = () => {
  const [error, isLoaded, items] = ApiCall(userUrl)
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    const scoreName = items.data.score
      ? items.data.score
      : items.data.todayScore
    return scoreName
  }
}

/**
 * Fonction qui retourne les informations clés de l'utilisateur après appel à l'API
 * @returns {Object} informations clés
 */
const keyDataCall = () => {
  const [error, isLoaded, items] = ApiCall(userUrl)
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return items.data.keyData
  }
}

export {
  firstNameCall,
  activityCall,
  averageSessionsCall,
  performanceKindCall,
  performanceDataCall,
  scoreCall,
  keyDataCall,
}
