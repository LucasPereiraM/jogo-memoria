import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState, useEffect, useRef } from "react";

export default function StartButton() {
  const possibleColors = ["colorBlue", "colorGreen", "colorRed", "colorGold"];

  const randomColorIndex = () => {
    return Math.floor(Math.random() * possibleColors.length);
  };

  const pickColors = () => {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push(possibleColors[randomColorIndex()]);
    }
    return array;
  };

  const [pickedColors, setPickedColors] = useState(pickColors());

  const [amount, setAmount] = useState(0);

  const [disabled, setDisabled] = useState(false);

  const disableBtn = () => {
    setDisabled(true);
  };

  const ableBtn = () => {
    setDisabled(false);
  };

  useEffect(() => {
    document.getElementById("sequenceButton").onclick = async () => {
      sequencePlay(amount);
      //var records = localStorage.getItem("clicksInfo");
      //localStorage.setItem("clicksInfo", records);
    };
  });

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

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const blinkColor = async (color) => {
    const colorButton = color + "Button";
    document.getElementById(colorButton).classList.add("colorActive");
    await delay(500);

    document.getElementById(colorButton).classList.remove("colorActive");
    await delay(500);
  };

  const sequencePlay = async (quantid) => {
    for (let i = 0; i <= quantid; i++) {
      await delay(500);
      blinkColor(pickedColors[i]);
      await delay(500);
    }
  };

  const addClickerCheck = (color) => {
    document.getElementById(color + "Button").onclick = async () => {
      if (!compareArrays(pickedColors, color, aux)) {
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
    addClickerCheck("colorBlue");
    addClickerCheck("colorGreen");
    addClickerCheck("colorRed");
    addClickerCheck("colorGold");
  });

  return (
    <>
      <div className={styles.center + styles.grid}>
        <button
          className="btn btn-primary"
          id="sequenceButton"
          disabled={disabled}
          onClick={disableBtn}
        >
          Iniciar
        </button>
      </div>
    </>
  );
}
