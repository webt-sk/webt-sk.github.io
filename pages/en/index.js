import Index from "../../components/pages/Index.js";

const en = {
  h1: "WE CREATE YOUR",
  h1_colored: "WEB, ESHOP AND APPS",
  button: "GET YOUR PRICE",
};

export default function Home() {
  return <Index otherLang="sk" otherPage="/" {...en} />;
}
