import React from "react";
import { makeStyles } from "@material-ui/core";
import BackgroundImage from "../assets/bg.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${BackgroundImage})`,
    background: "#F5F5F5",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
  },
}));

export const LandingPage = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};
