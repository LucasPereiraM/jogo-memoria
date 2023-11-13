import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import track, { useTracking } from "react-tracking";

export default function ScoreBoard({ colorRecord }) {
  const [aux, setAux] = useState(0);

  const compareArrays = (completeArray, partialArray, aux) => {
    var comp1 = partialArray.toString();
    var comp2 = completeArray[aux];
    setAux(aux + 1);
    if (comp1 !== comp2) {
      return false;
    } else {
      if (comp1.length == comp2.length) {
        return true;
      }
    }
  };

  const addClickerCheck = (color) => {
    document.getElementById("square" + color).onclick = async () => {
      if (!compareArrays(pickedColors, "color" + color, aux)) {
        document.getElementById("textResult").innerHTML = "ERRADO!";
        setAmount(0);
        setAux(0);
        ableBtn();
        setPickedColors(pickColors());
        $("#modalScore").modal("show");
      } else {
        if (amount == aux) {
          setAmount(amount + 1);
          setAux(0);
          await delay(1000);
          sequencePlay(amount + 1);
          document.getElementById("scoreBoard").innerHTML = amount + 1;
          document.getElementById("textResult").innerHTML = amount + 1;
        }
      }
    };
  };

  useEffect(() => {
    addClickerCheck("Blue");
    addClickerCheck("Green");
    addClickerCheck("Red");
    addClickerCheck("Gold");
  });

  return (
    <>
      <div className={styles.center + styles.grid}>
        <span className="badge badge-dark" id="textResult">
          ACERTOS
        </span>
      </div>
      <div
        className="modal fade"
        id="modalScore"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="">
                Errou!
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" id="scoreBoard"></div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
