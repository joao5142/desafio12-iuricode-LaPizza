import styles from "./Head.module.css";
import Image from "next/image";

export default function Head() {
  return (
    <header
      className={`${styles.header} d-flex align-items-center justify-content-center`}
    >
      <p className={styles.header_title}>
        La P<span className="text-yellow">i</span>
        <span className="text-red">z</span>
        <span className="text-green">z</span>a
      </p>

      <div className={styles.vegetable}>
        <Image priority src={"/assets/img/vegetable1.svg"} layout="fill" />
      </div>
    </header>
  );
}
