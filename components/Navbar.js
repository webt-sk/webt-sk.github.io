import Link from "next/link";

export default function Navbar(props) {
  return (
    <header className="bg-transparent flex justify-end px-28 py-14">
      <div className="flex justify-between mr-auto">
        <img height="40" width="40" src="/logo_blue.svg" alt="webt logo" />
        <div className="font-bold text-center h-fit self-center ml-3 text-2xl">
          webT
        </div>
      </div>
      <nav className="flex justify-between">
        <Link href="/">
          <a className="self-center mx-7">ÚVOD</a>
        </Link>
        <Link href="/o-nas">
          <a className="self-center mx-7">O NÁS</a>
        </Link>
        <Link href="/projekty">
          <a className="self-center mx-7">PROJEKTY</a>
        </Link>
        <Link href="/kontakt">
          <a className="self-center mx-7">KONTAKT</a>
        </Link>
        <a href="eng" className="self-center mx-7">
          ENG
        </a>
        <button className="ml-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
