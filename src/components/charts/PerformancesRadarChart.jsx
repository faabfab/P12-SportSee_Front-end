import React from 'react'
import ApiCall from './../ApiCall'
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from 'recharts'

function PerformancesRadarChart({ apiUrl, perfsKind }) {
  const [error, isLoaded, items] = ApiCall(apiUrl)

  //console.log(Object.entries(items.data.kind))

  // const kindArray = Object.entries(items.data.kind)

  const kindArray = Object.entries(perfsKind)

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

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <React.StrictMode>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            outerRadius={90}
            data={items.data.data}
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
}

export default PerformancesRadarChart
