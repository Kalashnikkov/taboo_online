import React from 'react';
import {
  makeStyles,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  ButtonGroup,
} from '@material-ui/core';


const useStyles = makeStyles(() => ({
  root: {
    background: '#535c68',
    backgroundSize: 'cover',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

  },

  containerItems: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

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
  secondPaperLayout: {
    width: '100%',
    margin: '0%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    color: 'white'
  },
  thirdPaperLayout: {
    width: '75%',
    margin: '2.5%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    color: 'black'
  },
  fourthPaperLayout: {
    backgroundColor: '#29A932',
    color: 'white',
    width: '100%'
  },
  fifthPaperLayout: {
    backgroundColor: '#AD3737',
    color: 'white',
    width: '100%'
  },
  buttonLogin: {
    marginLeft: '30px',
    width: '78%'
  },
  textInput: {
    width: '75%',
    marginTop: '2.5%',
    marginBottom: '2.5%'
  },
  title: {
    margin: '5%',
  },
  buttonGroup: {
      width: '75%',
      marginTop: '2.5%',
      marginBottom: '5%',
  },
  topButtonGroup: {
    width: '75%',
    marginTop: '2.5%',
    marginBottom: '5%',
    backgroundColor: '#ffffff'
},
playerList: {
    marginRight: '25px'
},
scores: {
    marginTop: '25px'
},
textField: {
    margin: '0%'
}

}));

export const GamePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>

    <Container className={classes.containerItems}>

    <Container>
    <Paper elevation={3} className={classes.paperLayout}>
    <Paper elevation={0} className={classes.fourthPaperLayout} variant="outlined" square>
        <Typography className={classes.playerList} component="h5" variant="h6">
            <ul>Illinois</ul>
        </Typography>
    </Paper>
    <Paper elevation={0} className={classes.fifthPaperLayout} variant="outlined" square>
        <Typography className={classes.playerList} component="h5" variant="h6">
            <ul>Chicago</ul>
            <ul>Midwest</ul>
            <ul>Wisconsin</ul>
            <ul>Indiana</ul>
            <ul>State:</ul>
        </Typography>
        </Paper>
    </Paper>
    </Container>

    <Container>
        <Paper elevation={3} className={classes.paperLayout}>
        <Paper elevation={0} className={classes.secondPaperLayout} >
          <Typography className={classes.title} component="h4" variant="h3">
            Taboo!
          </Typography>
        </Paper>
        <Typography className={classes.scores} component="h5" variant="h6">
        Scores:
        </Typography>
        <Paper elevation={0} className={classes.thirdPaperLayout} style={{maxHeight: 250, overflow: 'auto'}} >
        <Typography className={classes.playerList} component="h5" variant="h6">
            <ul>rob:</ul>
            <ul>72</ul>
            <ul>bob:</ul>
            <ul>62</ul>
            <ul>knob:</ul>
            <ul>52</ul>
            <ul>tob:</ul>
            <ul>42</ul>
            <ul>fob:</ul>
            <ul>32</ul>
            <ul>zob:</ul>
            <ul>72</ul>
            <ul>blob:</ul>
            <ul>72</ul>
            <ul>sob:</ul>
            <ul>0</ul>
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
    </Container>


    </Container>
    </div>
  );
};