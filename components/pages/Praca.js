import Layout from "../Layout";

export default function Praca(props) {
  return (
    <Layout otherLang={props.otherLang} otherPage={props.otherPage}>
      <p className="text-white">{props.f.nazovPopis}</p>
    </Layout>
  );
}
