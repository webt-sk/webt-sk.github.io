import { useRef, useState, useEffect } from "react";
import {
  Envelope,
  Facebook,
  Instagram,
  Telephone,
} from "react-bootstrap-icons";
import Head from "next/head";

import Layout from "../Layout";

export default function Kontakty(props) {
  const [response, setResponse] = useState({ status: 0 });

  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();
  const honeypotInput = useRef();

  useEffect(() => {
    document.body.className = "bg-light dark:bg-darkClean";

    return () => (document.body.className = "dark:bg-dark bg-light");
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (honeypotInput.current.value === "") {
      fetch("https://manual.webt.sk/form", {
        method: "POST",
        body: JSON.stringify({
          name: nameInput.current.value,
          email: emailInput.current.value,
          message: messageInput.current.value,
        }),
      }).then((response) => setResponse(response));
    } else {
      setResponse({ status: 999 });
    }
  }

  return (
    <Layout
      className="justify-center content-center flex-wrap md:h-fit"
      otherLang={props.otherLang}
      otherPage={props.otherPage}
    >
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      {response.status === 200 ? (
        <p className="text-black dark:text-white">
          {props.otherLang === "sk"
            ? "Ďakujeme za vašu správu, odpovieme Vám čo najskôr."
            : "Thanks for your message, we will respond as soon as we can."}
        </p>
      ) : response.status > 400 ? (
        <>
          <h1 className="text-black dark:text-white w-full text-center text-3xl mb-12">
            {response.status}
          </h1>
          <p className="text-black dark:text-white w-full text-center">
            {props.otherLang === "sk"
              ? "Something went wrong!"
              : "Niečo sa pokazilo!"}
          </p>
        </>
      ) : (
        <>
          <form className="flex flex-col md:w-5/6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={props.otherLang === "sk" ? "Name" : "Celé meno"}
              required=""
              className="kontakty-inputs"
              ref={nameInput}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required=""
              className="kontakty-inputs"
              ref={emailInput}
            />
            <textarea
              name="message"
              placeholder={
                props.otherLang === "sk" ? "Message..." : "Správa..."
              }
              required=""
              rows="10"
              className="kontakty-inputs"
              ref={messageInput}
            ></textarea>
            <input
              type="text"
              name="password"
              className="kontakty-honey"
              tabIndex="-1"
              autoComplete="off"
              ref={honeypotInput}
            />
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
              <a className="kontakty-a" href="https://www.facebook.com/webt.sk">
                Facebook
              </a>
            </li>
            <li>
              <Instagram className="kontakty-svg" />
              <a
                className="kontakty-a"
                href="https://www.instagram.com/webt.sk/"
              >
                Instagram
              </a>
            </li>
          </ul>
        </>
      )}
    </Layout>
  );
}
