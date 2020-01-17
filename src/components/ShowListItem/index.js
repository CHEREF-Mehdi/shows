import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import { defaultAvatar } from "../../config/consts";
import { formatPremieredDate, scoreToColor } from "../../config/helpers";
import { useHistory } from "react-router-dom";

function ShowListItem({ item }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid item>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              style={{
                backgroundColor: scoreToColor(item.score)
              }}
            >
              <div className={classes.evaluation}>{parseInt(item.score) / 2}/10</div>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={item.show.type}
          subheader={formatPremieredDate(item.show.premiered)}
        />
        <CardMedia
          className={classes.media}
          image={item.show.image ? item.show.image.original : defaultAvatar}
          title="Paella dish"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.show.name}
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
            except Antarctica
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              history.push("/show/" + item.show.id, item);
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ShowListItem;
