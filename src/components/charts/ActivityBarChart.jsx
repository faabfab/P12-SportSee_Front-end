import React from 'react'
import ApiCall from './../ApiCall'
import './../../scss/components/charts/activityBarChart.scss'
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from 'recharts'

/**
 * Composant qui affiche l'activité quotidienne sous forme d’un BarChart de l'utilisateur
 * @param {URL} param0 url de l'api contenant les informations utiles
 * @returns ActivityBarChart
 */
function ActivityBarChart({ apiUrl }) {
  const [error, isLoaded, items] = ApiCall(apiUrl)

  const tooltipLabelStyle = {
    display: 'none',
  }

  const tooltipWrapperStyle = {
    color: 'white',
    backgroundColor: '#ff0101 !important',
    width: '40px',
    height: '63px',
    fontSize: '7px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  }

  const tooltipItemStyle = {
    color: 'white',
    backgroundColor: '#ff0101',
    fontSize: '7px',
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={tooltipWrapperStyle}>
          <p style={tooltipItemStyle}>{payload[0].value}Kg</p>
          <p style={tooltipItemStyle}>{payload[1].value}KCal</p>
        </div>
      )
    }
    return null
  }

  const renderLegendText = (value) => {
    switch (value) {
      case 'kilogram':
        value = 'Poids (kg)'
        break
      case 'calories':
        value = 'Calories brûlées (kCal)'
        break
      default:
        break
    }
    return <span>{value}</span>
  }

  const xTickFormat = (x) => {
    let i = 0
    items.data.sessions.forEach((act) => {
      if (act.day === x) {
        i = items.data.sessions.indexOf(act)
      }
    })
    return i + 1
  }

  const yTickFormat = (y) => {
    return y / 1000
  }

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <React.StrictMode>
        <div className="weight">
          <div className="weight_text_title">Activité quotidienne</div>
          <ResponsiveContainer width="100%" height={270}>
            <BarChart data={items.data.sessions}>
              <CartesianGrid strokeDasharray="1 3" vertical={false} />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tickFormatter={xTickFormat}
              />
              <YAxis
                orientation="right"
                dataKey="calories"
                axisLine={false}
                tickLine={false}
                tickFormatter={yTickFormat}
              />
              <Tooltip
                separator=""
                wrapperStyle={tooltipWrapperStyle}
                itemStyle={tooltipItemStyle}
                contentStyle={tooltipWrapperStyle}
                labelStyle={tooltipLabelStyle}
                content={<CustomTooltip />}
                cursor={{ fill: '#DFDFDF' }}
              />
              <Legend
                verticalAlign="top"
                height={80}
                iconType="circle"
                iconSize="7"
                margin={{ top: 0, left: '20px', right: 0, bottom: 0 }}
                formatter={renderLegendText}
              />
              <Bar
                dataKey="kilogram"
                fill="#282D30"
                barSize={7}
                radius={[3, 3, 0, 0]}
              />
              <Bar
                dataKey="calories"
                fill="#E60000"
                barSize={7}
                radius={[3, 3, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </React.StrictMode>
    )
  }
}

export default ActivityBarChart
