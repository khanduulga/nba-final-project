import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShotChart from './ShotChart'
import Heatmap from './Heatmap'
import PlayerStats from './player-stats'
import PlayerNews from './player-news'
import PlayerGameLog from './player-game-log'
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import './player.scss'
import PlayerOverview from './player-overview'

export default function Player(props) {

  const [loading, setLoading] = useState(true);
  let { path, url } = useRouteMatch();
  let playerID = useParams();
  const [state, setState] = useState({
    player_overview_stats: [],
    player_overview_all: [],
    player_stats: [],
    player_game_log: [],
    player_playoff_stats: [],
    player_news: [],
    player_shots: []
  });

  useEffect(() => {
    const url0 = axios.get(`https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/${playerID.id}/overview?region=us&lang=en&contentorigin=espn`);
    const url1 = axios.get(`https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/${playerID.id}/?region=us&lang=en&contentorigin=espn`);
    const url2 = axios.get(`https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/${playerID.id}/stats?region=us&lang=en&contentorigin=espn`);
    const url3 = axios.get(`https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/${playerID.id}/gamelog?region=us&lang=en&contentorigin=espn`);
    const url4 = axios.get(`https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/${playerID.id}/stats?region=us&lang=en&contentorigin=espn&seasontype=3`);
    let url5 = axios.get('/api/dummy')


    if (playerID.id == '1966') {
      console.log("HERE!")
      url5 = axios.get('/api/shots?name=lebron');//1966
    }
    if (playerID.id == 3975) {
      url5 = axios.get('/api/shots?name=curry');//3975
      console.log('HERE')
    }
    
    

    Promise.all([
      Promise.resolve(url0),
      Promise.resolve(url1),
      Promise.resolve(url2),
      Promise.resolve(url3),
      Promise.resolve(url4),
      Promise.resolve(url5)
    ])
      .then((all) => {
        setState(prev => ({
          ...prev,
          player_overview_stats: all[0].data,
          player_overview_all: all[1].data,
          player_stats: all[2].data,
          player_game_log: all[3].data,
          player_playoff_stats: all[4].data,
          player_shots: all[5].data
        }))
        setLoading(false)
      })
  }, [])



  if (loading) {
    return (null)
  }


  return (
    <div>
      <div className="player-header">
        <img src={`${state.player_overview_all.athlete.headshot.href}`} alt={"Player Headshot"} style={{ width: '20em' }} />
        <table className="player-info">
          <tbody>
            <tr>
              <th colSpan="2" className="player-name">{state.player_overview_all.athlete.displayName}</th>
            </tr>
            <tr>
              <th>Team:</th>
              <td>{state.player_overview_all.athlete.team.displayName}</td>
            </tr>
            <tr>
              <th>Number:</th>
              <td>{state.player_overview_all.athlete.displayJersey}</td>
            </tr>
            <tr>
              <th>Position:</th>
              <td>{state.player_overview_all.athlete.position.displayName}</td>
            </tr>
            <tr>
              <th>Height/Weight:</th>
              <td>{state.player_overview_all.athlete.displayHeight}/ {state.player_overview_all.athlete.displayWeight}</td>
            </tr>
            <tr>
              <th>DOB (age):</th>
              <td>{state.player_overview_all.athlete.displayDOB} ({state.player_overview_all.athlete.age})</td>
            </tr>
            <tr>
              <th>Draft Info</th>
              <td>2012: Rd 1, Pk 3 (WSH)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div className="link-row">
        <Link style={{
          textDecoration: 'none',
          color: 'black'
        }} to={`${url}`}>Overview</Link>
        <Link style={{
          textDecoration: 'none',
          color: 'black'
        }} to={`${url}/stats`}>Stats</Link>
        <Link style={{
          textDecoration: 'none',
          color: 'black'
        }} to={`${url}/gamelog`}>Game Log</Link>
        <Link style={{
          textDecoration: 'none',
          color: 'black'
        }} to={`${url}/news`}>News</Link>
        <Link style={{
          textDecoration: 'none',
          color: 'black'
        }} to={`${url}/shotchart`}>Shot Chart</Link>
      </div>
      <hr />



      <Switch>
        <Route exact path={path}>
          <PlayerOverview
            stats={state.player_overview_stats.statistics}
            nextGame={state.player_overview_stats.nextGame}
          />
        </Route>
        <Route path={`${path}/stats`}>
          <PlayerStats
            stats={state.player_stats}
            playoff_stats={state.player_playoff_stats}
          />
        </Route>
        <Route path={`${path}/gamelog`}>
          <PlayerGameLog
            gameLog={state.player_game_log}
          />
        </Route>
        <Route path={`${path}/news`}>
          <PlayerNews
            news={state.player_overview_stats.news}
          />
        </Route>
        <Route path={`${path}/shotchart`}>
          <ShotChart shots={state.player_shots} />
          <Heatmap shots={state.player_shots} />
        </Route>
      </Switch>

    </div>
  )

}