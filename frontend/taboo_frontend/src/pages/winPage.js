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
  }
}));

export const WinPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.containerItems}>
        <Paper elevation={3} className={classes.paperLayout}>
          <Typography className={classes.title} component="h3" variant="h2">
            Player_1 wins!
          </Typography>
        <ButtonGroup className={classes.buttonGroup} fullWidth="True" >
            <Button>
                Quit
            </Button>
            <Button>
                Play Again
            </Button>
        </ButtonGroup>
        </Paper>
      </Container>
    </div>
  );
};
