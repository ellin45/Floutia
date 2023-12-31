import type {Metadata} from "next";
import {Inter} from "next/font/google";
import variables from "../../styles/variables.module.scss";
import styles from "../../styles/page.module.css";
import Image from "next/image";

const inter = Inter({subsets: ["latin"]});

import React from "react";

export default function Search() {
  return (
    <div className={styles.search_container}>
      <div className={styles.search_search}>
        노래나 가수를 검색 해 보세요!
        <div className={styles.search_btn}>
          <Image
            src="/search_search.png"
            alt="search_btn"
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
  );
}
