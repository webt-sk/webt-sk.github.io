import Layout from "../components/Layout";
import Link from "next/link";

export default function FourOhFour() {
  return (
    <main className="text-center text-black dark:text-white flex flex-col justify-center h-screen">
      <h1 className="mb-12 text-black dark:text-white font-bold text-5xl">
        404
      </h1>
      <h2 className="mb-3 text-black dark:text-white text-xl">
        Stránka nenájdená
      </h2>
      <h2 className="mb-12 text-black dark:text-white text-xl">
        Page not found
      </h2>
      <Link href="/">
        <a className="w-fit text-white dark:text-black bg-zelena dark:bg-modra mx-auto p-3 rounded-lg">
          Domov/Home
        </a>
      </Link>
    </main>
  );
}
