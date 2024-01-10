import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const ProjePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <div>
          <Link href="/projeler/yasam">
            <div className={styles.longBox}>
              <Image
                className="transition-opacity duration-300 ease-in-out transform group-hover:scale-105"
                src="/kolaj/Kolaj1.png"
                fill
                sizes="142px"
                alt="kolaj"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <p className="text-white text-3xl italic">Livingroom </p>
              <p className="text-white text-3xl italic">Design</p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/projeler/villa">
            <div className={styles.smallBox}>
              <Image
                src="/kolaj/Kolaj2.png"
                fill
                alt="kolaj"
                sizes="142px"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <p className="text-white text-3xl italic">Villa </p>
                <p className="text-white text-3xl italic">Design</p>

              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/projeler/moda-binasi">
            <div className={styles.smallBox}>
              <Image
                src="/kolaj/Kolaj3.png"
                fill
                alt="kolaj"
                sizes="142px"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <p className="text-white text-3xl italic">Headquarter</p>
                <p className="text-white text-3xl italic">Design</p>

              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.imageBox}>
        <div>
            <div className={styles.smallBox}>
              <Image
                src="/Char5.png"
                fill
                alt="kolaj"
                sizes="142px"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <p className="text-white text-3xl italic">Çok </p>
                <p className="text-white text-3xl italic">Yakında</p>
              </div>
            </div>
        </div>
        <div>
          <Link href="/projeler/hotel">
            <div className={styles.smallBox}>
              <Image
                src="/kolaj/Kolaj5.png"
                fill
                alt="kolaj"
                sizes="142px"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <p className="text-white text-3xl italic">Modern </p>
                <p className="text-white text-3xl italic">Lobby</p>
                <p className="text-white text-3xl italic">Design </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/projeler/cafe">
            <div className={styles.longBox}>
              <Image
                src="/kolaj/Kolaj6.png"
                fill
                alt="kolaj"
                sizes="142px"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <p className="text-white text-3xl italic">Modern Cafe </p>
                <p className="text-white text-3xl italic">Design </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.imageBox}>
        <div>
          <Link href="/projeler/wasaroll">
            <div className={styles.midBox}>
              <Image
                src="/kolaj/Kolaj7.png"
                fill
                alt="kolaj"
                sizes="142px"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <p className="text-white text-3xl italic">WasaRoll </p>
                <p className="text-white text-3xl italic">Restaurant</p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/projeler/bathroom">
            <div className={styles.midBox}>
              <Image
                src="/kolaj/Kolaj8.png"
                fill
                alt="kolaj"
                sizes="142px"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <p className="text-white text-3xl italic">Bathroom </p>
                <p className="text-white text-3xl italic">Design</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.imageBox}>
        <div>
          <Link href="/projeler/cocuk-odasi">
            <div className={styles.xlBox}>
              <Image
                src="/kolaj/Kolaj9.png"
                fill
                alt="kolaj"
                sizes="142px"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <p className="text-white text-3xl italic">Modern </p>
                <p className="text-white text-3xl italic">Kids Room </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/projeler/mutfak">
            <div className={styles.smallBox}>
              <Image
                src="/kolaj/Kolaj10.png"
                fill
                alt="kolaj"
                sizes="142px"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <p className="text-white text-3xl italic">Modern </p>
                <p className="text-white text-3xl italic">Kitchen Design </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.imageBox}>
        <div>
          <Link href="/projeler/micro-house">
            <div className={styles.tripleBox}>
              <Image
                src="/kolaj/Kolaj11.png"
                fill
                alt="kolaj"
                sizes="142px"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <p className="text-white text-3xl italic">Micro House</p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/projeler/bedroom">
            <div className={styles.tripleBox}>
              <Image
                src="/bedroom/Bedroom2.png"
                fill
                alt="kolaj"
                sizes="142px"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <p className="text-white text-3xl italic">Bedroom Design </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/projeler/hotel-room">
            <div className={styles.tripleBox}>
              <Image
                src="/kolaj/Kolaj13.png"
                fill
                alt="kolaj"
                sizes="142px"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <p className="text-white text-3xl italic">Suite Room</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjePage;
