import React, {useState} from 'react';
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

export const GamePage = props => {
  const classes = useStyles();
  const [guess, setGuess] = useState("");
  const [room, setRoom] = useState("");
  const gameState = props.gameState
  const is_speaker = gameState.state === "speaker"
  const words = gameState.words
  const points = Object.entries(JSON.parse(window.sessionStorage.getItem("points")))

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  return (
    <div className={classes.root}>
      { is_speaker && <>
        <Paper className={classes.outsideContainer}>
          <Paper elevation={0} className={classes.firstPaperLayout} variant="outlined" square>
              <Typography className={classes.playerList} component="h5" variant="h6">
                  {words.correct}
              </Typography>
          </Paper>
          <Paper elevation={0} className={classes.secondPaperLayout} variant="outlined" square>
              <Typography className={classes.playerList} component="h5" variant="h6">
                {
                  words.banned.map(word => {
                    return <><span>{word}</span><br/></>
                  })
                }
              </Typography>
          </Paper>
        </Paper>
      </>}
      { !is_speaker &&
      <Paper className={classes.outsideContainer}>
      <Paper elevation={0} className={classes.thirdPaperLayout} variant="outlined" square>
            <Typography className={classes.playerList} component="h5" variant="h6">
              {is_speaker && "You are the speaker!"}
              {gameState.state === "ended" && "The turn has ended!"}
              {gameState.state === "started" && "Guess the word!"}
            </Typography>
        </Paper>
        <Typography className={classes.scores} component="h5" variant="h6">
        <br></br>
        Scores:
        <br></br>
        </Typography>
        <Paper elevation={0} className={classes.fourthPaperLayout} style={{maxHeight: 250, overflow: 'auto'}} >
        <Typography className={classes.playerList} component="h5" variant="h6">
          {
            points.map(([name, point], _i, _a) => {
            return <><span>{`${name}: ${point}`}</span><br/></>
            })
          }
        </Typography>
        </Paper>
        <form className={classes.textField} noValidate autoComplete="off">
        <TextField onChange={handleGuessChange} id="outlined-basic" label="Enter your guess" variant="outlined" />
        </form>
        <ButtonGroup className={classes.buttonGroup} fullWidth="True" >
            <Button onClick={_ => {
                props.socket.emit("answer", {name:props.name, id: props.id, guess})
              }}
              variant="contained" className={classes.buttonLogin} color='primary'>
                Submit
            </Button>
        </ButtonGroup>
      </Paper>
      }
    </div>
  );
};
