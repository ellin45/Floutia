import type {Metadata} from "next";
import {Inter} from "next/font/google";
import variables from "../../styles/variables.module.scss";
import styles from "../../app/styles/page.module.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "floutia",
  description: "Listen to music",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <h1 style={{color: variables.primaryColor}}>Hello, Next.js!</h1>
    </html>
  );
}
