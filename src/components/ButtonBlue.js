import styles from "@/styles/Home.module.css";
import track, { useTracking } from "react-tracking";
import ScoreBoard from "./ScoreBoard";
import { useState } from "react";
import ColorsRecord from "./ColorsRecord";

const getTime = () => {
  const time =
    new Date().getDate() +
    "/" +
    new Date().getMonth() +
    "/" +
    new Date().getFullYear() +
    " às " +
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds() +
    ":" +
    new Date().getMilliseconds();
  return time;
};

const ButtonBlue = () => {
  const blue = "colorBlue";
  const { trackEvent } = useTracking();

  return (
    <>
      <div
        className={styles.colorSquare + " " + blue}
        id="squareBlue"
        style={{ "border-radius": "0 0 0 100px" }}
        onClick={() => {
          //parentToChild();
          const currentTime = getTime();
          trackEvent({
            funComponent: "HookButtonBlue",
            event: "HookButtonBlue-Clicked",
            time: currentTime,
          });
        }}
      ></div>
      <ColorsRecord />
    </>
  );
};

const TrackedApp = track(
  { app: "my-app" },

  {
    dispatch: (data) => {
      console.log(data);
    },
  }
)(ButtonBlue);

export default TrackedApp;
