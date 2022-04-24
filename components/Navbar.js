import Link from "next/link";
import ThemeButton from "./ThemeButton";
import Logo from "./Logo"

const linkClasses = "self-center mx-7 dark:text-white";

export default function Navbar() {
  return (
    <header className="bg-transparent flex justify-end px-28 py-14">
      <div className="flex justify-between mr-auto">
        <Logo />
        <div className="font-bold text-center h-fit self-center ml-3 text-2xl dark:text-white">
          webT
        </div>
      </div>
      <nav className="flex justify-between">
        <Link href="/">
          <a className={linkClasses}>ÚVOD</a>
        </Link>
        <Link href="/o-nas">
          <a className={linkClasses}>O NÁS</a>
        </Link>
        <Link href="/projekty">
          <a className={linkClasses}>PROJEKTY</a>
        </Link>
        <Link href="/kontakt">
          <a className={linkClasses}>KONTAKT</a>
        </Link>
        <a href="eng" className={linkClasses}>
          ENG
        </a>
        <ThemeButton />
      </nav>
    </header>
  );
}
