import styles from "@/styles/Home.module.css";
import { useTracking } from "react-tracking";

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

export default function ButtonYellow(){
  const gold = "colorGold";
  const { trackEvent } = useTracking();

  return (
    <>
      <div
        className={styles.colorSquare + " " + gold}
        id="squareGold"
        style={{ "border-radius": "0 0 100px 0" }}
        onClick={() => {
          const currentTime = getTime();
          trackEvent({
            funComponent: "HookButtonYellow",
            event: "HookButtonYellow-Clicked",
            time: currentTime,
          });
          localStorage.setItem("clicksInfo",JSON.stringify(window.dataLayer));
          var storedArray = localStorage.getItem("clicksInfo");
          var ourArray = JSON.parse(storedArray);
          console.log(ourArray);
        }}
      ></div>
    </>
  );
};

/*const TrackedApp = track(
  { app: "my-app" },

  {
    dispatch: (data) => {
      console.log(data);
    },
  }
)(ButtonBlue);

export default TrackedApp;
*/
