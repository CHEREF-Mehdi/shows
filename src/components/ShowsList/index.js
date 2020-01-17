import React from "react";
import { Container, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ShowListItem from "../ShowListItem";
import useStyles from "./styles";
import { fetchShows } from "../../config/api";
import Loader from "../Loader";

function App() {
  const classes = useStyles();
  const [shows, setShows] = React.useState(undefined);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    getShows();
  }, []);

  function getShows() {
    setLoading(true);
    setError(false);
    fetchShows()
      .then(shows => {
        setShows(shows);
      })
      .catch(error => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <Button variant="contained" color="secondary">
        ahum
      </Button>
    );
  }

  if (shows.length === 0) {
    return (
      <div className={classes.root}>
        <Grid container justify="center">
          Pas de show disponible pour l'instant.
        </Grid>
      </div>
    );
  }

  return (
    <Container className={classes.root}>
      <Grid container justify="center" spacing={2}>
        {shows.map((item, id) => (
          <ShowListItem key={id} item={item}></ShowListItem>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
