import React from 'react'
import './../../scss/components/charts/averageSessionsLineChart.scss'
import { ResponsiveContainer, LineChart, XAxis, Tooltip, Line } from 'recharts'

/**
 * Composants qui affiche la durée moyenne des sessions de l'utilisateur
 * @param {Object} sessions durée des sessions par jour
 * @returns void
 */
function AverageSessionsLineChart({ sessions }) {
  const tooltipLabelStyle = {
    display: 'none',
  }
  const tooltipItemStyle = {
    color: 'black',
    fontSize: '8px',
  }

  const tooltipWrapperStyle = {
    width: '40px',
    height: '25px',
    fontSize: '7px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={tooltipWrapperStyle}>
          <p style={tooltipItemStyle}>{payload[0].value}</p>
        </div>
      )
    }
    return null
  }

  const xFormatDay = (x) => {
    switch (x) {
      case 1:
        return 'L'
      case 2:
        return 'M'
      case 3:
        return 'M'
      case 4:
        return 'J'
      case 5:
        return 'V'
      case 6:
        return 'S'
      case 7:
        return 'D'
      default:
        break
    }
  }

  return (
    <React.StrictMode>
      <div className="sessions">
        <div className="sessions_title">Durée moyenne des sessions</div>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={sessions}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tickFormatter={xFormatDay}
              fill="#ffffff"
              tick={{ fill: 'white', opacity: 0.5, fontSize: '15px' }}
            />
            <Tooltip
              labelStyle={tooltipLabelStyle}
              itemStyle={tooltipItemStyle}
              content={<CustomTooltip />}
              cursor={false}
            />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="#FFFFFF"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </React.StrictMode>
  )
}
export default AverageSessionsLineChart
