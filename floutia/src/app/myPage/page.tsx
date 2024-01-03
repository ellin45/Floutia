import type {Metadata} from "next";
import {Inter} from "next/font/google";
import variables from "../../styles/variables.module.scss";
import styles from "../styles/page.module.css";
import Head from "next/head";
import Image from "next/image";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout() {
  return (
    <div>
      <Image
        src="/profile.jpeg"
        alt="profile"
        width={100}
        height={100}
        className={styles.logo}
      />
      <div>OO님 반가워요</div>
    </div>
  );
}
