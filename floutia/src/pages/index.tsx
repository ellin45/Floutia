import variables from "../styles/variables.module.scss";
import styles from "../styles/page.module.css";
import Header from "../components/common/Layout/header";
import Sidebar from "../components/common/Layout/Sidebar";
import MainCircle from "../components/common/Layout/mainCircle";
import PlayList from "../components/common/Layout/PlayList";

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
