import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 1),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(4),
  },
}));

export default function GameScores() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={1}>
          <Paper className={classes.paper}>Sun</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>MEM 30 MIA 34</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>TOR 45 WAS 29</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>GSW 12 BKN 21</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>DAL DEN 8:30</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>SAC LAC 10:30</Paper>
        </Grid>
        <ChevronRightIcon />
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={24} spacing={1}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}