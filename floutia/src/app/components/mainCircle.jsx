"use client";

import React, {useState, useEffect} from "react";
import axios from "axios";
import Image from "next/image";
import styles from "../styles/page.module.css";
import variables from "../styles/variables.module.scss";
import YouTube from "react-youtube";

export default function MainCircle() {
  const imageSize = 600;
  const [isClick, setIsClick] = useState(true);
  const [data, setData] = useState(null);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleReady = (event) => {
    console.log("Player is ready");
  };
  return (
    <>
      <div className={variables.youtubeContainer}>
        <div className={variables.youtubeBox}>
          <YouTube
            videoId="9JFi7MmjtGA" // defaults -> ''
            id="BPM Entertainment" // defaults -> ''
            className={variables.youtubeVideo} // defaults -> ''
            iframeClassName="" // defaults -> ''
            style={{}} // defaults -> {}
            title="K-POP" // defaults -> ''
            loading="undefined" // defaults -> undefined
            opts={opts} // defaults -> {}
            onReady={handleReady} // defaults -> noop
          />
        </div>
        <div className={variables.youtubeBox}>
          <YouTube
            videoId="D8VEhcPeSlc" // defaults -> ''
            id="SMTOWN" // defaults -> ''
            className={variables.youtubeVideo} // defaults -> ''
            iframeClassName="" // defaults -> ''
            style={{}} // defaults -> {}
            title="K-POP" // defaults -> ''
            loading="undefined" // defaults -> undefined
            opts={opts} // defaults -> {}
            onReady={handleReady} // defaults -> noop
          />
        </div>
        <div className={variables.youtubeBox}>
          <YouTube
            videoId="eQNHDV7lKgE" // defaults -> ''
            id="BLACKPINK" // defaults -> ''
            className={variables.youtubeVideo} // defaults -> ''
            iframeClassName="" // defaults -> ''
            style={{}} // defaults -> {}
            title="K-POP" // defaults -> ''
            loading="undefined" // defaults -> undefined
            opts={opts} // defaults -> {}
            onReady={handleReady} // defaults -> noop
          />
        </div>
      </div>
    </>
  );
}
