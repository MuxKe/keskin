import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const MicroHousePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstPart}>
        <div className={styles.row}>
          <div className={styles.firstBox}>
            <Link href="/">
              <Image
                src="/micro-house/Micro1.png"
                fill
                alt="micro"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>

          <div className={styles.secondBox}>
            <Link href="/">
              <Image
                src="/micro-house/Micro2.png"
                fill
                alt="micro"
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
                src="/micro-house/Micro3.png"
                fill
                alt="micro"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.thirdPart}>
        <div className={styles.row}>
          <div className={styles.fifthBox}>
            <Link href="/">
              <Image
                src="/micro-house/Micro4.png"
                fill
                alt="micro"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroHousePage;
