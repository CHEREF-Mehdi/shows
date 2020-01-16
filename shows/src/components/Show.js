import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red, lightGreen, yellow } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 260,
    maxHeight: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  evaluation: { fontSize: 11, color: "#000" },
  text: {
    overflow: hidden,
    textOverflow: ellipsis,
    whiteSpace: nowrap
  }
}));

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export default props => {
  const classes = useStyles();
  let item = { ...props };
  item = item.item;
  var date = item.show.premiered.split("-");

  return (
    <Grid item>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              style={{
                backgroundColor:
                  parseInt(item.score) >= 15
                    ? yellow[100 * (10 - (20 - parseInt(item.score)))]
                    : parseInt(item.score) < 11
                    ? red[100 * (13 - parseInt(item.score))]
                    : lightGreen[100 * (8 - (15 - parseInt(item.score)))]
              }}
            >
              <div className={classes.evaluation}>
                {parseInt(item.score) / 2}/10
              </div>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={item.show.type}
          subheader={
            months[parseInt(date[1]) - 1] + " " + date[2] + ", " + date[0]
          }
        />
        <CardMedia
          className={classes.media}
          image={
            item.show.image
              ? item.show.image.original
              : "https://archive.org/download/no-photo-available/no-photo-available.png"
          }
          title="Paella dish"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.show.name}
          </Typography>
          <Typography
            className={classes.text}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
