import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import AboutImg from "../public/assets/video.jpg";

const About = () => {
  const { t } = useTranslation();
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl font-bold tracking-widest text-[#5651e5]">
            {t("Navbar.About")}
          </p>
          <h2 className="py-4">{t("About.Title")}</h2>
          <ul className=" text-gray-600 list-disc list-outside px-7 py-1 leading-relaxed">
            <li>{t("About.Description 1")}</li>
            <li>{t("About.Description 2")}</li>
            <li>{t("About.Description 3")}</li>
            <li>{t("About.Description 4")}</li>
          </ul>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
