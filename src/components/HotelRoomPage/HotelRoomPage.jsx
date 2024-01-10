import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const HotelRoomPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstBox}>
          <Image
            src="/hotel-room/HotelRoom1.png"
            fill
            alt="hotel"
            style={{ objectFit: "cover" }}
          />
      </div>

      <div className={styles.secondBox}>
          <Image
            className={styles.image}
            src="/hotel-room/HotelRoom2.png"
            fill
            alt="hotel"
            style={{ objectFit: "cover" }}
          />
      </div>

      <div className={styles.thirdBox}>
          <Image
            src="/hotel-room/HotelRoom3.png"
            fill
            alt="hotel"
            style={{ objectFit: "cover", objectPosition: "80%" }}
          />
      </div>
    </div>
  );
};

export default HotelRoomPage;
