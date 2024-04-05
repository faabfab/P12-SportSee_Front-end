import React from 'react'
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'
import './../../scss/components/charts/scorePieChart.scss'

/**
 * Composant qui affiche le score moyen de l'utilisateur
 * @param {Object} scoreName score or todayScore
 * @returns void
 */
function ScoreRadialBarChart({ scoreName }) {
  if (typeof scoreName != 'number') {
    scoreName = 0
  }
  const scoreValue = 180 * (1 - Number(scoreName))
  const data = [
    {
      uv: 10,
      fill: '#ff0101',
    },
  ]

  return (
    <React.StrictMode>
      <div className="score_title">Score</div>
      <div className="score_text">
        <div className="score_text_container">
          <span>
            {scoreName * 100}%<br />
          </span>{' '}
          de votre objectif
        </div>
      </div>
      <div className="score_chart">
        <ResponsiveContainer width="90%" height={230}>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="65%"
            barSize={10}
            data={data}
            startAngle={180}
            endAngle={scoreValue}
          >
            <circle fill="#fff" cx="50%" cy="50%" r="26%" />
            <RadialBar
              minAngle={15}
              background
              clockWise={true}
              dataKey="uv"
              cornerRadius={5}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </React.StrictMode>
  )
}

export default ScoreRadialBarChart
