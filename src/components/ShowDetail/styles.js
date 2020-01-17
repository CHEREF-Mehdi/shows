import { makeStyles } from "@material-ui/core/styles";
import { blueGrey, grey } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: grey[200],
    paddingTop: 30,
    paddingBottom: 30,
    width: "100%",
    minHeight: "80vh"
  },
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

export default useStyles;
