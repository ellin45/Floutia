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
    <div className={styles.container}>
      <div className={styles.Sidebar}>
        <div className={styles.search}>
          <Link legacyBehavior href="/search" passHref>
            <a className={styles.search}>
              {" "}
              <Image src="/search.png" alt="search" width={30} height={30} />
              search
            </a>
          </Link>
        </div>

        <div className={styles.myPage}>
          <Link legacyBehavior href="/myPage" passHref>
            <a className={styles.myPage}>
              {" "}
              <Image src="/myPage.png" alt="myPage" width={30} height={30} />
              myPage
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
