import styles from "@/styles/Home.module.css";
import track, { useTracking } from "react-tracking";
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

const ButtonRed = () => {
  const red = "colorRed";
  const { trackEvent } = useTracking();

  return (
    <>
      <div
        className={styles.colorSquare + " " + red}
        id="squareRed"
        style={{ "border-radius": "100px 0 0 0" }}
        onClick={() => {
          const currentTime = getTime();
          trackEvent({
            funComponent: "HookButtonRed",
            event: "HookButtonRed-Clicked",
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
)(ButtonRed);

export default TrackedApp;
