import Image from "next/image";
import Card from "../Card";
import styles from "./Main.module.css";

export default function Main() {
  return (
    <main className={`${styles.main} container`}>
      <section className={styles.section_best}>
        <p className={styles.title}>Mais vendidas</p>
        <div className={`${styles.fish} `}>
          <Image priority layout="fill" src={"/assets/img/fish.svg"} />
        </div>

        <div className={`${styles.vegetable} ${styles.vegetable2}`}>
          <Image priority layout="fill" src={"/assets/img/vegetable2.svg"} />
        </div>

        <div className={`${styles.vegetable} ${styles.vegetable3}`}>
          <Image priority layout="fill" src={"/assets/img/vegetable3.svg"} />
        </div>

        <div className={`${styles.vegetable} ${styles.vegetable4}`}>
          <Image priority layout="fill" src={"/assets/img/vegetable4.svg"} />
        </div>

        <div className="row">
          <Card
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            title="La Cuma"
            srcImage="/assets/img/card_pizza1.svg"
            price="23"
          />
          <Card
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            title="La Menta"
            srcImage="/assets/img/card_pizza2.svg"
            price="23"
          />
          <Card
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            title="La Bana"
            srcImage="/assets/img/card_pizza3.svg"
            price="23"
          />
          <Card
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            title="La toca"
            srcImage="/assets/img/card_pizza4.svg"
            price="23"
          />
        </div>
      </section>

      <section className={styles.section_restaurant}>
        <div className="row position-relative justify-content-center">
          {/* Images  */}
          <div className={`${styles.vegetable} ${styles.vegetable5}`}>
            <Image priority layout="fill" src={"/assets/img/vegetable5.svg"} />
          </div>

          {/* ROW SECTION */}
          <div
            className={`${styles.container_image} col-md-6 position-relative  me-md-5`}
          >
            <div className={`${styles.pizza_rounded} ${styles.rounded_1}`}>
              <Image priority layout="fill" src={"/assets/img/pizza1.svg"} />
            </div>

            <Image priority layout="fill" src={"/assets/img/restaurant.svg"} />
          </div>

          <div className="col-md-6 d-flex justify-content-center align-items-center position-relative">
            <div className={`${styles.pizza_rounded} ${styles.rounded_2} `}>
              <Image priority layout="fill" src={"/assets/img/pizza2.png"} />
            </div>

            <div className={`${styles.container_about} mt-md-none mt-5`}>
              <p className={styles.title}>
                Sobre a La P<span className="text-yellow">i</span>
                <span className="text-red">z</span>
                <span className="text-green">z</span>a
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                quis justo sem. Donec consequat, nunc a dapibus dapibus, justo
                dolor tristique tortor, sit amet tincidunt lorem nisl at ex.
                Cras dolor purus, varius in euismod pretium, finibus nec mi.
                Curabitur aliquam pharetra lectus in pharetra. Nullam viverra
                elementum neque quis fermentum.{" "}
              </p>

              <button className={styles.button_read_more}>Ler mais</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
