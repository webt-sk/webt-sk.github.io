import Link from "next/link";
import { useState } from "react";

import Logo from "./Logo";
import ThemeButton from "./ThemeButton";
import MenuButton from "./MenuButton";

const linkClasses = "self-center mx-7 dark:text-white";

export default function Navbar(props) {
  const [isOpened, setIsOpened] = useState(false);

  function openCloseHandler() {
    setIsOpened((prevState) => {
      return !prevState;
    });
  }

  return (
    <header className="bg-transparent flex justify-end px-28 py-14 md:flex-row md:justify-around md:p-5">
      <div className="flex justify-between mr-auto md:w-full md:m-0">
        <Link href={props.otherLang === "EN" ? "/" : "/en"}>
          <a className="flex">
            <Logo />
            <div className="font-bold text-center h-fit self-center ml-3 text-2xl dark:text-white">
              webT
            </div>
          </a>
        </Link>
      </div>
      <nav className={`flex justify-between ${!isOpened && "md:hidden"}`}>
        <Link href={props.otherLang === "EN" ? "/" : "/en"}>
          <a className={linkClasses}>
            {props.otherLang === "EN" ? "ÚVOD" : "HOME"}
          </a>
        </Link>
        <Link href={props.otherLang === "EN" ? "/o-nas" : "/en/about-us"}>
          <a className={linkClasses}>
            {props.otherLang === "EN" ? "O NÁS" : "ABOUT US"}
          </a>
        </Link>
        <Link href={props.otherLang === "EN" ? "/projekty" : "/en/projects"}>
          <a className={linkClasses}>
            {props.otherLang === "EN" ? "PROJEKTY" : "PROJECTS"}
          </a>
        </Link>
        <Link href={props.otherLang === "EN" ? "/kontakt" : "/en/contact"}>
          <a className={linkClasses}>
            {props.otherLang === "EN" ? "KONTAKTY" : "CONTACTS"}
          </a>
        </Link>
        <Link href={props.otherPage}>
          <a className={linkClasses}>{props.otherLang}</a>
        </Link>
      </nav>
      <ThemeButton className="ml-7 dark:text-white md:m-0" />
      <MenuButton onClick={openCloseHandler} className="dark:text-white ml-5" />
    </header>
  );
}
