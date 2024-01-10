import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const VillaPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstPart}>
        <div className={styles.row}>
          <div className={styles.firstBox}>
            <Link href="/">
              <Image
                src="/mutfak/mutfak1.jpg"
                fill
                alt="mutfak"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
          <div className={styles.secondBox}>
            <Link href="/">
              <Image
                src="/mutfak/mutfak2.jpg"
                fill
                alt="mutfak"
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
                src="/mutfak/mutfak4.jpg"
                fill
                alt="mutfak"
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
                src="/mutfak/mutfak3.jpg"
                fill
                alt="mutfak"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
          <div className={styles.fourthBox}>
            <Link href="/">
              <Image
                src="/mutfak/mutfak5.jpg"
                fill
                alt="mutfak"
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillaPage;
