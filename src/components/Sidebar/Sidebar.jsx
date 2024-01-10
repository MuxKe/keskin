"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// import { Josefin_Sans } from "next/font/google";

export default function Header() {
  // const josefin = Josefin_Sans({ subsets: ["latin"] });
  const router = usePathname();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-8">
      <nav >
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px] text-3xl">
              <li className=" my-2 ">
                <a href="/">Anasayfa</a>
              </li>
              <li className=" my-2 ">
                <a href="hakkimizda">Hakkımızda</a>
              </li>
              <li className=" my-2 ">
                <a href="/projeler">Projeler</a>
              </li>
              <li className=" my-2 ">
                <a href="/iletisim">İletişim</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex font-josefin">
          <li>
            <Link
              className={router === "/" ? "border-b-2 border-black pb-2" : ""}
              href="/"
            >
              Anasayfa
            </Link>
          </li>
          <li>
            <Link
              className={
                router === "/hakkimizda" ? "border-b-2 border-black pb-2" : ""
              }
              href="/hakkimizda"
            >
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link
              className={
                router === "/projeler" ? "border-b-2 border-black pb-2" : ""
              }
              href="/projeler"
            >
              Projeler
            </Link>
          </li>
          <li>
            <Link
              className={
                router === "/iletisim" ? "border-b-2 border-black pb-2" : ""
              }
              href="/iletisim"
            >
              İletişim
            </Link>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
