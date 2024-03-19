import React from 'react'
import CardKeyData from './CardKeyData'
import '../scss/components/keyData.scss'

function keyData({ keyData }) {
  return (
    <React.StrictMode>
      <CardKeyData name="calorie" content={keyData.calorieCount} />
      <CardKeyData name="protein" content={keyData.proteinCount} />
      <CardKeyData name="carbohydrate" content={keyData.carbohydrateCount} />
      <CardKeyData name="lipid" content={keyData.lipidCount} />
    </React.StrictMode>
  )
}

export default keyData
