import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const MutfakPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstPart}>
        <div className={styles.firstBox}>
          <Link href="/">
            <Image
              src="/villa/villa1.jpg"
              fill
              alt="kolaj"
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>
        <div className={styles.secondBox}>
          <Link href="/">
            <Image
              src="/villa/villa2.jpg"
              fill
              alt="villa"
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>
      </div>

      <div className={styles.secondPart}>
        <div className={styles.row}>
          <div className={styles.thirdBox}>
            <Link href="/">
              <Image
                src="/villa/villa3.jpg"
                fill
                alt="villa"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
          <div className={styles.fourthBox}>
            <Link href="/">
              <Image
                src="/villa/villa4.jpg"
                fill
                alt="villa"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.fifthBox}>
            <Link href="/">
              <Image
                src="/villa/villa5.jpg"
                fill
                alt="villa"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
          <div className={styles.sixthBox}>
            <Link href="/">
              <Image
                src="/villa/villa6.jpg"
                fill
                alt="villa"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutfakPage;
