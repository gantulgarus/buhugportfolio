import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaFacebook, FaYoutube } from "react-icons/fa";
import NavLogo from "../public/assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("white");
  const [linkColor, setLinkColor] = useState("#1f2937");
  // const [position, setPosition] = useState('fixed')

  const router = useRouter();

  const { locale, locales, asPath } = router;
  const { t } = useTranslation();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src={NavLogo}
            alt="/"
            width="125"
            height="50"
            className="cursor-pointer p-2"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm font-bold uppercase hover:border-b">
              <Link
                href="/"
                className={
                  router.asPath === "/" ? "bg-orange-100 rounded-md p-3" : ""
                }
              >
                {t("Navbar.Home")}
              </Link>
            </li>
            <li className="ml-10 text-sm font-bold uppercase hover:border-b">
              <Link
                href="/#about"
                className={
                  router.asPath === "/#about"
                    ? "bg-orange-100 rounded-md p-3"
                    : ""
                }
              >
                {t("Navbar.About")}
              </Link>
            </li>
            <li className="ml-10 text-sm font-bold uppercase hover:border-b">
              <Link
                href="/#skills"
                className={
                  router.asPath === "/#skills"
                    ? "bg-orange-100 rounded-md p-3"
                    : ""
                }
              >
                {t("Navbar.Operation")}
              </Link>
            </li>
            <li className="ml-10 text-sm font-bold uppercase hover:border-b">
              <Link
                href="/#projects"
                className={
                  router.asPath === "/#projects"
                    ? "bg-orange-100 rounded-md p-3"
                    : ""
                }
              >
                {t("Navbar.Project")}
              </Link>
            </li>
            <li className="ml-10 text-sm font-bold uppercase hover:border-b">
              <Link
                href="/#contact"
                className={
                  router.asPath === "/#contact"
                    ? "bg-orange-100 rounded-md p-3"
                    : ""
                }
              >
                {t("Navbar.Contact")}
              </Link>
            </li>
            <li className="ml-10 text-sm font-bold uppercase hover:border-b">
              {locales.map((l, i) => {
                return (
                  <Link href={asPath} className="px-1" locale={l} key={l}><span className={l === locale ? `fi fis fi-${l} scale-125` : `fi fis fi-${l}`}></span></Link>
                  // <span
                  //   key={i}
                  //   className={l === locale ? "text-red-600 px-1" : ""}
                  // >
                    
                  //   <Link href={asPath} locale={l}>
                  //     {l}
                  //   </Link>
                  // </span>
                );
              })}
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={NavLogo} width="130" height="70" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">{t("Navbar.Title")}</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className={`py-4 text-sm ${
                    router.asPath === "/" ? "text-yellow-600 font-bold" : ""
                  }`}
                >
                  {t("Navbar.Home")}
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className={`py-4 text-sm ${
                    router.asPath === "/#about" ? "text-yellow-600 font-bold" : ""
                  }`}>
                  {t("Navbar.About")}
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className={`py-4 text-sm ${
                    router.asPath === "/#skills" ? "text-yellow-600 font-bold" : ""
                  }`}>
                  {t("Navbar.Operation")}
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className={`py-4 text-sm ${
                    router.asPath === "/#projects" ? "text-yellow-600 font-bold" : ""
                  }`}>
                  {t("Navbar.Project")}
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className={`py-4 text-sm ${
                    router.asPath === "/#contact" ? "text-yellow-600 font-bold" : ""
                  }`}>
                  {t("Navbar.Contact")}
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                {t("Navbar.Social")}
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaFacebook />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="https://youtube.com" target="_blank">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <FaYoutube />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
