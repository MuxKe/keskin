import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const CocukOdasiPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.secondPart}>
        <div className={styles.row}>
          <div className={styles.fifthBox}>
              <Image
                src="/cocuk/Cocuk1.png"
                fill
                alt="cocuk"
                style={{ objectFit: "cover" }}
              />
          </div>
        </div>
      </div>

      <div className={styles.firstPart}>
        <div className={styles.row}>
          <div className={styles.firstBox}>
              <Image
                src="/cocuk/Cocuk3.png"
                fill
                alt="cocuk"
                style={{ objectFit: "cover" }}
              />
          </div>

          <div className={styles.secondBox}>
              <Image
                src="/cocuk/Cocuk2.png"
                fill
                alt="cocuk"
                style={{ objectFit: "cover" }}
              />
          </div>
        </div>
      </div>

      <div className={styles.thirdPart}>
        <div className={styles.row}>
          <div className={styles.fifthBox}>
              <Image
                src="/cocuk/Cocuk4.png"
                fill
                alt="cocuk"
                style={{ objectFit: "cover" }}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocukOdasiPage;
