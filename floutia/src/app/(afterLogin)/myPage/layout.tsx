import type {Metadata} from "next";
import {Inter} from "next/font/google";
import variables from "../../styles/variables.module.scss";
import styles from "../../app/styles/page.module.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
