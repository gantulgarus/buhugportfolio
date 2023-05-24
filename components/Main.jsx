import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { Rubik_Burned } from "next/font/google";
import {useTranslation} from "next-i18next"
import { FaLinkedinIn, FaFacebook, FaYoutube } from "react-icons/fa";
import css from "./Main.module.css";

const rubik = Rubik_Burned({ subsets: ["latin"], weight: "400" });

const Main = () => {
  const { t } = useTranslation();
  return (
    <div id={css.home} className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="text-white">
          <p className="uppercase text-md tracking-widest text-white">
            <span className={rubik.className}>{t("Home.Subtitle")}</span>
          </p>
          <h1 className={rubik.className}>{t("Home.Title")}</h1>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 text-black">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaFacebook />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="https://youtube.com">
              <div className="rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaYoutube />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
