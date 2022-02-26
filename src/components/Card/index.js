import styles from "./Card.module.css";
import Image from "next/image";
export default function Card(props) {
  return (
    <div className="col-md-3 d-flex justify-content-center align-items-center">
      <div className={styles.card}>
        <div
          className={`${styles.card_image} d-flex align-items-center justify-content-center`}
        >
          <Image layout="fill" src={props.srcImage} />
        </div>
        <p className={styles.card_title}>{props.title}</p>
        <p className={styles.card_text}>{props.text}</p>
        <p className={styles.card_price}>R$ {props.price}</p>
        <div className="text-center">
          <button className={styles.card_button}>Comprar agora</button>
        </div>
      </div>
    </div>
  );
}
