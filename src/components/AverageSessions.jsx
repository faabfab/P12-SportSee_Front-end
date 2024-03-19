import React from 'react'

function AverageSessions({ averageSessions }) {
  return (
    <React.StrictMode>
      {averageSessions.map((session) => {
        return (
          <p key={session.day}>
            day : {session.day} - Length : {session.sessionLength}
          </p>
        )
      })}
    </React.StrictMode>
  )
}

export default AverageSessions
