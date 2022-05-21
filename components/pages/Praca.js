import Layout from "../Layout";
import { useEffect } from "react";

export default function Praca(props) {
  useEffect(() => {
    document.body.className = "bg-light dark:bg-darkClean";

    return () => (document.body.className = "dark:bg-dark bg-light");
  }, []);

  return (
    <Layout
      otherLang={props.otherLang}
      otherPage={props.otherPage}
      className="flex-wrap-reverse content-center justify-evenly xl:h-fit"
    >
      <div
        className="w-12 h-1/2 self-center xl:h-80 sm:w-5"
        style={{
          borderBottomLeftRadius: "100px",
          backgroundColor: props.color,
        }}
      />
      <div className="w-1/3 self-center xl:w-4/5">
        <h1 className="dark:text-white text-2xl mb-5">{props.nazov}</h1>
        <p className="dark:text-white mb-8">{props.f.popis}</p>
        <a
          className={`py-3 px-5 text-lg rounded-lg ${props.link.text}`}
          style={{ backgroundColor: props.color }}
          href={props.link.link}
        >
          WEB
        </a>
      </div>
      <img
        className="self-center shadow-lg xl:w-5/6 xl:mb-10"
        src={props.image}
        alt={
          props.otherLang === "sk"
            ? "screenshot of work"
            : "snímka obrazovky práce"
        }
        width="50%"
        height="auto"
      />
    </Layout>
  );
}
