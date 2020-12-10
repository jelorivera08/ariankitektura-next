import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  playerWrapper: {
    height: "65vh",
    width: "100%",
  },
  player: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    maxWidth: "unset",
  },
});

export default function TheFirm() {
  const classes = useStyles();

  return (
    <div className={classes.playerWrapper}>
      <video
        className={classes.player}
        src="/test.mp4"
        allow="autoplay"
        playsInline
        muted
        loop
        autoPlay
      />
    </div>
  );
}
