import variables from "../../app/styles/variables.module.scss";
import styles from "../../styles/page.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/floutia_logo.png"
            alt="Floutia Logo"
            width={100}
            height={100}
            className={styles.logo}
          />
        </div>
        <div className={styles.headerColor}>OO님을 위한 곡 추천</div>
        <button className={styles.login}>로그인</button>
      </header>
    </div>
  );
}
