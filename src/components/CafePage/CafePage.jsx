import Image from "next/image";
import styles from "./styles.module.css";

const CafePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstBox}>
          <Image
            src="/cafe/Cafe1.png"
            fill
            alt="cafe"
            style={{ objectFit: "cover" }}
          />
      </div>

      <div className={styles.secondBox}>
          <Image
            className={styles.image}
            src="/cafe/Cafe3.png"
            fill
            alt="cafe"
            style={{ objectFit: "cover" }}
          />
      </div>

      <div className={styles.thirdBox}>
          <Image
            src="/cafe/Cafe2.png"
            fill
            alt="cafe"
            style={{ objectFit: "cover", objectPosition: "45%" }}

          />
      </div>
    </div>
  );
};

export default CafePage;
