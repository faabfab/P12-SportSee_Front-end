import React from 'react'
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from 'recharts'
import './../../scss/components/charts/performancesRadarChart.scss'

/**
 * Composant qui affiche type d’activité réalisée de l'utilisateur
 * @param {Object} kind type d’activité
 * @param {Object} data données associés
 * @returns void
 */
function PerformancesRadarChart({ kind, data }) {
  const kinds = kind
  const kindArray = Object.entries(kinds)

  const kindFormatter = (perfsData) => {
    switch (kindArray[perfsData - 1][1]) {
      case 'cardio':
        return 'Cardio'
      case 'energy':
        return 'Énergie'
      case 'endurance':
        return 'Endurance'
      case 'strength':
        return 'Force'
      case 'speed':
        return 'Vitesse'
      case 'intensity':
        return 'Intensité'
      default:
        break
    }
  }

  const isClient = typeof window === 'object'

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }

  const outerRadiusValue = () => {
    const size = getSize().width - 60
    if (size >= 1430) {
      return '100%'
    }
    if (1024 < size && size < 1430) {
      return '80%'
    }
    if (size <= 1024) {
      return '50%'
    }
  }

  return (
    <React.StrictMode>
      <ResponsiveContainer width="100%" height={200}>
        <RadarChart
          outerRadius={outerRadiusValue()}
          data={data}
          margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
        >
          <PolarGrid gridType="circle" />
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={kindFormatter}
            tick={{ fill: 'white', fontSize: '12px' }}
          />
          <Radar name="" dataKey="value" fill="#ff0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </React.StrictMode>
  )
}

export default PerformancesRadarChart
