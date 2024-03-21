import React from 'react'
import './../scss/components/weight.scss'
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

function Weight({ activity }) {
  /*
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  */

  const RadiusBar = (props) => {
    const { fill, x, y, width, height } = props

    //return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />

    return <rect x={x} width={width} height={height} ry="4" y={y} fill={fill} />
  }

  const tooltipLabelStyle = {
    display: 'none',
  }

  const tooltipWrapperStyle = {
    color: 'white',
    backgroundColor: '#ff0101 !important',
    width: '40px',
    height: '63px',
  }

  const tooltipItemStyle = {
    color: 'white',
    backgroundColor: '#ff0101',
    fontSize: '7px',
  }

  return (
    <React.StrictMode>
      <div className="weight">
        <div className="weight_text_title">Activité quotidienne</div>
        <ResponsiveContainer width="100%" height={270}>
          <BarChart data={activity}>
            <CartesianGrid strokeDasharray="1 3" vertical={false} />
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <YAxis
              orientation="right"
              dataKey="calories"
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              separator=""
              wrapperStyle={tooltipWrapperStyle}
              itemStyle={tooltipItemStyle}
              contentStyle={tooltipWrapperStyle}
              labelStyle={tooltipLabelStyle}
            />
            <Legend
              verticalAlign="top"
              height={80}
              iconType="circle"
              iconSize="8"
            />
            <Bar
              dataKey="kilogram"
              fill="#282D30"
              barSize={7}
              shape={<RadiusBar />}
            />
            <Bar dataKey="calories" fill="#E60000" barSize={7} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </React.StrictMode>
  )
}

/*
        {activity.map((a) => {
          return (
            <p key={a.calories}>
              day : {a.day} - k : {a.kilogram} - cal : {a.calories}
            </p>
          )
        })}
        */

export default Weight
