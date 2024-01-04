"use client";

import {Inter} from "next/font/google";
import variables from "../styles/variables.module.scss";
import styles from "../styles/page.module.css";
import Head from "next/head";
import React, {useState, useEffect} from "react";
import Image from "next/image";
import axios from "axios";
import qs from "qs";
import YouTube from "react-youtube";

export default function RootLayout() {
  const [channel, setChannel] = useState([]);
  const [data, setData] = useState([]);
  const apiUrl = process.env.NEXT_PUBLIC_YOUR_API_KEY;

  useEffect(() => {
    const fetchData = async (channel) => {
      try {
        const params = {
          part: "snippet",
          maxResults: 1,
          forUsername: "gkgk4550",
          key: apiUrl,
        };

        const queryString = qs.stringify(params);

        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?${queryString}`,
          {
            headers: {
              accept: "application/json",
            },
          }
        );

        if (channel) {
          const channels = response.data.items.map((item) => ({
            mySubscribers: item.channel.mySubscribers,
            managedByMe: item.channel.managedByMe,
            forUserName: item.channel.forUserName,
            forHandle: item.channel.forHandle,
            id: item.id,
            title: item.snippet.title,
            mine: item.snippet.mine,
          }));

          setData(channels);
          console.log("channels", channels);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData(channel);
  }, []);
  return (
    <>
      <div className={styles.body}>
        <Image
          src="/profile.png"
          alt="profile"
          width={100}
          height={100}
          className={styles.profile}
        />
        <p className={variables.myPage_header}>OO님 반가워요</p>
        <div className={variables.myPage_container}>
          <div className={variables.myPage_container_first_column}>
            좋아요 누른 곡
            {data.map((channel) => {
              <div key={channel.id}>
                <YouTube
                  mySubscribers={channel.mySubscribers}
                  id={channel.id}
                  managedByMe={channel.managedByMe}
                  forUserName={channel.forUserName}
                  forHandle={channel.forHandle}
                  mine={channel.mine}
                />
              </div>;
            })}
          </div>
          <div className={variables.myPage_container_second_column}>
            나의 플레이 리스트
          </div>
        </div>
      </div>
    </>
  );
}
