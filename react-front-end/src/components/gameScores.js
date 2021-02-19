import React from 'react';
import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflowX: 'auto',
    padding: theme.spacing(0, 1),
    marginTop: -6,
    height: 100,
    display: 'flex',
    width: '100vw'
  },
  paper: {
    minWidth: '14em',
    margin: `${theme.spacing(1)}px ${theme.spacing(1)}px`,
    padding: theme.spacing(2),
    backgroundColor: '#949499',
    color: 'white',
    textEmphasis: 'bold',
    fontSize: 15,
    boxShadow: '40px',
    border: 'solid white',
    borderWidth: '2px',
    borderRadius: '5px',
  },
  paperAlt: {
    width: 100,
    margin: `${theme.spacing(1)}px ${theme.spacing(1)}px`,
    padding: theme.spacing(1),
    backgroundColor: '#242429',
    color: 'white',
    textEmphasis: 'bold',
    fontSize: 18,
    border: 'solid 1px gold',
  },
  chev: {
    marginTop: 29,
    fontSize: 48
  },
  img: {
    width: '2em',
    verticalAlign: 'middle'
  }
}));

export default function GameScores() {
  const classes = useStyles();

  const [state, setState] = useState({
    date: "",
    games: []
  })

  useEffect(() => {
    const dailyGames = `https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json`;
    axios.get(dailyGames).then((response) => {
      setState(prev => ({
        ...prev,
        date: response.data.scoreboard.gameDate,
        games: response.data.scoreboard.games
      }))
    });
  }, []);

  const currentGames = state.games


  const mappedGames = currentGames.map(game => {
    return (
      // <Grid item xs={1.5}>
        <Paper className={classes.paper}>
          <img className={classes.img} alt="awayLogo" src={`/team-logos/${game.awayTeam.teamTricode}.svg`} /> {game.awayTeam.teamTricode} {game.period > 0 ? game.awayTeam.score : null} {game.period > 0 ? null : "at"} <img className={classes.img} alt="homeLogo" src={`/team-logos/${game.homeTeam.teamTricode}.svg`} />{game.homeTeam.teamTricode} {game.period > 0 ? game.homeTeam.score : null} {game.gameStatusText}
        </Paper>
      // </Grid>
    )
  })

  function FormRow() {
    return (
      <React.Fragment>
        {/* <Grid item xs={1.5}> */}
          <Paper className={classes.paperAlt}>Scores</Paper>
        {/* </Grid> */}
        {mappedGames}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      {/* <Grid container spacing={1}> */}
        {/* <Grid container item xs={12} spacing={1}> */}
          <FormRow />
        {/* </Grid> */}
      {/* </Grid> */}
    </div>
  );
}