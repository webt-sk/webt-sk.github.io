import ONas from "../../components/pages/ONas";

const en = {
  h1: "We are webT,",
  h1_2: "digital agency,",
  h1_3: "group of creatives,",
  p: "which combines web design expertise to bring you into the online world.",
  p2: "At webT, we focus on the creation of websites, e-shops, applications, but of course also graphics and marketing.",
  title: "About us - webT",
  description: "",
};

export default function about() {
  return <ONas otherLang="sk" otherPage="/o-nas" {...en} />;
}
