"use client";

import {usePathname} from "next/navigation";
import {useMemo} from "react";
import styles from "../../../styles/page.module.css";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import React from "react";

export default function Sidebar() {
  const router = useRouter();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.Sidebar}>
          <div className={styles.sidebar_search}>
            <button onClick={() => router.push("/search")}>Search</button>
          </div>

          <div className={styles.myPage}>
            <button onClick={() => router.push("/myPage")}>myPage</button>
          </div>
        </div>
      </div>
    </>
  );
}
