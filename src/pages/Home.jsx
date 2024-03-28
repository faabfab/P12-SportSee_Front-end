import React from 'react'
import './../scss/pages/home.scss'
import UserPerformances from './../datas/user_performance.json'
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
  return (
    <React.StrictMode>
      <FirstName apiUrl="http://localhost:3000/user/18" />
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="home_infos">
        <div className="home_infos_activities">
          <div className="home_infos_activities_weight">
            <ActivityBarChart apiUrl="http://localhost:3000/user/18/activity" />
          </div>
          <div className="home_infos_activities_part2">
            <div className="home_infos_activities_part2_average-sessions">
              <AverageSessionsLineChart apiUrl="http://localhost:3000/user/18/average-sessions" />
            </div>
            <div className="home_infos_activities_part2_performances">
              <PerformancesRadarChart
                perfsKind={UserPerformances.data.kind}
                apiUrl="http://localhost:3000/user/18/performance"
              />
            </div>
            <div className="home_infos_activities_part2_score">
              <ScoreRadialChart apiUrl="http://localhost:3000/user/18" />
            </div>
          </div>
        </div>
        <div className="home_infos_keyData">
          <KeyData apiUrl="http://localhost:3000/user/18" />
        </div>
      </div>
    </React.StrictMode>
  )
}

export default Home
