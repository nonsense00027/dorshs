import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../Landing.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#E50E0E',
    height: 140,
    width: 100,  
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className='container' container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
