"use client";
import React, {useState} from "react";
import styles from "../styles/page.module.css";
import variables from "../../app/styles/variables.module.scss";
import Image from "next/image";
import YouTube from "react-youtube";

export default function playList() {
  const [volume, setVolume] = useState(0.3);
  return (
    <div className={styles.playList}>
      <div className={styles.list}>
        <Image
          src="/playlist_btn.png"
          alt="playList"
          width={30}
          height={30}
          className={styles.listBtn}></Image>
        재생목록
      </div>
      <div className={styles.playBtn}>
        <Image
          src="/prev_song_arrow 1.png"
          alt="playList"
          width={30}
          height={30}
          className={styles.listBtn}></Image>
        <Image
          src="/play_circle 1.png"
          alt="playList"
          width={30}
          height={30}
          className={styles.listBtn}></Image>
        <Image
          src="/next_song_arrow 1.png"
          alt="playList"
          width={30}
          height={30}
          className={styles.listBtn}></Image>
      </div>
      <div>
        <Image
          src="/volume_up 1.png"
          alt="playList"
          width={20}
          height={20}
          className={styles.volume_btn}></Image>
        <input
          type="range"
          min={0}
          max={1}
          step={0.02}
          value={volume}
          style={{color: "white"}}
          onChange={(event) => {
            setVolume(event.target.valueAsNumber);
          }}
        />
      </div>
    </div>
  );
}
