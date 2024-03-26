import React from 'react'
import { PieChart, Pie, ResponsiveContainer } from 'recharts'
import './../../scss/components/charts/scorePieChart.scss'

function Score({ userScore }) {
  const data01 = [
    {
      value: 100,
    },
  ]
  const data02 = [
    {
      value: 100,
    },
  ]

  console.log(userScore.score)
  return (
    <React.StrictMode>
      <div className="score_title">Score</div>
      <div className="score_text">
        <span>{userScore.score}%</span> de votre objectif
      </div>
      <div className="score_chart">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <text />
            <Pie
              data={data01}
              dataKey={'value'}
              cx="50%"
              cy="50%"
              outerRadius={70}
              fill="#FFFFFF"
            />
            <Pie
              data={data02}
              dataKey="value"
              startAngle={180}
              endAngle={180 - (userScore.score * 100 * 180) / 100}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={80}
              cornerRadius={5}
              fill="#ff0101"
            />
          </PieChart>{' '}
        </ResponsiveContainer>
      </div>
    </React.StrictMode>
  )
}

export default Score
