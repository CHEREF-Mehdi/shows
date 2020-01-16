import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Show from "./Show";

const useStyles = makeStyles(theme => ({
  root: {
    background: "gray",
    padding: 10
  }
}));

export default props => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.root} spacing={2}>
      {props.shows.map((item, id) => (
        <Show key={id} item={item}></Show>
      ))}
    </Grid>
  );
};
