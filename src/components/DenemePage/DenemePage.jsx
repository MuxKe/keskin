import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

import deneme1 from "../../../public/bathroom/Bath1.png"
import deneme2 from "../../../public/bathroom/Bath2.png"
import deneme3 from "../../../public/bathroom/Bath3.png"
import deneme4 from "../../../public/bathroom/Bath4.png"
import deneme5 from "../../../public/bathroom/Bath5.png"

const DenemePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.secondPart}>
        <div className={styles.row}>
          <div className={styles.fifthBox}>
            <Link href="/">
              <Image
                src={deneme1}
                alt="bathroom"
                sizes="100vw"
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.firstPart}>
        <div className={styles.row}>
          <div className={styles.firstBox}>
            <Link href="/">
              <Image
                src={deneme2}
                alt="kolaj"
                sizes="100vw"
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </Link>
          </div>
          <div className={styles.secondBox}>
            <Link href="/">
              <Image
                src={deneme3}
                alt="bathroom"
                sizes="100vw"
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </Link>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.thirdBox}>
            <Link href="/">
              <Image
                src={deneme4}
                alt="bathroom"
                sizes="100vw"
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </Link>
          </div>
          <div className={styles.fourthBox}>
            <Link href="/">
              <Image
                src={deneme5}
                alt="bathroom"
                sizes="100vw"
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DenemePage;
