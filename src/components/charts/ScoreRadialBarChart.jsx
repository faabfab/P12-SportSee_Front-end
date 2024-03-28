import React from 'react'
import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'
import './../../scss/components/charts/scorePieChart.scss'
import ApiCall from './../ApiCall'

function ScoreRadialBarChart({ apiUrl }) {
  const [error, isLoaded, items] = ApiCall(apiUrl)

  const data = [
    {
      uv: 100,
      fill: '#ff0101',
    },
  ]

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <React.StrictMode>
        <div className="score_title">Score</div>
        <div className="score_text">
          <span>
            {items.data.score * 100}%<br />
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
              endAngle={180 * (1 - items.data.score)}
              cornerRadius={5}
            >
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
}

export default ScoreRadialBarChart
