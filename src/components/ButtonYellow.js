import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect, useRef } from "react";
import track, { useTracking } from "react-tracking";

export default function ButtonYellow() {
  const gold = "colorGold";

  return (
    <>
      <div
        className={styles.colorSquare + " " + gold}
        id="squareGold"
        style={{ "border-radius": "0 0 100px 0" }}
      ></div>
    </>
  );
}
