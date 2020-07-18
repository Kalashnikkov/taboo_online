import React from 'react';
import {
  makeStyles,
  Container,
  Paper,
  Typography,
  Button,
  ButtonGroup,
} from '@material-ui/core';


const useStyles = makeStyles(() => ({
  root: {
    background: '#535c68',
    backgroundSize: 'cover',
    height: '100vh',
    overflow: 'hidden',

  },
  containerItems: {
    display: 'flex',
    flexDirection: 'column',
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
  buttonLogin: {
    margin: '5%',
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
}

}));

export const LobbyPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.containerItems}>
        <Paper elevation={3} className={classes.paperLayout}>
        <Paper elevation={0} className={classes.secondPaperLayout} >
          <Typography className={classes.title} component="h4" variant="h3">
            Rounds : 
            <ButtonGroup className={classes.topButtonGroup} fullWidth="True" >
            <Button>
                1
            </Button>
            <Button>
                2
            </Button>
            <Button>
                3
            </Button>
            </ButtonGroup>
          </Typography>
        </Paper>
        <Paper elevation={0} className={classes.thirdPaperLayout} style={{maxHeight: 250, overflow: 'auto'}} >
        <Typography className={classes.playerList} component="h5" variant="h4">
            <ul>name test</ul>
            <ul>name test</ul>
            <ul>wowee</ul>
            <ul>congratz</ul>
            <ul>funny</ul>
            <ul>sometimes</ul>
            <ul>birthday</ul>
            <ul>homepage</ul>
            <ul>exciting</ul>
        </Typography>
        </Paper>
        <ButtonGroup className={classes.buttonGroup} fullWidth="True" >
            <Button>
                Play!
            </Button>
        </ButtonGroup>
        </Paper>
        </Container>
    </div>
  );
};
