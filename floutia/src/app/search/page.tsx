import type {Metadata} from "next";
import {Inter} from "next/font/google";
import variables from "../../styles/variables.module.scss";
import styles from "../styles/page.module.css";
import Search from "./components/Search";

import React from "react";

export default function page() {
  return (
    <div className={styles.body}>
      <Search />
    </div>
  );
}
