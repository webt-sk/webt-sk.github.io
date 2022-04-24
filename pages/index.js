import Navbar from "../components/Navbar";

export default function Home(props) {
  return (
    <>
      <Navbar />
      <h1 className="underline font-bold text-3xl text-stone-600 dark:text-cyan-200">
        Hello world
      </h1>
    </>
  );
}
