import styles from "@/styles/Home.module.css";
import { useState } from "react";
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

export default function ColorButton(props) {
  const { trackEvent } = useTracking();
  const [record, setRecord] = useState([]);

  const pushRecord = (
    localStorageName,
    record,
    gameId,
    event,
    time,
    date,
    sound
  ) => {
    if (localStorage.getItem(localStorageName) === null) {
      setRecord({
        gameId: gameId,
        event: event,
        time: time,
        date: date,
        sound: sound,
      });
    } else {
      setRecord((prevState) => [
        ...prevState,
        (gameId = gameId),
        (event = event),
        (time = time),
        (date = date),
        (sound = sound),
      ]);
      console.log(record);
    }
    localStorage.setItem(localStorageName, JSON.stringify(record));
  };

  return (
    <>
      <div
        className={styles.colorSquare + " " + props.color}
        id={props.color + "Button"}
        onClick={() => {
          const currentTime = getTime();
          const currentDate = getDate();
          pushRecord(
            "clicksInfo",
            record,
            1,
            props.color,
            currentTime,
            currentDate,
            "off"
          );
          //console.log(localStorage.getItem("clicksInfo"));
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
