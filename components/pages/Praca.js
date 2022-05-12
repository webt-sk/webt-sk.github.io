import Layout from "../Layout";

export default function Praca(props) {
  return (
    <Layout
      otherLang={props.otherLang}
      otherPage={props.otherPage}
      className="content-center justify-evenly xl:h-fit"
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
        <p className="dark:text-white">{props.f.popis}</p>
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
