import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GridShow from "./components/GridShow";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 50
  }
}));

function App() {
  const classes = useStyles();
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=test")
      .then(response => response.json())
      .then(data => {
        setShows(data);
      });
  }, []);

  if (shows.length === 0)
    return (
      <div className={classes.root}>
        <Grid container justify="center">
          Pas de show disponible pour l'instant.
        </Grid>
      </div>
    );
  else
    return (
      <div className="App">
        <Header title="Shows"></Header>
        <Container>
          <GridShow shows={shows}></GridShow>
        </Container>
        <Footer></Footer>
      </div>
    );
}

export default App;
