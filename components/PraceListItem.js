import Link from "next/link";
import { useState } from "react";

export default function PraceListItem(props) {
  const [hover, setHover] = useState(false);

  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${
        hover ? "text-black dark:text-white" : "text-zelena dark:text-modra"
      } text-4xl sm:text-2xl mx-auto my-10 w-fit font-bold text-center`}
    >
      <Link
        href={
          props.otherLang === "sk"
            ? `/en/projects/${props.url}`
            : `/projekty/${props.url}`
        }
      >
        <a>
          {!hover
            ? props.nazov
            : props.otherLang === "sk"
            ? props.en.nazovPopis
            : props.sk.nazovPopis}
        </a>
      </Link>
    </li>
  );
}
