import Head from "next/head";
import { useRouter } from "next/router";
import {
  Grid,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import { useStyles } from "../styles/home";

export default function Home() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Ariankitektura</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container className={classes.container}>
        <Grid xs={12} item container className="flex" justify="center">
          <img className={classes.homeImage} src="/logo.png" />
        </Grid>

        <Grid xs={12} item container className="flex" justify="center">
          <img className={classes.homeImage} src="/sublogo.png" />
        </Grid>

        <Grid xs={12} item container className="flex" justify="center">
          <div className={classes.subtitle}>
            "Interpreted <span className={classes.art}>art</span> is our
            passion"
          </div>
        </Grid>

        <Grid container className={classes.bottomNavContainer}>
          <BottomNavigation
            showLabels
            classes={{
              root: classes.bottomNavRoot,
            }}
          >
            <BottomNavigationAction
              classes={{
                root: classes.bottomNavActionRoot,
                label: classes.bottomNavActionLabel,
              }}
              label="About us"
              onClick={() => router.push("/aboutUs")}
            />
            <BottomNavigationAction
              classes={{
                root: classes.bottomNavActionRoot,
                label: classes.bottomNavActionLabel,
              }}
              label="Portfolio"
              onClick={() => router.push("/portfolio")}
            />
            <BottomNavigationAction
              classes={{
                root: classes.bottomNavActionRoot,
                label: classes.bottomNavActionLabel,
              }}
              label="Contact us"
              onClick={() => router.push("/contact")}
            />
          </BottomNavigation>
        </Grid>
      </Grid>
    </>
  );
}
