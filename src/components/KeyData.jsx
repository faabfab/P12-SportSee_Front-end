import React from 'react'
import CardKeyData from './CardKeyData'
import ApiCall from './ApiCall'
import '../scss/components/keyData.scss'

function keyData({ apiUrl }) {
  const [error, isLoaded, items] = ApiCall(apiUrl)

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <React.StrictMode>
        <CardKeyData
          name="calorie"
          content={items.data.keyData.calorieCount / 1000}
        />
        <CardKeyData name="protein" content={items.data.keyData.proteinCount} />
        <CardKeyData
          name="carbohydrate"
          content={items.data.keyData.carbohydrateCount}
        />
        <CardKeyData name="lipid" content={items.data.keyData.lipidCount} />
      </React.StrictMode>
    )
  }
}

export default keyData
