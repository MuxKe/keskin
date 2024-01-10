import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const YasamPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstBox}>
        <Link href="/">
          <Image
            src="/yasam/yasam3.jpg"
            fill
            alt="yasam"
            style={{ objectFit: "cover" }}
          />
        </Link>
      </div>

      <div className={styles.secondBox}>
        <Link href="/">
          <Image
            src="/yasam/yasam1.jpg"
            fill
            alt="yasam"
            style={{ objectFit: "cover" }}
          />
        </Link>
      </div>

      <div className={styles.thirdBox}>
        <Link href="/">
          <Image
            src="/yasam/yasam2.jpg"
            fill
            alt="yasam"
            style={{ objectFit: "cover" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default YasamPage;
