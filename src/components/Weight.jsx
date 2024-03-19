import React from 'react'

function Weight({ activity }) {
  return (
    <React.StrictMode>
      {activity.map((a) => {
        return (
          <p key={a.calories}>
            day : {a.day} - k : {a.kilogram} - cal : {a.calories}
          </p>
        )
      })}
    </React.StrictMode>
  )
}

export default Weight
