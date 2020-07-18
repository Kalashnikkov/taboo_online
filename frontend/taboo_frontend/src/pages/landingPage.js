import React from "react";
import {
  makeStyles,
  Container,
  Paper,
  Grid,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    background: "#f9ca24",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
  },
  title: {
    width: "20vh",
    height: "10vh",
    textAlign: "center",
    backgroundColor: "#6ab04c",
    color: "#ffffff",
  },
  paperLayout: {
    margin: "5%",
  },
  barTitle: {
    flexGrow: 1,
  },
  barCSS: {
    backgroundColor: "#f0932b",
  },
  topBar: {
    backgroundColor: "green",
  },
  containerItems: {
    marginTop: "10%",
    flexGrow: 1,
  },
}));

export const LandingPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.barCSS}>
        <Toolbar>
          <Typography variant="h4" className={classes.barTitle}>
            Mist Games
          </Typography>
          <Button color="inherit" className={classes.barTitle}>
            All Games
          </Button>
          <Button color="inherit" className={classes.barTitle}>
            Contact
          </Button>
          <Button color="inherit" className={classes.barTitle}>
            About
          </Button>
          <Button color="inherit" className={classes.barTitle}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Container className={classes.containerItems}>
        <Grid container spacing={1}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Paper className={classes.paperLayout}>
              <Button className={classes.title} component={Link} to={"/taboo/"}>
                Taboo!
              </Button>
            </Paper>
            <Paper className={classes.paperLayout}>
              <Button className={classes.title} disabled="true">
                Monopoly
              </Button>
            </Paper>
            <Paper className={classes.paperLayout}>
              <Button className={classes.title} disabled="true">
                Connect 4
              </Button>
            </Paper>
            <Paper className={classes.paperLayout}>
              <Button className={classes.title} disabled="true">
                Mahjong
              </Button>
            </Paper>
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Paper className={classes.paperLayout}>
              <Button className={classes.title} disabled="true">
                Articulate!
              </Button>
            </Paper>
            <Paper className={classes.paperLayout}>
              <Button className={classes.title} disabled="true">
                Catan
              </Button>
            </Paper>
            <Paper className={classes.paperLayout}>
              <Button className={classes.title} disabled="true">
                Uno!
              </Button>
            </Paper>
            <Paper className={classes.paperLayout}>
              <Button className={classes.title}>Create your own!</Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
