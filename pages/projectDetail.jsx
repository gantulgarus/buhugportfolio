import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import projectImg from "../public/assets/farm-bg.jpg";
import Intro1 from "../public/assets/projects/intro1.jpg";
import Intro2 from "../public/assets/projects/intro2.jpg";
import Intro3 from "../public/assets/projects/intro3.jpg";
import Intro4 from "../public/assets/projects/intro4.jpg";
import Introen1 from "../public/assets/projects/introen1.jpg";
import Introen2 from "../public/assets/projects/introen2.jpg";
import Introen3 from "../public/assets/projects/introen3.jpg";
import Introen4 from "../public/assets/projects/introen4.jpg";

const ProjectDetail = () => {
  const router = useRouter();
  const { locale, locales, asPath } = router;
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={projectImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{t("Navbar.Title")}</h2>
          <h3>{t("Navbar.Project")}</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-5">
          <h2 className="my-5">{t("Navbar.Project")}</h2>
          <Image className="py-4" src={locale === "mn" ? Intro1 : Introen1} alt="Intro 1" />
          <Image className="py-4" src={locale === "mn" ? Intro2 : Introen2} alt="Intro 2" />
          <Image className="py-4" src={locale === "mn" ? Intro3 : Introen3} alt="Intro 3" />
          <Image className="py-4" src={locale === "mn" ? Intro4 : Introen4} alt="Intro 4" />
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">{t("Project.Back")}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}