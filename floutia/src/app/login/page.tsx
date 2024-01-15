import type {Metadata} from "next";
import {Inter} from "next/font/google";
import variables from "../../styles/variables.module.scss";
import styles from "../styles/page.module.css";
import Head from "next/head";
import Image from "next/image";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout() {
  return (
    <div className={styles.logo_container}>
      <Image
        src="/profile2.png"
        alt="profile"
        width={80}
        height={80}
        className={styles.logo}
      />
      <div> 채림 님 반가워요</div>
    </div>
  );
}
