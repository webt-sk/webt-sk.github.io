import Index from "../components/pages/Index";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>helo</title>
      </Head>
      <Index otherLang="en" otherPage="/en/" />;
    </>
  );
}
