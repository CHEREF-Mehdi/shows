import { months } from "./consts";
import { red, lightGreen, yellow } from "@material-ui/core/colors";

export function formatPremieredDate(premieredDate) {
  const date = premieredDate.split("-").map((item, index) => (index === 1 ? parseInt(item) - 1 : item));
  const [year, month, day] = date;
  return months[month] + " " + day + ", " + year;
}

export function scoreToColor(score) {
  return parseInt(score) >= 15
    ? yellow[100 * (10 - (20 - parseInt(score)))]
    : parseInt(score) < 11
    ? red[100 * (13 - parseInt(score))]
    : lightGreen[100 * (8 - (15 - parseInt(score)))];
}
