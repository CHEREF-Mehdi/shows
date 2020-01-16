import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    background: "#2E3B55"
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="static">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            &copy; 2019 Nobo
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
