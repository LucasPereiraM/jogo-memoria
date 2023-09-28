import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import track, { useTracking } from "react-tracking";

export default function ButtonBlue() {
  const blue = "colorBlue";

  return (
    <>
      <div
        className={styles.colorSquare + " " + blue}
        id="squareBlue"
        style={{ "border-radius": "0 0 0 100px" }}
      ></div>
    </>
  );
}
