import React from "react";
import { fetchShows } from "../../config/api";
import Loader from "../Loader";
import {
  Button,
  Container,
  Grid,
  Typography,
  CardHeader,
  Paper,
  Avatar
} from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { grey } from "@material-ui/core/colors";
import { defaultAvatar } from "../../config/consts";
import { formatPremieredDate, scoreToColor } from "../../config/helpers";
import { fetchEpisode } from "../../config/api";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { blueGrey } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 276,
    height: 359
  },
  controls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  },
  evaluation: { fontSize: 11, color: blueGrey[900] }
}));

function ShowDetail(props) {
  const location = useLocation();
  const classes = useStyles();
  const state = location.state;

  const [show, setShow] = React.useState(state);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [episodes, setEpisodes] = React.useState(null);

  React.useEffect(() => {
    if (!show) getShows();
    else {
      setLoading(false);
      setError(false);
      if (show && episodes === null) getEpisodes(show.show._links);
    }
  });

  function getShows() {
    setLoading(true);
    setError(false);

    fetchShows()
      .then(shows => {
        const show = shows.find(
          item => item.show.id == location.pathname.split("/")[2]
        );
        getEpisodes(show.show._links);
        setShow(show);
      })
      .catch(error => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  async function getEpisodes(links) {
    const ep = [];
    Object.keys(links).forEach(function(item) {
      fetchEpisode(links[item].href)
        .then(s => {
          ep[item] = s;
        })
        .catch(err => {
          throw err;
        });
    });
    setEpisodes(ep);
  }

  function typography(variant, item, value) {
    return (
      <Typography variant={variant} color="textSecondary">
        {item + value}
      </Typography>
    );
  }

  function controlButton(index) {
    return (
      <IconButton
        disabled={episodes[index] ? true : false}
        onClick={() =>
          episodes[index] ? window.open(episodes[index].url, "_blank") : null
        }
      >
        {index === "previousepisode" ? (
          <SkipPreviousIcon />
        ) : index === "self" ? (
          <PlayArrowIcon className={classes.playIcon} />
        ) : (
          <SkipNextIcon />
        )}
      </IconButton>
    );
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

  return (
    <>
      <Container
        style={{
          backgroundColor: grey[200],
          paddingTop: 30,
          paddingBottom: 30,
          width: "100%",
          height: "80vh"
        }}
      >
        <Grid container spacing={1}>
          <Grid item>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cover}
                image={
                  show.show.image ? show.show.image.original : defaultAvatar
                }
                title="Live from space album cover"
              />
              <div className={classes.details}>
                <CardHeader
                  action={
                    <Avatar
                      aria-label="recipe"
                      style={{
                        backgroundColor: scoreToColor(parseInt(show.score)),
                        marginTop: 10,
                        marginLeft: 20,
                        marginRight: 10
                      }}
                    >
                      <div className={classes.evaluation}>
                        {show.show ? parseInt(show.score) / 2 : 0}/10
                      </div>
                    </Avatar>
                  }
                  title={show.show.name}
                />
                <CardContent className={classes.content}>
                  {typography("subtitle1", "Type : ", show.show.type)}
                  {typography(
                    "subtitle2",
                    "Premiered : ",
                    formatPremieredDate(show.show.premiered, false)
                  )}
                  {typography(
                    "subtitle2",
                    "Language : ",
                    "show.show.language",
                    false
                  )}
                  {typography("subtitle2", "Status : ", show.show.status)}
                  {typography(
                    "subtitle2",
                    "Schedule : ",
                    show.show.schedule.days.join(",") +
                      " at " +
                      show.show.schedule.time
                  )}
                  {typography(
                    "subtitle2",
                    "Network name : ",
                    show.show.network
                      ? show.show.network.name
                      : "No Information"
                  )}
                  {typography(
                    "subtitle2",
                    "Country : ",
                    show.show.network
                      ? show.show.network.country.name
                      : "No Information"
                  )}
                  {typography(
                    "subtitle2",
                    "Time zone : ",
                    show.show.network
                      ? show.show.network.country.timezone
                      : "No Information"
                  )}
                </CardContent>

                <div className={classes.controls}>
                  {controlButton("previousepisode")}
                  {controlButton("self")}
                  {controlButton("nextepisode")}
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <div style={{ overflow: "auto" }} className={classes.cover}>
                <CardHeader title="Summary" />
                <CardContent className={classes.content}>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    dangerouslySetInnerHTML={{
                      __html: show.show.summary
                    }}
                  ></Typography>
                </CardContent>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ShowDetail;
