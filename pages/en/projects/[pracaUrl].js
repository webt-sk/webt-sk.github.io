import { useRouter } from "next/router";
import { prace, staticPaths } from "../../../lib/prace";
import Praca from "../../../components/pages/Praca";

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

export default function ProjektEN() {
  const router = useRouter();
  const { pracaUrl } = router.query;

  let praca = prace.find((praca) => {
    return praca.url === pracaUrl;
  });

  praca.f = praca.en;

  return (
    <Praca otherLang="sk" otherPage={`/projekty/${praca.url}`} {...praca} />
  );
}
