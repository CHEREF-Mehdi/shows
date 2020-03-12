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
  const [searchValue, setSearchValue] = React.useState(null);
  function handleInputChange(event) {
    const f = event.target.value.trim();
    if (f.length > 0) setSearchValue(f.toLowerCase());
    else setSearchValue(null);
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      props.setShowsFilter(searchValue);
      history.push("/");
    }
  }
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography className={classes.title}>Shows</Typography>
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
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
