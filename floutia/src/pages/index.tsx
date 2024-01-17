import variables from "../styles/variables.module.scss";
import styles from "../styles/page.module.css";
import Image from "next/image";
import Header from "../components/header";
import Sidebar from "../components/Sidebar";
import MainCircle from "../components/mainCircle";
import Template from "../components/Template";
import PlayList from "../components/PlayList";
export default function Main() {
  return (
    <>
      <div className={styles.body}>
        <Header />
        <div className={styles.main}>
          <Sidebar />
          <MainCircle />
        </div>
        <PlayList />
      </div>
    </>
  );
}
