import type {Metadata} from "next";
import {Inter} from "next/font/google";
import variables from "../../styles/variables.module.scss";
import styles from "../styles/page.module.css";
import Image from "next/image";
import Search from "./components/Search";

const inter = Inter({subsets: ["latin"]});

import React from "react";

export default function layout() {
  return (
    <div className={styles.body}>
      <Search />
    </div>
  );
}
