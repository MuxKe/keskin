import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const ModaBinasiPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstPart}>
        <div className={styles.row}>
          <div className={styles.firstBox}>
            <Link href="/">
              <Image
                src="/moda/OfisMobil1.png"
                fill
                alt="moda"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
          <div className={styles.secondBox}>
            <Link href="/">
              <Image
                src="/moda/OfisMobil4.png"
                fill
                alt="moda"
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
                src="/moda/OfisMobil2.png"
                fill
                alt="moda"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.firstPart}>
        <div className={styles.row}>
          <div className={styles.thirdBox}>
            <Link href="/">
              <Image
                src="/moda/OfisMobil5.png"
                fill
                alt="moda"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
          <div className={styles.fourthBox}>
            <Link href="/">
              <Image
                src="/moda/OfisMobil6.jpg"
                fill
                alt="moda"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModaBinasiPage;
