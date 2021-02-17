import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShotChart from './ShotChart'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function Player(props) {

  const [loading, setLoading] = useState(true);
  let { path, url } = useRouteMatch();
  let playerID = useParams();
  const [state, setState] = useState({
    player_overview_stats: [],
    player_overview_all: [],
    player_stats: [],
    player_game_log: [],
  });
  
  useEffect(() => {
    const url0 = axios.get(`https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/${playerID.id}/overview?region=us&lang=en&contentorigin=espn`);
    const url1 = axios.get(`https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/${playerID.id}/?region=us&lang=en&contentorigin=espn`);
    const url2 = axios.get(`https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/${playerID.id}/stats?region=us&lang=en&contentorigin=espn`);
    const url3 = axios.get(`https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes/${playerID.id}/gamelog?region=us&lang=en&contentorigin=espn`);
    Promise.all([
      Promise.resolve(url0),
      Promise.resolve(url1),
      Promise.resolve(url2),
      Promise.resolve(url3)
    ])
    .then((all) => {
      setState(prev => ({
        ...prev,
        player_overview_stats: all[0].data,
        player_overview_all: all[1].data,
        player_stats: all[2].data,
        player_game_log: all[3].data
      }))
      setLoading(false)
    })
  }, [])




  if(loading) {
    return(null)
  }

  console.log(state.player_overview_all, state.player_overview_stats, state.player_stats, state.player_game_log)

  return(
    <div>
      <h1>{state.player_overview_all.athlete.displayName}</h1>
      <img src={`${state.player_overview_all.athlete.headshot.href}`} style={{ width: '20em' }}/>

      <Link to={`${url}/shotchart`}>player shot chart</Link>

      <Switch>
        <Route exact path={path}>
          <h3>Player stats</h3>
        </Route>
        <Route path={`${path}/shotchart`}>
          <ShotChart />
        </Route>
      </Switch>

    </div>
  )

}