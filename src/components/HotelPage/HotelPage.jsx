import Image from "next/image";
import styles from "./styles.module.css";

const HotelPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstBox}>
          <Image
            src="/hotel/Hotel1.png"
            fill
            alt="hotel"
            style={{ objectFit: "cover" }}
          />
      </div>

      <div className={styles.secondBox}>
          <Image
          className={styles.image}
            src="/hotel/Hotel2.png"
            fill
            alt="hotel"
            style={{ objectFit: "cover" }}
          />
      </div>

      <div className={styles.thirdBox}>
          <Image
            src="/hotel/Hotel3.png"
            fill
            alt="hotel"
            style={{ objectFit: "cover", objectPosition: "80%" }}
          />
      </div>
    </div>
  );
};

export default HotelPage;
