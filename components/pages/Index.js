import Navbar from "../Navbar";

export default function Index(props) {
  return (
    <>
      <Navbar otherLang={props.otherLang} otherPage={props.otherPage} />
    </>
  );
}
