// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails
  const classname = matchStatus === 'Won' && 'won'
  return (
    <li className="match-card">
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={`lose ${classname}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
