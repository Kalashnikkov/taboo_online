import React from "react";
import { makeStyles, Container, Paper, Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    background: "#F5F5F5",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
  },
  title: {
    width: "20vh",
    height: "10vh",
    textAlign: "center",
  },
  paperLayout: {
    margin: "5%",
  },
}));

export const LandingPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.containerItems}>
        <Grid container spacing={1}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Paper className={classes.paperLayout}>
              <Button className={classes.title} component={Link} to={"/taboo/"}>
                Taboo!
              </Button>
            </Paper>
            <Paper className={classes.paperLayout}>
              <Button className={classes.title}>Monopoly</Button>
            </Paper>
            <Paper className={classes.paperLayout}>
              <Button className={classes.title}>Connect 4</Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
