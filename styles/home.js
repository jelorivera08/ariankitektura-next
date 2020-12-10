import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  art: {
    color: "rgb(254, 0, 0)",
  },
  container: {
    paddingTop: "40px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "150px",
    },
  },
  bottomNavContainer: {
    paddingTop: "24px",
  },
  bottomNavRoot: {
    width: "100%",
    justifyContent: "space-around",
    backgroundColor: "black",
  },
  bottomNavActionRoot: {
    color: "white",
  },
  bottomNavActionLabel: {
    fontSize: "24px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  subtitle: {
    fontSize: "32px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      paddingTop: "12px",
    },
  },
  homeImage: {
    maxWidth: "100%",
    maxHeight: "100vh",
    padding: "0 12px",
  },
}));
