import Index from "../components/pages/Index";

const sk = {
  h1: "VYTVÁRAME VAŠE",
  h1_colored: "WEBY, ESHOPY A APLIKÁCIE",
  button: "ZÍSKAJTE CENOVÚ PONUKU"
};

export default function Home() {
  return <Index otherLang="en" otherPage="/en/" {...sk} />;
}
