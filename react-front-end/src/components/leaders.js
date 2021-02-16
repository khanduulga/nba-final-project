import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";



export default function Leaders(props) {

  console.log(props.leaders.resultSet);
  const headers = props.leaders.resultSet.headers;
  const players = props.leaders.resultSet.rowSet;
  headers[0] = 'id';

  const columns = [
    { field: 'id', hide: true},
    { field: 'RANK', headerName: 'Rank', width: 65 },
    { field: 'PLAYER', headerName: 'Name', width: 115 },
    { field: 'TEAM', headerName: 'Team', width: 75 },
    {
      field: 'GP',
      headerName: 'GP',
      type: 'number',
      width: 75,
    },
    {
      field: 'MIN',
      headerName: 'MIN',
      type: 'number',
      width: 75,
    },
    {
      field: 'FGM',
      headerName: 'FGM',
      type: 'number',
      width: 75,
    },
    {
      field: 'FGA',
      headerName: 'FGA',
      type: 'number',
      width: 75,
    },
    {
      field: 'FG_PCT',
      headerName: 'FGPCT',
      type: 'number',
      width: 75,
    },
    {
      field: 'FG3M',
      headerName: 'FG3M',
      type: 'number',
      width: 75,
    },
    {
      field: 'FG3A',
      headerName: 'FG3A',
      type: 'number',
      width: 80,
    },
    {
      field: 'FG3_PCT',
      headerName: 'FG3PCT',
      type: 'number',
      width: 85,
    },
    {
      field: 'FTM',
      headerName: 'FTM',
      type: 'number',
      width: 75,
    },
    {
      field: 'FTA',
      headerName: 'FTA',
      type: 'number',
      width: 75,
    },
    {
      field: 'FT_PCT',
      headerName: 'FGPCT',
      type: 'number',
      width: 80,
    },
    {
      field: 'OREB',
      headerName: 'OREB',
      type: 'number',
      width: 75,
    },
    {
      field: 'DREB',
      headerName: 'DREB',
      type: 'number',
      width: 75,
    },
    {
      field: 'REB',
      headerName: 'REB',
      type: 'number',
      width: 75,
    },
    {
      field: 'AST',
      headerName: 'AST',
      type: 'number',
      width: 75,
    },
    {
      field: 'STL',
      headerName: 'STL',
      type: 'number',
      width: 75,
    },
    {
      field: 'BLK',
      headerName: 'BLK',
      type: 'number',
      width: 75,
    },
    {
      field: 'TOV',
      headerName: 'TOV',
      type: 'number',
      width: 75,
    },
    {
      field: 'PTS',
      headerName: 'PTS',
      type: 'number',
      width: 75,
    },
    {
      field: 'EFF',
      headerName: 'EFF',
      type: 'number',
      width: 75,
    }
  ];

  const rows = [];

  const playersArray = [];

  players.map((player) => {
    let playerObject = {};
    headers.map((header, index) => {
      playerObject[header] = player[index];
    })
    playersArray.push(playerObject);
  })

  console.log(playersArray)

  const theme = createMuiTheme({
    typography: {
      fontSize: 12
    }})

  

  return (
    <div style={{ height: 750, width: '100%' }}>
      <MuiThemeProvider theme={theme}>
        <DataGrid rows={playersArray} columns={columns} pageSize={20} checkboxSelection disableColumnMenu={true} checkboxSelection={false} sortingOrder={['desc']}/>
      </MuiThemeProvider>
    </div>
  );
}