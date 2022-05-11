import Link from "next/link";
import { useState, useEffect } from "react";

import Logo from "./Logo";
import ThemeButton from "./ThemeButton";
import MenuButton from "./MenuButton";

const linkClasses =
  "self-center mx-7 hover:text-zelena dark:hover:text-modra dark:text-white lg:my-2 hover:scale-105";

export default function Navbar(props) {
  const [isOpened, setIsOpened] = useState(false);

  function openCloseHandler() {
    setIsOpened((prevState) => {
      return !prevState;
    });
  }

  useEffect(() => {
    document.querySelector("html").lang =
      props.otherLang === "sk" ? "en" : "sk";
  }, [props.otherLang]);

  return (
    <header
      className={`flex justify-end px-28 py-14 flex-wrap sm:flex-row sm:justify-around sm:px-5 fixed w-full top-0 ${
        isOpened && "pb-4"
      }`}
    >
      <div className="flex justify-between mr-auto">
        <Link href={props.otherLang === "en" ? "/" : "/en"}>
          <a className="flex">
            <Logo />
            <div className="font-bold text-center h-fit self-center ml-3 text-2xl dark:text-white">
              webT
            </div>
          </a>
        </Link>
      </div>
      <nav
        className={`flex justify-between lg:mt-5 lg:order-4 lg:w-full lg:flex-col ${
          !isOpened && "lg:hidden"
        }`}
      >
        <Link href={props.otherLang === "en" ? "/" : "/en"}>
          <a className={linkClasses}>
            {props.otherLang === "en" ? "ÚVOD" : "HOME"}
          </a>
        </Link>
        <Link href={props.otherLang === "en" ? "/o-nas" : "/en/about-us"}>
          <a className={linkClasses}>
            {props.otherLang === "en" ? "O\u00a0NÁS" : "ABOUT\u00a0US"}
          </a>
        </Link>
        <Link href={props.otherLang === "en" ? "/projekty" : "/en/projects"}>
          <a className={linkClasses}>
            {props.otherLang === "en" ? "PROJEKTY" : "PROJECTS"}
          </a>
        </Link>
        <Link href={props.otherLang === "en" ? "/kontakt" : "/en/contact"}>
          <a className={linkClasses}>
            {props.otherLang === "en" ? "KONTAKTY" : "CONTACTS"}
          </a>
        </Link>
        <Link href={props.otherPage}>
          <a className={linkClasses}>{props.otherLang.toUpperCase()}</a>
        </Link>
      </nav>
      <ThemeButton className="ml-7 dark:text-white sm:m-0 hover:text-zelena dark:hover:text-modra" />
      <MenuButton
        onClick={openCloseHandler}
        className="dark:text-white ml-5 hidden lg:block hover:text-zelena dark:hover:text-modra"
      />
    </header>
  );
}
