import React from 'react';
import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 1),
    marginTop: -10,
  },
  paper: {
    maxWidth: 200,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: '#949499',
    color: 'white',
    textEmphasis: 'bold',
    fontSize: 15,
    boxShadow: '40px',
  },
  paperAlt: {
    maxWidth: 200,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: '#242429',
    color: 'gold',
    textEmphasis: 'bold',
    fontSize: 18,
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

  const currentDay = state.date.slice(-2);
  const currentYear = state.date.substring(0,4);
  const currentGames = state.games

  console.log(currentGames)

  const mappedGames = currentGames.map(game => {
    return (
      <Grid item xs={1.5}>
        <Paper className={classes.paper}>
          <img className={classes.img} alt="awayLogo" src={`team-logos/${game.awayTeam.teamTricode}.svg`} /> {game.awayTeam.teamTricode} {game.period > 0 ? game.awayTeam.score : null} {game.period > 0 ? null : "at"} <img className={classes.img} alt="homeLogo" src={`team-logos/${game.homeTeam.teamTricode}.svg`} />{game.homeTeam.teamTricode} {game.period > 0 ? game.homeTeam.score : null} {game.gameStatusText}
        </Paper>
      </Grid>
    )
  })

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={1.5}>
          <Paper className={classes.paperAlt}> Feb {currentDay}, {currentYear}</Paper>
        </Grid>
        {mappedGames}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}