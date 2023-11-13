import styles from "@/styles/Home.module.css";
import track, { useTracking } from "react-tracking";
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

const ButtonGreen = () => {
  const green = "colorGreen";
  const { trackEvent } = useTracking();

  return (
    <>
      <div
        className={styles.colorSquare + " " + green}
        id="squareGreen"
        style={{ "border-radius": "0 100px 0 0" }}
        onClick={() => {
          const currentTime = getTime();
          trackEvent({
            funComponent: "HookButtonGreen",
            event: "HookButtonGreen-Clicked",
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
)(ButtonGreen);

export default TrackedApp;
