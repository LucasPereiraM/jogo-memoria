import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import track, { useTracking } from "react-tracking";

export default function ButtonGreen() {
  const green = "colorGreen";
  return (
    <>
      <div
        className={styles.colorSquare + " " + green}
        id="squareGreen"
        style={{ "border-radius": "0 100px 0 0 " }}
      ></div>
    </>
  );
}
