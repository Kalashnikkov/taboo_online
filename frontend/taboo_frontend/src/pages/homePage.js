import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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

const API_ENDPOINT = "http://0.0.0.0:5000/";

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

export const HomePage = props => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const history = useHistory();

  const handleNameChange = event => {
    setName(event.target.value);
  }
    
  const handleRoomChange = event => {
    setRoom(event.target.value);
  }

  const createRoom = _ => {
    fetch(API_ENDPOINT+"host", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name })
    }).then(async (resp) => {
      if (resp.status === 404) {
        console.error("Could not find that room");
      } else {
        const data = await resp.json();
        history.push(`/join/${data.id}`);
      }
    })
  }

  return (
    <div className={classes.root}>
      <Container className={classes.containerItems}>
        <Paper elevation={3} className={classes.paperLayout}>
          <Typography className={classes.title} component="h3" variant="h2">
            Taboo!
          </Typography>
          <TextField
            className={classes.textInput}
            id="name-input"
            label="Name"
            variant="outlined"
            onChange={handleNameChange}
        />
        <TextField
            className={classes.textInput}
            id="room-input"
            label="Room"
            variant="outlined"
            onChange={handleRoomChange}
        />
        <ButtonGroup className={classes.buttonGroup} fullWidth="True">
            <Button onClick={createRoom} >
                Create
            </Button>
            <Button component={Link} to={room} onClick={() => props.setName(name)}>
                Join
            </Button>
        </ButtonGroup>
        </Paper>
      </Container>
    </div>
  );
};