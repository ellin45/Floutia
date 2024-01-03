import type {Metadata} from "next";
import {Inter} from "next/font/google";
import variables from "../styles/variables.module.scss";
import styles from "../styles/page.module.css";
import Head from "next/head";
import Image from "next/image";

export default function RootLayout() {
  return (
    <>
      <div className={styles.body}>
        <Image
          src="/profile.jpeg"
          alt="profile"
          width={100}
          height={100}
          className={styles.profile}
        />
        <p className={variables.myPage_header}>OO님 반가워요</p>
        <div className={variables.myPage_container}>
          <div className={variables.myPage_container_first_column}>
            좋아요 누른 곡
          </div>
          <div className={variables.myPage_container_second_column}>
            나의 플레이 리스트
          </div>
        </div>
      </div>
    </>
  );
}
