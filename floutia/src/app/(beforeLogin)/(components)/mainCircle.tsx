import variables from "../../app/styles/variables.module.scss";
import styles from "../../styles/page.module.css";
import Image from "next/image";

export default function mainCircle() {
  return (
    <div className={styles.mainCircle}>
      <Image
        src="/MainCircle.png"
        alt="mainCircle"
        width={500}
        height={500}>
        </Image>
    </div>
  );
}
