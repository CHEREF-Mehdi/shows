import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 50,
    background: grey[200]
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor: grey[200],
    width: 250,
    height: "auto"
  }
}));

export default useStyles;
