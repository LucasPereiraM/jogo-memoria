import Head from "next/head";
import styles from "@/styles/Home.module.css";
import StartButton from "@/components/StartButton";
import ScoreBoard from "@/components/ScoreBoard";
import ColorButton from "@/components/ColorButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jogo da memória</title>
        <meta
          name="description"
          content="Jogo da memória para o app super ação"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        ></link>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      </Head>
      <main className={styles.main}>
        <div className={styles.section}>
          <ColorButton color="colorRed" />
          <ColorButton color="colorBlue" />
          <ColorButton color="colorGreen" />
          <ColorButton color="colorGold" />
        </div>
        <StartButton />
        <ScoreBoard />
      </main>
    </>
  );
}
