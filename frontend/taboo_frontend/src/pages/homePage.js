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
import { Link } from 'react-router-dom';

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

export const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.containerItems}>
        <Paper elevation={3} className={classes.paperLayout}>
          <Typography className={classes.title} component="h3" variant="h2">
            Taboo!
          </Typography>
          <TextField
            className={classes.textInput}
            id="outlined-helperText"
            label="Name"
            variant="outlined"
        />
        <TextField
            className={classes.textInput}
            id="outlined-helperText"
            label="Room"
            variant="outlined"
        />
        <ButtonGroup className={classes.buttonGroup} fullWidth="True">
            <Button component={Link} to="/hello">
                Create
            </Button>
            <Button>
                Join
            </Button>
        </ButtonGroup>
        </Paper>
      </Container>
    </div>
  );
};