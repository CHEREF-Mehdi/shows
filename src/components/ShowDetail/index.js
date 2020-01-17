import React from "react";
import { fetchShows } from "../../config/api";
import Loader from "../Loader";
import { Button } from "@material-ui/core";
import { useLocation } from "react-router-dom";

function ShowDetail(props) {
  const location = useLocation();
  const state = location.state;

  const [show, setShow] = React.useState(state);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    if (!show) getShows();
  }, []);

  function getShows() {
    setLoading(true);
    setError(false);
    fetchShows()
      .then(shows => {
        // eslint-disable-next-line eqeqeq
        const show = shows.find(item => item.show.id == location.pathname.split("/")[2]);
        setShow(show);
        console.log(show);
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
  return <></>;
}

export default ShowDetail;
