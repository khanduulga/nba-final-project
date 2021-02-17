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

  let { path, url } = useRouteMatch();

  return(
    <div>
      <h1>Player Name</h1>
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