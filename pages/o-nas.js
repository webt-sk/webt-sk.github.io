import ONas from "../components/pages/ONas";

const sk = {
  h1: "Sme webT,",
  h1_2: "digitálna agentúra,",
  h1_3: "skupina kreativcov,",
  p: "ktorá spája odborné znalosti v tvorbe webov, aby vás uviedla do online sveta.",
  p2: "Vo webT sa venujeme samotnej tvorbe webov, eshopov, aplikácií, ale samozrejme aj grafike a marketingu.",
  title: "O nás - webT",
  description: "Sme digitálna agentúra. Realizujeme weby, eshopy a aplikácie.",
};

export default function oNas() {
  return <ONas otherLang="en" otherPage="/en/about-us" {...sk} />;
}
