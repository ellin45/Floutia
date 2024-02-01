"use client";

import {usePathname} from "next/navigation";
import {useMemo} from "react";
import styles from "../../../styles/page.module.css";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import ROUTES from "constants/routes";
import React from "react";

export default function Sidebar() {
  const router = useRouter();

  const searchHandleClick = () => {
    router.push(ROUTES.SEARCH);
  };
  const myPageHandleClick = () => {
    router.push(ROUTES.MYPAGE);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.Sidebar}>
          <div className={styles.sidebar_search}>
            <button onClick={searchHandleClick}>Search</button>
          </div>

          <div className={styles.myPage}>
            <button onClick={myPageHandleClick}>myPage</button>
          </div>
        </div>
      </div>
    </>
  );
}
