import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/LogoWhite.png" width={100} height={100} alt="Logo" />
      </div>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <Link target="_blank" href="https://www.behance.net/laydakeskin">
            <Image
              src="/icons/Behance.png"
              width={40}
              height={40}
              alt="behance"
            />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/marginalinteriors?igsh=MTV0Mmh4cjU2dHQwcA=="
          >
            <Image
              src="/icons/Instagram.png"
              width={40}
              height={40}
              alt="instagram"
            />
          </Link>

          <Link
            target="_blank"
            href="https://www.linkedin.com/company/marginal-interiors/"
          >
            <Image
              src="/icons/Linkedin.png"
              width={40}
              height={40}
              alt="linkedin"
            />
          </Link>

          <Link target="_blank" href="https://www.youtube.com/@ilaydakeski">
            <Image
              src="/icons/YouTube.png"
              width={40}
              height={40}
              alt="youtube"
            />{" "}
          </Link>
        </div>
        <div className=" text-white">
          &#169; Copyright. All rights reserved.
        </div>
      </div>
      <div className={styles.navigation}>
        <div className="flex flex-col gap-1 justify-center text-white text-sm">
          <Link href="/">Anasayfa</Link>
          <Link href="/hakkimizda">Hakkımızda</Link>
          <Link href="/projeler">Projeler</Link>
          <Link href="/iletisim">İletişim</Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
