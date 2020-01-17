import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";

import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

export default props => {
  const classes = useStyles();
  const history = useHistory();
  const [filtre, setFilter] = React.useState(null);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            {props.title}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              onChange={event => {
                const f = event.target.value.trim();
                if (f.length > 0) setFilter(f.toLowerCase());
                else setFilter(null);
              }}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  props.setUseFilter(filtre);
                  history.push("/");
                }
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
