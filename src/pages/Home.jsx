import React from 'react'
import './../scss/pages/home.scss'
import UserPerformances from './../datas/user_performance.json'
import Hello from '../components/Hello'
import KeyData from './../components/KeyData'
import Weight from '../components/charts/ActivityBarChart'
import AverageSessions from '../components/charts/AverageSessionsLineChart'
import Performances from '../components/charts/PerformancesRadarChart'
import Score from '../components/charts/ScoreRadialBarChart'

function Home() {
  return (
    <React.StrictMode>
      <Hello apiUrl="http://localhost:3000/user/18" />
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="home_infos">
        <div className="home_infos_activities">
          <div className="home_infos_activities_weight">
            <Weight apiUrl="http://localhost:3000/user/18/activity" />
          </div>
          <div className="home_infos_activities_part2">
            <div className="home_infos_activities_part2_average-sessions">
              <AverageSessions apiUrl="http://localhost:3000/user/18/average-sessions" />
            </div>
            <div className="home_infos_activities_part2_performances">
              <Performances
                perfsKind={UserPerformances.data.kind}
                apiUrl="http://localhost:3000/user/18/performance"
              />
            </div>
            <div className="home_infos_activities_part2_score">
              <Score apiUrl="http://localhost:3000/user/18" />
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
