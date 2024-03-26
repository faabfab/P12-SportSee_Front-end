import React from 'react'
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from 'recharts'

function Performances({ perfsKind, perfsData }) {
  const kindArray = Object.entries(perfsKind)
  //console.log(kindArray.forEach((e) => console.log(e[0], e[1])))

  const kindFormatter = (perfsData) => {
    // return kindArray[perfsData - 1][1]

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

  return (
    <React.StrictMode>
      <ResponsiveContainer>
        <RadarChart
          outerRadius={90}
          data={perfsData}
          width="100%"
          height="100%"
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

export default Performances
