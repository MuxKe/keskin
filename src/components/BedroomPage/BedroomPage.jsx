import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const BedroomPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.secondPart}>
        <div className={styles.row}>
          <div className={styles.fifthBox}>
              <Image
                src="/bedroom/Bedroom1.png"
                fill
                alt="Bedroom"
                style={{ objectFit: "cover" }}
              />
          </div>
        </div>
      </div>

      <div className={styles.firstPart}>
        <div className={styles.row}>
          <div className={styles.firstBox}>
              <Image
                src="/bedroom/Bedroom3.png"
                fill
                alt="Bedroom"
                style={{ objectFit: "cover" }}
              />
          </div>

          <div className={styles.secondBox}>
              <Image
                src="/bedroom/Bedroom2.png"
                fill
                alt="Bedroom"
                style={{ objectFit: "cover" }}
              />
          </div>
        </div>
      </div>

      <div className={styles.thirdPart}>
        <div className={styles.row}>
          <div className={styles.fifthBox}>
              <Image
                src="/bedroom/Bedroom4.png"
                fill
                alt="Bedroom"
                style={{ objectFit: "cover" }}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BedroomPage;
