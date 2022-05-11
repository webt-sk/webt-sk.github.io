import { useRouter } from "next/router";
import { prace, staticPaths } from "../../lib/prace";

export default function Projekt() {
  const router = useRouter();
  const { pracaUrl } = router.query;

  let praca = prace.find((praca) => {
    return praca.url === pracaUrl;
  });

  praca.f = praca.sk;

  console.log(praca);

  //TODO replace with Praca
  return (
    <>
      <h1 className="text-white">{praca.nazov}</h1>
      <h2 className="text-white">{praca.f.nazovPopis}</h2>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: staticPaths,
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {
      prace,
    },
  };
}
