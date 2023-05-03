// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
  }

  componentDidMount() {
    this.getMatchData()
  }

  getMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const TeamMatch = await response.json()
    const formattedTeamMatch = {
      latestMatch: TeamMatch.latest_match_details,
      recentMatches: TeamMatch.recent_matches,
      teamBannerUrlLink: TeamMatch.team_banner_url,
    }
    // console.log(formattedTeamMatch)
    const {latestMatch, recentMatches, teamBannerUrlLink} = formattedTeamMatch
    console.log(recentMatches)
    const updateRecentMatches = recentMatches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      date: each.date,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      matchStatus: each.match_status,
      secondInnings: each.second_innings,
      venue: each.venue,
    }))

    this.setState({
      teamBannerUrl: teamBannerUrlLink,
      latestMatchDetails: {
        umpires: latestMatch.umpires,
        result: latestMatch.result,
        manOfTheMatch: latestMatch.man_of_the_match,
        date: latestMatch.date,
        competingTeam: latestMatch.competing_team,
        competingTeamLogo: latestMatch.competing_team_logo,
        firstInnings: latestMatch.first_innings,
        matchStatus: latestMatch.match_status,
        secondInnings: latestMatch.second_innings,
        venue: latestMatch.venue,
      },
      recentMatches: updateRecentMatches,
      isLoading: false,
    })
  }

  render() {
    const {
      isLoading,
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
    } = this.state
    const {match} = this.props
    const {path} = match
    console.log(path.id)
    return (
      <div className="main-container">
        {isLoading ? (
          <div data-testid="loader" className="reload">
            <Loader type="Oval" color="#00BFFF" height={600} width={100} />
          </div>
        ) : (
          <>
            <img className="team-image" src={teamBannerUrl} alt="team banner" />
            <h3>Latest Match</h3>
            <div className="latest-match">
              <LatestMatch latestDetails={latestMatchDetails} />
            </div>
            <ul className="list-cont">
              {recentMatches.map(each => (
                <MatchCard matchDetails={each} key={each.competingTeam} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
