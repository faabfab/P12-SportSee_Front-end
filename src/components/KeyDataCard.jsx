import React from 'react'
import CardKeyData from './CardKeyData'
import '../scss/components/keyDataCard.scss'

/**
 * Composant qui affiche les informations clés de l'utilisateur
 * @param {Object} keyData informations clés de l'utilisateur
 * @returns void
 */
function keyDataCard({ keyData }) {
  return (
    <React.StrictMode>
      <CardKeyData name="calorie" content={keyData.calorieCount / 1000} />
      <CardKeyData name="protein" content={keyData.proteinCount} />
      <CardKeyData name="carbohydrate" content={keyData.carbohydrateCount} />
      <CardKeyData name="lipid" content={keyData.lipidCount} />
    </React.StrictMode>
  )
}

export default keyDataCard
