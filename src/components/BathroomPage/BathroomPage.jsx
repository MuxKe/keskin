import Image from "next/image";
import styles from "./styles.module.css";

const BathroomPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.secondPart}>
        <div className={styles.row}>
          <div className={styles.fifthBox}>
            <Image
              src="/bathroom/Bath1.png"
              fill
              alt="bathroom"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <div className={styles.firstPart}>
        <div className={styles.row}>
          <div className={styles.firstBox}>
            <Image
              src="/bathroom/Bath2.png"
              fill
              alt="kolaj"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.secondBox}>
            <Image
              src="/bathroom/Bath3.png"
              fill
              alt="bathroom"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.thirdBox}>
            <Image
              src="/bathroom/bath4.png"
              fill
              alt="bathroom"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.fourthBox}>
            <Image
              src="/bathroom/Bath5.png"
              fill
              alt="bathroom"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BathroomPage;
