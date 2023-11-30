import styles from "@/styles/Home.module.css";
import { useTracking } from "react-tracking";

const getTime = () => {
  const time =
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds() +
    ":" +
    new Date().getMilliseconds();
  return time;
};

const getDate = () => {
  const date =
    new Date().getDate() +
    "/" +
    (new Date().getMonth() + 1) +
    "/" +
    new Date().getFullYear();
  return date;
};

export default function ButtonRed() {
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
          const currentDate = getDate();
          trackEvent({
            gameId: 1,
            event: "Vermelho",
            time: currentTime,
            date: currentDate,
            sound: "Off",
            patientId: 1,
          });
          localStorage.setItem("clicksInfo1", JSON.stringify(window.dataLayer));
          var storedArray = localStorage.getItem("clicksInfo");
          var colorsArray = JSON.parse(storedArray);
          console.log(colorsArray);
        }}
      ></div>
    </>
  );
}

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
