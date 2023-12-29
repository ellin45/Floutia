"use client";

import React, {useState, useEffect} from "react";
import axios from "axios";
import Image from "next/image";
import styles from "../styles/page.module.css";
import variables from "../styles/variables.module.scss";

export default function MainCircle() {
  const imageSize = 600;
  const [isClick, setIsClick] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://soundcloud-scraper.p.rapidapi.com/v1/track/metadata`,
          {
            headers: {
              "X-RapidAPI-Key":
                "dadb5e1586msh04ebdd9b7a58411p1a6372jsn8d9ec835aa67",
              "X-RapidAPI-Host": "soundcloud-scraper.p.rapidapi.com",
            },
            params: {
              track: "https://soundcloud.com/edsheeran/photograph",
            },
          }
        );
        setData(response.data);
        console.log(response.data);
        console.log(response.data.artworkUrl);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);



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
        layout="fixed"
      />
      <div>
        {data && (
          <>
            <Image
              src={data.artworkUrl}
              className={variables.album}
              alt="album"
              width={80}
              height={80}
              layout="fixed"
            />
            <Image
              src="/play_btn.png"
              alt="play_btn"
              className={variables.play_btn}
              width={20}
              height={20}
            />
            <div className={styles.album_name}>{data.title}</div>
          </>
        )}

        {isClick ? (
          <Image
            src="/heart.png"
            alt="heart"
            width={20}
            height={20}
            className={styles.heart}
            onClick={() => setIsClick(false)}
            layout="fixed"
          />
        ) : (
          <Image
            src="/heart-filled.svg"
            alt="heart"
            width={20}
            height={20}
            className={styles.heart}
            onClick={() => setIsClick(true)}
            layout="fixed"
          />
        )}
      </div>
    </div>
  );
}
