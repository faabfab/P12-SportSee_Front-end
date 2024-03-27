import { useState, useEffect } from 'react'

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
  // console.log(error)
  // console.log(isLoaded)
  // console.log(items)
  return [error, isLoaded, items]
}

export default ApiCall
