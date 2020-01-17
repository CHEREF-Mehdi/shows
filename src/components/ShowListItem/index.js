import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
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
              <div className={classes.evaluation}>
                {parseInt(item.score) / 2}/10
              </div>
            </Avatar>
          }
          subheaderTypographyProps={{ style: { color: "#fff" } }}
          titleTypographyProps={{ style: { color: "#fff" } }}
          title={item.show.type}
          subheader={formatPremieredDate(item.show.premiered)}
        />

        <CardContent
          style={{
            backgroundImage:
              "url(" +
              (item.show.image ? item.show.image.medium : defaultAvatar) +
              ")"
          }}
          className={classes.media}
        ></CardContent>

        <CardActions className={classes.action} disableSpacing>
          <Button
            size="small"
            style={{ color: "#fff" }}
            onClick={() => {
              history.push("/show/" + item.show.id, item);
            }}
          >
            {item.show.name}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ShowListItem;
