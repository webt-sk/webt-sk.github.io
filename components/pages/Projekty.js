import Layout from "../Layout";
import { prace } from "../../lib/prace";
import PraceListItem from "../PraceListItem";
import Head from "next/head";

export default function Projekty(props) {
  return (
    <Layout otherLang={props.otherLang} otherPage={props.otherPage}>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <ul className="w-full">
        {prace.map((praca, index) => (
          <PraceListItem otherLang={props.otherLang} key={index} {...praca} />
        ))}
      </ul>
    </Layout>
  );
}
