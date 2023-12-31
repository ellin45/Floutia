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
  const iframeProps = {
    id: "ytplayer",
    type: "text/html",
    width: "720",
    height: "405",
    src: "https://www.youtube.com/embed/cgdne04i99I",
    frameborder: "0",
    allowfullscreen: "allowfullscreen",
  };
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
      <YouTube
        videoId="9JFi7MmjtGA" // defaults -> ''
        id="BPM Entertainment" // defaults -> ''
        className="" // defaults -> ''
        iframeClassName="" // defaults -> ''
        style={{}} // defaults -> {}
        title="" // defaults -> ''
        loading="undefined" // defaults -> undefined
        opts={opts} // defaults -> {}
        onReady={handleReady} // defaults -> noop
      />
    </>
  );
}
