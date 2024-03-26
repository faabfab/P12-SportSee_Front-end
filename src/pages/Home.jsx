import React from 'react'
import './../scss/pages/home.scss'
import User from './../datas/user.json'
import UserActivity from './../datas/user_activity.json'
import UserAverageSessions from './../datas/user_average-sessions.json'
import UserPerformances from './../datas/user_performance.json'
import Hello from '../components/Hello'
import KeyData from './../components/KeyData'
import Weight from '../components/charts/ActivityBarChart'
import AverageSessions from '../components/charts/AverageSessionsLineChart'
import Performances from '../components/charts/PerformancesRadarChart'
import Score from '../components/charts/ScorePieChart'

function Home() {
  return (
    <React.StrictMode>
      <Hello firstName={User.data.userInfos.firstName} />
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="home_infos">
        <div className="home_infos_activities">
          <div className="home_infos_activities_weight">
            <Weight activity={UserActivity.data.sessions} />
          </div>
          <div className="home_infos_activities_part2">
            <div className="home_infos_activities_part2_average-sessions">
              <AverageSessions
                averageSessions={UserAverageSessions.data.sessions}
              />
            </div>
            <div className="home_infos_activities_part2_performances">
              <Performances
                perfsKind={UserPerformances.data.kind}
                perfsData={UserPerformances.data.data}
              />
            </div>
            <div className="home_infos_activities_part2_score">
              <Score userScore={User.data} />
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
