import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import {
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";

export default function PlayerGameLog(props) {
  const games = props.gameLog.events;

  console.log(props.gameLog)

  const columns = [
    { field: 'id', hide: true},
    { field: 'atVs', headerName: 'atVs', width: 63 },
  ]

  let rows = []
  for (let game in games) {
    rows.push({id: games[game].id, atVs:  games[game].atVs})
  }
  // console.log(rows);

  const theme = createMuiTheme({
    typography: {
      fontSize: 12
    }})

  return(
    <div className="player-stats">
      <h1>Player Game Log</h1>
        <div style={{ height: 800, width: '100%', paddingTop: '15px'}}>
          <MuiThemeProvider theme={theme}>
            <DataGrid rows={rows} columns={columns} pageSize={20} checkboxSelection disableColumnMenu={true} checkboxSelection={false} />
          </MuiThemeProvider>
        </div>
    </div>
  )
}