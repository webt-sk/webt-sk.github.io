import { useRouter } from "next/router";
import { prace, staticPaths } from "../../lib/prace";
import Praca from "../../components/pages/Praca";

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

export default function Projekt() {
  const router = useRouter();
  const { pracaUrl } = router.query;

  let praca = prace.find((praca) => {
    return praca.url === pracaUrl;
  });

  praca.f = praca.sk;

  return (
    <Praca otherLang="en" otherPage={`/en/projects/${praca.url}`} {...praca} />
  );
}
