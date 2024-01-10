import Image from "next/image";
import styles from "./styles.module.css";

const HakkimizdaPage = () => {
  return (
    <div className={styles.container}>
     <div className={styles.items}>
        <div className={styles.image}>
          <Image
            src="/hakkimizdaPage.png"
            sizes="(min-width: 1180px) 40vw, (min-width: 720px) 672px, (min-width: 620px) 576px, 256px"
            fill
            alt="home"
          />
        </div>
        <div className={styles.desc}>
          <h2 className={styles.title}>
            Vizyonumuz <div className={styles.line}></div>
          </h2>
          <p className="text-justify italic font-light text-lg">
            Bizim vizyonumuz, her proje için benzersiz ve marjinal bir yaklaşım
            geliştirmektir. Hayal ettiğinizden daha fazlasını elde etmeniz için
            buradayız. Sıradışı mobilyalar, özel tasarım aydınlatmalar, ilham
            veren sanat eserleri ve daha fazlasıyla iç mekanlarınıza yeni bir
            soluk getireceğiz. Her detayın, bir bütünün parçası olduğuna
            inanıyoruz ve bu yüzden tasarımlarımı titizlikle planlıyor ve hayata
            geçiriyoruz.
          </p>
        </div>
      </div>

      <div className={styles.items}>
        <div>
          <h2 className={styles.title}>
            İlayda Keskin<div className={styles.line}></div>
          </h2>
          <p className="text-justify italic font-light text-lg">
            Tasarımcı bir aileden gelen İlayda Keskin, eğitimini İç Mimarlık ve
            Endüstriyel Tasarım bölümlerinde tamamlamıştır. Eğitim hayatı
            boyunca marjinal bir çizgide ilerleyerek kendini özgün
            tasarımlarıyla ifade etmiştir. İç mekanlar, sadece yaşam alanları
            değil, aynı zamanda kişiliğimizi, tarzımızı ve ruh halimizi yansıtan
            birer tuvaldir düşüncesiyle Marginal Interiors’u kurmuştur.
          </p>
        </div>
        <div className={styles.PersonImage}>
          <Image
            src="/ilaydakeskin.png"
            sizes="(min-width: 1180px) 40vw, (min-width: 720px) 672px, (min-width: 620px) 576px, 256px"
            fill
            alt="home"
          />
        </div>
      </div>

      <div className={styles.items}>
        <div className={styles.PersonImage}>
          <Image
            src="/muratkeskin.png"
            sizes="(min-width: 1180px) 40vw, (min-width: 720px) 672px, (min-width: 620px) 576px, 256px"
            fill
            alt="home"
          />
        </div>
        <div >
          <h2 className={styles.title}>
            Murat Keskin
            <div className={styles.line}></div>
          </h2>
          <p className="text-justify italic font-light text-lg ">
            25 yıllık proje ve uygulama mimarlığı yanında, 10 yıllık yapı
            denetim tecrübesi ile şekillenmiş, eksiksiz bir yönetmelik ve
            mevzuat birikimine sahip Murat Keskin, yapıları bir malzeme yığını
            olarak değil, yaşayan ve yaşatan mekanlar olarak tasarlamayı amaç
            edinerek Marginal Interiors’un kurucu ortağı olmuştur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HakkimizdaPage;
