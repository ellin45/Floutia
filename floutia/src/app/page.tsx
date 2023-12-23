import variables from "../../app/styles/variables.module.scss";
import styles from "../app/styles/page.module.css";
import Image from "next/image";
import Header from "./(beforeLogin)/(components)/header";
import Sidebar from "./(beforeLogin)/(components)/Sidebar";
import MainCircle from "./(beforeLogin)/(components)/mainCircle";

export default function Main() {
  return (

      <div className={styles.main}>
        <Header />
        <Sidebar />
        <MainCircle />
      </div>

  );
}
