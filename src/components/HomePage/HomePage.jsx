import Image from "next/image";
import styles from "./styles.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h2 className="flex items-center md:text-7xl text-5xl mb-2">
          Marginal <div className={styles.line}></div>
        </h2>
        <h2 className="md:text-7xl text-5xl ml-28 mb-10 ">Interiors</h2>
        <p className="text-justify font-light italic md:text-lg text-sm">
          Marjinal iç mekanlar, sadece göz alıcı dekorasyonlarla sınırlı değil;
          aynı zamanda özgün fikirlerin, cesur renk paletlerinin, dokuların ve
          malzemelerin bir araya geldiği sanat eserleridir. Evlerimiz, iş
          yerlerimiz veya herhangi bir yaşam alanı, bize özgü bir hikaye
          anlatmalı ve kimliğimizi yansıtmalıdır. Marjinal iç mekanlar, bu
          hikayeyi anlatmanın en etkili yolunu sunar.
        </p>
      </div>
      <div className={styles.image}>
        <Image
          src="/golgeli.png"
          fill
          sizes="(min-width: 1180px) 640px, (min-width: 1040px) 512px, (min-width: 760px) 704px, (min-width: 660px) 608px, (min-width: 560px) 512px, (min-width: 480px) 448px, (min-width: 440px) 352px, 288px"
          alt="home"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};
export default HomePage;
