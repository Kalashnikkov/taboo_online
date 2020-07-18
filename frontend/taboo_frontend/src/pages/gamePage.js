import React from 'react';
import {
  makeStyles,
  Container,
  Paper,
  Typography,
  Button,
  ButtonGroup,
  TextField
} from '@material-ui/core';


const useStyles = makeStyles(() => ({
  root: {
    background: '#535c68',
    backgroundSize: 'cover',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  },
  containerItems: {
    width: '1000px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'

  },
  paperLayout: {
    width: '50%',
    margin: '15%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    color: '#130f40',
  },
  firstPaperLayout: {
    width: '100%',
    margin: '0%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    color: 'white'
  },
  secondPaperLayout: {
    width: '100%',
    margin: '0%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    color: 'white'
  },
  thirdPaperLayout: {
    width: '100%',
    margin: '0%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white'
  },
  fourthPaperLayout: {
    width: '100%',
    margin: '5%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#D2D8E0',
    color: 'black'
  },
  buttonLogin: {
    margin: '5%',
  },
  textInput: {
    width: '1000px'
    
  },
  title: {
    margin: '5%',
  },
  buttonGroup: {
      width: '38%',
      marginBottom: '5%',
  },

playerList: {
    marginRight: '25px'
},

outsideContainer: {
    height: '75%',
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}


}));

export const GamePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.outsideContainer}>
        <Paper elevation={0} className={classes.firstPaperLayout} variant="outlined" square>
            <Typography className={classes.playerList} component="h5" variant="h6">
                <ul>Illinois</ul>
            </Typography>
        </Paper>
        <Paper elevation={0} className={classes.secondPaperLayout} variant="outlined" square>
            <Typography className={classes.playerList} component="h5" variant="h6">
            <ul>Chicago</ul>
            <br></br>
            <ul>Midwest</ul>
            <br></br>
            <ul>Wisconsin</ul>
            <br></br>
            <ul>Indiana</ul>
            <br></br>
            <ul>State</ul>
            </Typography>
        </Paper>
      </Paper>
      <Paper className={classes.outsideContainer}>
      <Paper elevation={0} className={classes.thirdPaperLayout} variant="outlined" square>
            <Typography className={classes.playerList} component="h5" variant="h6">
                <ul>Taboo!</ul>
            </Typography>
        </Paper>
        <Typography className={classes.scores} component="h5" variant="h6">
        <br></br>
        Scores:
        <br></br>
        </Typography>
        <Paper elevation={0} className={classes.fourthPaperLayout} style={{maxHeight: 250, overflow: 'auto'}} >
        <Typography className={classes.playerList} component="h5" variant="h6">
            <ul>rob: 72</ul>
            <ul>bob: 62</ul>
            <ul>knob: 52</ul>
            <ul>tob: 42</ul>
            <ul>fob: 32</ul>
            <ul>zob: 22</ul>
            <ul>blob: 12</ul>
            <ul>sob: 0</ul>
        </Typography>
        </Paper>
        <form className={classes.textField} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Enter your guess" variant="outlined" />
        </form>
        <ButtonGroup className={classes.buttonGroup} fullWidth="True" >
            <Button variant="contained" className={classes.buttonLogin} color='primary'>
                Submit
            </Button>
        </ButtonGroup>
      </Paper>
    </div>
  );
};
