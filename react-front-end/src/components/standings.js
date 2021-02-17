import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
import axios from 'axios';


export default function Leaders(props) {

  const [] = useState({})

  useEffect(() => {axios.get('')
  .then((response) => {
    setleagueLeaders(prev => ({
      ...prev,
      leagueLeaders: response.data
    }))
  })}, [])


  // console.log(props.leaders.resultSet);
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
  ];

  const teamsArray = [];

  teams.map((team) => {
    let teamObject = {};
    headers.map((header, index) => {
      teamObject[header] = team[index];
    })
    teamsArray.push(teamObject);
  })

  // console.log(playersArray)

  const theme = createMuiTheme({
    typography: {
      fontSize: 12
    }})

  return (
    <div style={{ height: 750, width: '96%' }}>
      <h2>League Leaders</h2>
      <MuiThemeProvider theme={theme}>
        <DataGrid rows={playersArray} columns={columns} pageSize={20} checkboxSelection disableColumnMenu={true} checkboxSelection={false} sortingOrder={['desc']}/>
      </MuiThemeProvider>
    </div>
  );
}