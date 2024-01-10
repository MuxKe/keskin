import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const WasarollPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstPart}>
        <div className={styles.row}>
          <div className={styles.firstBox}>
            <Link href="/">
              <Image
                src="/wasaroll/WasaRoll5.png"
                fill
                alt="kolaj"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
          <div className={styles.secondBox}>
            <Link href="/">
              <Image
                src="/wasaroll/WasaRoll4.png"
                fill
                alt="wasaroll"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.thirdBox}>
            <Link href="/">
              <Image
                src="/wasaroll/WasaRoll2.png"
                fill
                alt="wasaroll"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
          <div className={styles.fourthBox}>
            <Link href="/">
              <Image
                src="/wasaroll/WasaRoll3.png"
                fill
                alt="wasaroll"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.secondPart}>
        <div className={styles.row}>
          <div className={styles.fifthBox}>
            <Link href="/">
              <Image
                src="/wasaroll/WasaRoll1.png"
                fill
                alt="wasaroll"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasarollPage;
