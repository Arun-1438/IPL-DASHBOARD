// Write your code here

import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamInfo} = props
  const {id, name, teamImageUrl} = teamInfo
  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="list-item">
        <img src={teamImageUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
