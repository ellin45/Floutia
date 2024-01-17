import type {Metadata} from "next";
import {Inter} from "next/font/google";
import variables from "../../app/styles/variables.module.scss";
import styles from "../../app/styles/page.module.css";
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body style={{margin: 0}}>{children}</body>
    </html>
  );
}
