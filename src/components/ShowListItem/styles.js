import { makeStyles } from "@material-ui/core/styles";
import { blueGrey } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  card: {
    width: 210,
    height: 400,
    backgroundColor: blueGrey[700]
  },
  media: {
    height: 240,
    backgroundSize: "cover",
    backgroundPosition: "center center"
  },
  evaluation: { fontSize: 11, color: blueGrey[900] },
  action: { justifyContent: "center" }
}));

export default useStyles;
