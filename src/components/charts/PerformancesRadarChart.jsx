import React from 'react'

function Performances({ perfsKind, perfsData }) {
  var arrayperfsKind = []
  for (const [key, value] of Object.entries(perfsKind)) {
    arrayperfsKind.push(`${key}: ${value}`)
  }
  return (
    <React.StrictMode>
      {arrayperfsKind.map((kind) => {
        return <p key={arrayperfsKind.indexOf(kind)}>{kind}</p>
      })}
      {perfsData.map((perfdata) => {
        return (
          <p key={perfdata.kind}>
            valeur :{perfdata.value} - kind : {perfdata.kind}
          </p>
        )
      })}
    </React.StrictMode>
  )
}

export default Performances
