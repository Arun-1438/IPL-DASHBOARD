// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    result,
    venue,
    date,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestDetails
  return (
    <div className="latest-card">
      <div className="first">
        <div className="left">
          <p>{competingTeam}</p>
          <p className="date">{date}</p>
          <p>{result}</p>
          <p>{venue}</p>
        </div>
        <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
      </div>
      <hr className="hr-line" />
      <div className="right">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpiress</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
