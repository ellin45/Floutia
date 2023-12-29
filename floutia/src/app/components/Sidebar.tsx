"use client";

import {usePathname} from "next/navigation";
import {useMemo} from "react";
import variables from "../../styles/variables.module.scss";
import styles from "../styles/page.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.search}>
        <Image src="/search.png" alt="search" width={30} height={30}></Image>
        <a href="/search" className={styles.search}>
          search
        </a>
      </div>

      <div className={styles.myPage}>
        <Image src="/myPage.png" alt="myPage" width={30} height={30}></Image>
        <a href="/myPage" className={styles.myPage}>
          myPage
        </a>
      </div>
    </div>
  );
}
