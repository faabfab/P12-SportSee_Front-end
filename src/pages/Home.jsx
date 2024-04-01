import React from 'react'
import './../scss/pages/home.scss'
import User from './../datas/user.json'
import UserActivity from './../datas/user_activity.json'
import UserAverageSessions from './../datas/user_average-sessions.json'
import UserPerformance from './../datas/user_performance.json'
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
  // const id = '18'
  // const userUrl = 'http://localhost:3000/user/' + id
  // const activityUrl = 'http://localhost:3000/user/' + id + '/activity'
  // const averageSessionsUrl = 'http://localhost:3000/user/' + id + '/average-sessions'
  // const performanceUrl = 'http://localhost:3000/user/' + id + '/performance'

  const scoreName = User.data.score ? User.data.score : User.data.todayScore

  return (
    <React.StrictMode>
      <FirstName firstName={User.data.userInfos.firstName} />
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="home_infos">
        <div className="home_infos_activities">
          <div className="home_infos_activities_weight">
            <ActivityBarChart sessions={UserActivity.data.sessions} />
          </div>
          <div className="home_infos_activities_part2">
            <div className="home_infos_activities_part2_average-sessions">
              <AverageSessionsLineChart
                sessions={UserAverageSessions.data.sessions}
              />
            </div>
            <div className="home_infos_activities_part2_performances">
              <PerformancesRadarChart
                kind={UserPerformance.data.kind}
                data={UserPerformance.data.data}
              />
            </div>
            <div className="home_infos_activities_part2_score">
              <ScoreRadialChart scoreName={scoreName} />
            </div>
          </div>
        </div>
        <div className="home_infos_keyData">
          <KeyData keyData={User.data.keyData} />
        </div>
      </div>
    </React.StrictMode>
  )
}

export default Home
