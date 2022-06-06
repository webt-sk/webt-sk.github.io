import Index from "../../components/pages/Index.js";

const en = {
  h1: "WE CREATE YOUR",
  h1_colored: "WEB, ESHOP",
  h1_3rd_line: "AND APPS",
  button: "GET YOUR PRICE",
  title: "webT - Digital agency",
  description:
    "We are webTool. A digital agency that focuses on creating websites, applications, web applications, e-shops and the like. We do everything and communicate to measure. If you are interested, contact us.",
};

export default function Home() {
  return <Index otherLang="sk" otherPage="/" {...en} />;
}
