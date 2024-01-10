import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const ProjePageTablet = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstStep}>
        <div className={styles.imageBox}>
          <div className={styles.longBox}>
            <Link href="/projeler/yasam">
              <div className="overflow-hidden">
                <Image
                  className="transition-opacity duration-300 ease-in-out transform group-hover:scale-105"
                  src="/kolaj/Kolaj1.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="kolaj"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <p className="text-white text-3xl italic">
                    Livingroom
                  </p>

                </div>
              </div>
            </Link>
          </div>
          <div className={styles.smallBox}>
            <Link href="/projeler/villa">
              <div className="overflow-hidden">
                <Image
                  className="transition-opacity duration-300 ease-in-out transform group-hover:scale-105"
                  src="/villa/villa2.jpg"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="kolaj"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <p className="text-white text-3xl italic">Modern </p>
                  <p className="text-white text-3xl italic"> Villa</p>

                </div>
              </div>
            </Link>
          </div>
          <div className={styles.smallBox}>
            <Link href="/projeler/moda-binasi">
              <div className="overflow-hidden">
                <Image
                  className="transition-opacity duration-300 ease-in-out transform group-hover:scale-105"
                  src="/kolaj/Kolaj3.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="kolaj"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <p className="text-white text-3xl italic">Headquarter</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.imageBox}>
          <div className={styles.smallBox}>
              <div className="overflow-hidden">
                <Image
                  className="transition-opacity duration-300 ease-in-out transform group-hover:scale-105"
                  src="/Char1.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="kolaj"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <p className="text-white text-3xl italic">Çok </p>
                  <p className="text-white text-3xl italic"> Yakında</p>

                </div>
              </div>
          </div>
          <div className={styles.smallBox}>
            <Link href="/projeler/hotel">
              <div className="overflow-hidden">
                <Image
                  className="transition-opacity duration-300 ease-in-out transform group-hover:scale-105"
                  src="/kolaj/Kolaj5.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="kolaj"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <p className="text-white text-3xl italic">Lobby </p>
                  <p className="text-white text-3xl italic"> Design</p>

                </div>
              </div>
            </Link>
          </div>
          <div className={styles.longBox}>
            <Link href="/projeler/cafe">
              <div className="overflow-hidden">
                <Image
                  className="transition-opacity duration-300 ease-in-out transform group-hover:scale-105"
                  src="/kolaj/Kolaj6.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="kolaj"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <p className="text-white text-3xl italic">Modern </p>
                  <p className="text-white text-3xl italic">Cafe</p>
                  <p className="text-white text-3xl italic">Design</p>
                </div>

              </div>
            </Link>
          </div>
        </div>

        <div className={styles.imageBox}>
          <div className={styles.xlBox}>
            <Link href="/projeler/cocuk-odasi">
              <div className="overflow-hidden">
                <Image
                  className="transition-opacity duration-300 ease-in-out transform group-hover:scale-105"
                  src="/kolajTablet/CocukOdasiRevize.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="kolaj"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <p className="text-white text-3xl italic">Kids </p>
                  <p className="text-white text-3xl italic">Room</p>
                  <p className="text-white text-3xl italic"> Design</p>

                </div>
              </div>
            </Link>
          </div>
          <div className={styles.smallBox}>
            <Link href="/projeler/mutfak">
              <div className="overflow-hidden">
                <Image
                  className="transition-opacity duration-300 ease-in-out transform group-hover:scale-105"
                  src="/kolaj/Kolaj10.png"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="kolaj"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <p className="text-white text-3xl italic">Kitchen</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.secondStep}>
        {/* <div className={styles.imageBox}> */}
        <div className={styles.orta}>
          <Link href="/projeler/wasaroll">
            <div className="overflow-hidden">
              <Image
                className="transition-opacity duration-300 ease-in-out transform group-hover:scale-105"
                src="/kolaj/Kolaj7.png"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="kolaj"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <p className="text-white text-3xl italic">Wasaroll </p>
                <p className="text-white text-3xl italic"> Restaurant</p>

              </div>
            </div>
          </Link>
        </div>
        <div className={styles.yatay}>
          <Link href="/projeler/micro-house">
            <div className="overflow-hidden">
              <Image
                className="transition-opacity duration-300 ease-in-out transform group-hover:scale-105"
                src="/kolaj/Kolaj11.png"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="kolaj"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <p className="text-white text-3xl italic">Micro</p>
                <p className="text-white text-3xl italic"> House </p>
                <p className="text-white text-3xl italic">  Design</p>

              </div>
            </div>
          </Link>
          {/* </div> */}
        </div>
      </div>

      <div className={styles.thirdStep}>
        <div className={styles.tripleBox}>
          <Link href="/projeler/bathroom">
            <div className="overflow-hidden">
              <Image
                className="transition-opacity duration-300 ease-in-out transform group-hover:scale-105"
                src="/kolajTablet/BanyoRevise.png"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="kolaj"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <p className="text-white text-3xl italic">Bathroom </p>
                <p className="text-white text-3xl italic"> Design</p>

              </div>
            </div>
          </Link>
        </div>
        <div className={styles.tripleBox}>
          <Link href="/projeler/bedroom">
            <div className="overflow-hidden">
              <Image
                className="transition-opacity duration-300 ease-in-out transform group-hover:scale-105"
                src="/bedroom/Bedroom2.png"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="kolaj"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <p className="text-white text-3xl italic">Bedroom </p>
                <p className="text-white text-3xl italic"> Design</p>

              </div>
            </div>
          </Link>
        </div>
        <div className={styles.tripleBox}>
          <Link href="/projeler/hotel-room">
            <div className="overflow-hidden">
              <Image
                className="transition-opacity duration-300 ease-in-out transform group-hover:scale-105"
                src="/kolajTablet/OtelodasiRevise.png"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="kolaj"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col gap-1 items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <p className="text-white text-3xl italic">Suite  </p>
                <p className="text-white text-3xl italic"> Room </p>

              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjePageTablet;
