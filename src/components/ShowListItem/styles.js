import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 260,
    maxHeight: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  evaluation: { fontSize: 11, color: "#000" }
}));

export default useStyles;
