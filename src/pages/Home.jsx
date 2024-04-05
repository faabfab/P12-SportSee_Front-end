import React from 'react'
import './../scss/pages/home.scss'

import {
  firstNameCall,
  activityCall,
  averageSessionsCall,
  performanceKindCall,
  performanceDataCall,
  scoreCall,
  keyDataCall,
} from './../components/api/ApiCalls'

import FirstName from '../components/FirstName'
import KeyData from '../components/KeyDataCard'
import ActivityBarChart from '../components/charts/ActivityBarChart'
import AverageSessionsLineChart from '../components/charts/AverageSessionsLineChart'
import PerformancesRadarChart from '../components/charts/PerformancesRadarChart'
import ScoreRadialChart from '../components/charts/ScoreRadialBarChart'

/**
 * Composant qui retourne la homepage du site
 * @returns HomePage
 */
function Home() {
  const ScoreValue = scoreCall()

  return (
    <React.StrictMode>
      <FirstName firstName={firstNameCall()} />
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="home_infos">
        <div className="home_infos_activities">
          <div className="home_infos_activities_weight">
            <ActivityBarChart sessions={activityCall()} />
          </div>
          <div className="home_infos_activities_part2">
            <div className="home_infos_activities_part2_average-sessions">
              <AverageSessionsLineChart sessions={averageSessionsCall()} />
            </div>
            <div className="home_infos_activities_part2_performances">
              <PerformancesRadarChart
                kind={performanceKindCall()}
                data={performanceDataCall()}
              />
            </div>
            <div className="home_infos_activities_part2_score">
              <ScoreRadialChart scoreName={ScoreValue} />
            </div>
          </div>
        </div>
        <div className="home_infos_keyData">
          <KeyData keyData={keyDataCall()} />
        </div>
      </div>
    </React.StrictMode>
  )
}

export default Home
