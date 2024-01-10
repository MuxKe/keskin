"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./styles.module.css";
import Link from "next/link";

const IletisimPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3tdo2er",
        "template_ogl3x4p",
        form.current,
        "eFyJswhcuXkZySK4g"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center w-full py-24 lg:gap-16  gap-32">
      <div className="lg:w-1/2 w-full">
        <div>
          <h2 className="flex items-center font-bold text-6xl mb-4">
            İletişim<div className={styles.line}></div>
          </h2>
          <p className="text-justify text-lg font-light italic">
            İç mekanlarınıza sıra dışı bir dokunuş katmak ve marjinal tasarımın
            izinde ilerlemek isterseniz, bizimle iletişime geçiniz. Sizin için
            en özel ve unutulmaz alanları tasarlamak için buradayız.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="mb-2 font-semibold text-lg">İlayda Keskin</h3>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-12">
            <div className="flex flex-row gap-2">
              <h4 className="font-semibold">Telefon</h4>
              <p>+90 530 364 1580</p>
            </div>
            <div className="flex flex-row gap-2">
              <h4 className="font-semibold">E-posta</h4>
              <p>ilayda@marginalinteriors.com.tr</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="mb-2 font-semibold text-lg">Murat Keskin</h3>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-12">
            <div className="flex flex-row gap-2">
              <h4 className="font-semibold">Telefon</h4>
              <p>+90 542 828 1003</p>
            </div>
            <div className="flex flex-row gap-2">
              <h4 className="font-semibold">E-posta</h4>
              <p>murat@marginalinteriors.com.tr</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="mb-2 font-semibold text-lg">Showroom & Office</h3>
          <Link target="_blank" href='https://www.google.com/maps/place/19+May%C4%B1s,+19+May%C4%B1s+Cd.+No:26,+34360+%C5%9Ei%C5%9Fli%2F%C4%B0stanbul/@41.0575738,28.9913189,17z/data=!3m1!4b1!4m6!3m5!1s0x14cab7068178a383:0xe1a1058bf9dbd778!8m2!3d41.0575738!4d28.9938992!16s%2Fg%2F11c2d84vd2?entry=ttu' className="flex flex-col sm:flex-row gap-2 sm:gap-12 italic text-blue-500">
          19 Mayıs, 19 Mayıs Cd. No:26, 34360 Şişli/İstanbul
        
          </Link>
        </div>      </div>

      <div className="lg:w-1/2 w-full">
        <div>
          <form
            className="flex flex-col sm:grid sm:grid-cols-2 gap-2 sm:w-[480px] "
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="user_name"
              placeholder="Ad Soyad*"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="E-mail*"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Konu Başlığı*"
              required
            />
            <input type="number" name="user_phone" placeholder="Telefon" />
            <textarea
              className={styles.item}
              name="message"
              placeholder="Mesajınız...*"
              required
            />
            <button className="flex items-center justify-center bg-black text-white h-10">
              Gönder.
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default IletisimPage;
