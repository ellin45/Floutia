"use client";
import React from "react";
import styles from "../../styles/page.module.css";
import variables from "../../app/styles/variables.module.scss";
import Image from "next/image";

export default function playList() {
  return (
    <div className={styles.playList}>
      <Image
        src="/prev_song_arrow 1.png"
        alt="playList"
        width={30}
        height={30}
        className={styles.listBtn}></Image>
      <div className={styles.list}>재생목록</div>
      
    </div>
  );
}
