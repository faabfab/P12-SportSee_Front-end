import React from 'react'
import './../../scss/components/charts/averageSessionsLineChart.scss'
import {
  LineChart,
  //CartesianGrid,
  XAxis,
  //YAxis,
  Tooltip,
  //Legend,
  Line,
} from 'recharts'

function AverageSessions({ averageSessions }) {
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

  return (
    <React.StrictMode>
      <div className="sessions">
        <div className="sessions_title">Durée moyenne des sessions</div>
        <LineChart width={260} height={130} data={averageSessions}>
          <XAxis dataKey="day" axisLine={false} tickLine={false} />
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
      </div>
    </React.StrictMode>
  )
}

export default AverageSessions
