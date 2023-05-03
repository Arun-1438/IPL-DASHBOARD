// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {IplTeams: [], isLoading: true}

  componentDidMount() {
    this.getIplData()
  }

  getIplData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({IplTeams: updatedData, isLoading: false})
  }

  render() {
    const {IplTeams, isLoading} = this.state
    console.log(IplTeams)
    console.log(isLoading)
    return (
      <div className="main">
        <div className="logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="heading">IPL DashBoard</h1>
        </div>
        <ul className="list-container">
          {isLoading ? (
            <div data-testid="loader" className="reload">
              <Loader type="Oval" color="#00BFFF" height={600} width={100} />
            </div>
          ) : (
            IplTeams.map(each => <TeamCard teamInfo={each} key={each.id} />)
          )}
        </ul>
      </div>
    )
  }
}

export default Home
