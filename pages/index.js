import Index from "../components/pages/Index";

const sk = {
  h1: "VYTVÁRAME VAŠE",
  h1_colored: "WEBY, ESHOPY",
  h1_3rd_line: "A APLIKÁCIE",
  button: "ZÍSKAJTE CENOVÚ PONUKU",
  title: "webt - Digitálna agentúra",
  description:
    "Digitálna agentúra, ktorá sa zameriava na tvorbu web stránok, aplikácií, eshopov a podobne. Všetko robíme na mieru a komunikujeme so zákazníkom.",
};

export default function Home() {
  return <Index otherLang="en" otherPage="/en/" {...sk} />;
}
