import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import track, { useTracking } from "react-tracking";

export default function ButtonRed() {
  const red = "colorRed";

  return (
    <>
      <div
        className={styles.colorSquare + " " + red}
        id="squareRed"
        style={{ "border-radius": "100px 0 0 0" }}
      ></div>
    </>
  );
}
