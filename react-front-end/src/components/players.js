import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';
import {
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";

// const MyFormatter = function(props) {
//   return <a href=
// }

export default function Player(props) {

  const [loading, setLoading] = useState(true)

  const [players, setPlayers] = useState({})

  useEffect(() => {axios.get('https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/statistics/byathlete?region=us&lang=en&contentorigin=espn&isqualified=true&page=1&limit=256&sort=general.avgMinutes%3Adesc')
  .then((response) => {
    setPlayers(prev => ({
      ...prev,
      players: response.data
    }))
    setLoading(false)
  })}, [])

  if(loading){
    return(null)
  }
  const allPlayers = players.players.athletes
  const theme = createMuiTheme({
    typography: {
      fontSize: 12,
      textDecoration: 'none',
      color: 'black'
    }})

  const columns = [
    { field: 'id', hide: true},
    {field: 'displayName', headerName: 'Name', width: 200, renderCell: (params) => {
      return(<a href={`/player/${params.row.id}`}>{params.row.displayName}</a>)
    }},
    {field: 'teamShortName', headerName: 'Teams'},
    {field: 'position', headerName: 'Position', width: 200}
  ]
  const rows = [
  ]

  allPlayers.map((player) => {
    const playerObject = {
      id: player.athlete.id,
      displayName: player.athlete.displayName,
      teamShortName: player.athlete.teamShortName,
      position: player.athlete.position.name
    }
    rows.push(playerObject)
  })
  // console.log(rows)

  return (
    <div style={{ height: 750, width: '40%', marginLeft: 'auto', marginRight: 'auto', paddingTop: '1px'}}>
      <h1>Players</h1>
      <MuiThemeProvider theme={theme}>
        <DataGrid rows={rows} columns={columns} pageSize={20} disableColumnMenu={true} checkboxSelection={false} sortModel={[
          {
            field: 'displayName', sort: 'asc'
          }
        ]}/>
      </MuiThemeProvider>
    </div>
  );
}