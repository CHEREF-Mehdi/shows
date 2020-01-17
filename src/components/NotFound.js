import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { notFoundImage } from "../config/consts";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh"
  },
  text: { textAlign: "center" }
}));

function NotFoundPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={notFoundImage} />
      <p className={classes.text}>
        <Link to="/">Go to Home </Link>
      </p>
    </div>
  );
}
export default NotFoundPage;
