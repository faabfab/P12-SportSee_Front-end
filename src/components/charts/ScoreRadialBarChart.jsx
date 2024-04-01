import React from 'react'
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'
import './../../scss/components/charts/scorePieChart.scss'

/**
 * Composant qui affiche le score moyen de l'utilisateur
 * @param {Object} scoreName score or todayScore
 * @returns void
 */
function ScoreRadialBarChart({ scoreName }) {
  const data = [
    {
      uv: 100,
      fill: '#ff0101',
    },
  ]

  return (
    <React.StrictMode>
      <div className="score_title">Score</div>
      <div className="score_text">
        <span>
          {scoreName * 100}%<br />
        </span>{' '}
        de votre objectif
      </div>
      <div className="score_chart">
        <ResponsiveContainer width="90%" height={230}>
          <RadialBarChart
            innerRadius="90%"
            outerRadius="100%"
            data={data}
            startAngle={180}
            endAngle={180 * (1 - scoreName)}
            cornerRadius={5}
          >
            <RadialBar
              minAngle={15}
              background
              clockWise={true}
              dataKey="uv"
              cornerRadius={5}
            />
            <circle fill="#fff" cx="50%" cy="50%" r={'72.5px'} />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </React.StrictMode>
  )
}

export default ScoreRadialBarChart
