import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Intro1 from "../public/assets/projects/intro1.jpg";
import Intro2 from "../public/assets/projects/intro2.jpg";
import Intro3 from "../public/assets/projects/intro3.jpg";
import Intro4 from "../public/assets/projects/intro4.jpg";
import Introen1 from "../public/assets/projects/introen1.jpg";
import Introen2 from "../public/assets/projects/introen2.jpg";
import Introen3 from "../public/assets/projects/introen3.jpg";
import Introen4 from "../public/assets/projects/introen4.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const router = useRouter();
  const { locale, locales, asPath } = router;
  const { t } = useTranslation();
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl font-bold tracking-widest uppercase text-[#5651e5]">
          {t("Navbar.Project")}
        </p>
        <h2 className="py-4">{t("Project.Title")}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title={t("Project.Subtitle 1")}
            backgroundImg={locale === "mn" ? Intro1 : Introen1}
            projectUrl="/projectDetail"
            tech={t("Project.Desc")}
          />
          <ProjectItem
            title={t("Project.Subtitle 2")}
            backgroundImg={locale === "mn" ? Intro2 : Introen2}
            projectUrl="/projectDetail"
            tech={t("Project.Desc")}
          />
          <ProjectItem
            title={t("Project.Subtitle 3")}
            backgroundImg={locale === "mn" ? Intro3 : Introen3}
            projectUrl="/projectDetail"
            tech={t("Project.Desc")}
          />
          <ProjectItem
            title={t("Project.Subtitle 4")}
            backgroundImg={locale === "mn" ? Intro4 : Introen4}
            projectUrl="/projectDetail"
            tech={t("Project.Desc")}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
