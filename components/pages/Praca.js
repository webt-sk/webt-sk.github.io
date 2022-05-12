import Layout from "../Layout";

export default function Praca(props) {
  return (
    <Layout otherLang={props.otherLang} otherPage={props.otherPage}>
      <div
        className="w-12 h-1/2"
        style={{
          borderBottomLeftRadius: "100px",
          backgroundColor: props.color,
        }}
      />
      <div>
        <h1 className="dark:text-white">{props.nazov}</h1>
        <p className="dark:text-white">{props.f.popis}</p>
      </div>
      <img src={props.image} alt={props.f.imageAlt} />
    </Layout>
  );
}
