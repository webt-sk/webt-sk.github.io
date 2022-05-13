import {
  Envelope,
  Facebook,
  Instagram,
  Telephone,
} from "react-bootstrap-icons";

import Layout from "../Layout";

export default function Kontakty(props) {
  return (
    <Layout
      className="justify-center content-center flex-wrap md:h-fit"
      otherLang={props.otherLang}
      otherPage={props.otherPage}
    >
      <form
        className="flex flex-col md:w-5/6"
        action="https://submit-form.com/E2Gd0PDo%22%3E"
        method="post"
      >
        <input
          type="text"
          name="name"
          placeholder={props.otherLang === "sk" ? "Name" : "Celé meno"}
          required=""
          className="kontakty-inputs"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required=""
          className="kontakty-inputs"
        />
        <textarea
          name="message"
          placeholder={props.otherLang === "sk" ? "Message..." : "Správa..."}
          required=""
          rows="10"
          className="kontakty-inputs"
        ></textarea>
        <button
          className="bg-zelena dark:bg-modra rounded text-white dark:text-black px-3 py-2 m-auto md:mb-8"
          type="submit"
        >
          {props.otherLang === "sk" ? "Send" : "Odoslať"}
        </button>
      </form>

      <ul className="kontakty-ul">
        <li>
          <Telephone className="kontakty-svg" />
          <a className="kontakty-a" href="tel:+421 917 938 624">
            +421 917 938 624
          </a>
        </li>
        <li>
          <Envelope className="kontakty-svg" />
          <a className="kontakty-a" href="mailto:info@webt.sk">
            info@webt.sk
          </a>
        </li>
        <li>
          <Facebook className="kontakty-svg" />
          <a className="kontakty-a" href="facebook.com/webt">
            Facebook
          </a>
        </li>
        <li>
          <Instagram className="kontakty-svg" />
          <a className="kontakty-a" href="https://www.instagram.com/webt.sk/">
            Instagram
          </a>
        </li>
      </ul>
    </Layout>
  );
}
