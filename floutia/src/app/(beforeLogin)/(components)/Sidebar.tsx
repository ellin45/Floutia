"use client";

import {usePathname} from "next/navigation";
import {useMemo} from "react";
import variables from "../../styles/variables.module.scss";
import styles from "../../styles/page.module.css";
import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  children: React.ReactNode;
}

import React from "react";

export default function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.search}>
        <Image src="/search.png" alt="search" width={30} height={30}></Image>
        <Link href="/search">search</Link>
      </div>
      <div className={styles.myPage}>
        <Image src="/myPage.png" alt="myPage" width={30} height={30}></Image>
        <Link href="/myPage">myPage</Link>
      </div>
    </div>
  );
}
