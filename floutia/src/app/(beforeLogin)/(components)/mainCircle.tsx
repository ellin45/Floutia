"use client";

import variables from "../../app/styles/variables.module.scss";
import styles from "../../styles/page.module.css";
import Image from "next/image";
import React, {useState} from "react";
export default function mainCircle() {
  const imageSize = 600;

  const [isClick, setIsClick] = useState(true);
  return (
    <div
      className={styles.mainCircle}
      style={{
        position: "relative",
        width: `${imageSize}px`,
        height: `${imageSize}px`,
      }}>
      <Image
        src="/MainCircle.png"
        alt="mainCircle"
        width={imageSize}
        height={imageSize}
      />
      <div>
        <Image
          src="/album.png"
          alt="album"
          className={styles.album}
          width={80}
          height={80}
        />
        <div className={styles.album_name}>
          Hello
          {isClick ? (
            <Image
              src="/heart.png"
              alt="heart"
              width={20}
              height={20}
              className={styles.heart}
              onClick={() => setIsClick(false)}
          
              ></Image>
          ) : (
            <Image
              src="/heart-filled.svg"
              alt="heart"
              width={20}
              height={20}
              className={styles.heart}
              onClick={() => setIsClick(true)}></Image>
          )}
        </div>
      </div>
    </div>
  );
}
